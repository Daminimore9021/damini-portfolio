import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const DAMINI_CONTEXT = `
You are Damini More's AI Assistant. Your goal is to represent Damini professionally to potential clients and recruiters.
Damini is an AI Workflow Automation expert and Developer.

Key Details about Damini:
- Current Role: AI Workflow Automation Intern at NITI AI Pvt Ltd (since August 2025).
- Past Role: Data Procedures at NITI AI Pvt Ltd (Aug 2024 - Oct 2024).
- Key Projects:
    - SMS (Student Management System): A high-performance management system.
    - Habit Tracker: Comprehensive productivity app. (GitHub: https://github.com/Daminimore9021/Habit-Tracker.git)
    - Car Pooling Platform: Scalable ride-sharing architecture. (GitHub: https://github.com/Daminimore9021/Car-Pooling.git)
    - Personal Expense Tracker: Daily expenditure management app. (GitHub: https://github.com/Daminimore9021/personal-expense-tracker.git)
- Skills:
    - Programming: Python, SQL, C/C++, HTML5, CSS3, JavaScript.
    - AI & Automation: AI Workflow Automation, AI Agents, LLMs, RAG.
    - No-Code/Low-Code Tools: Pucho.ai, Make.com, n8n, Activepieces, Lindy.ai.
    - Soft Skills: Leadership, Communication, Problem Solving.
- Education: Bachelor of Engineering (BE) in Information Technology from L.D. College of Engineering (Expected 2026).
- Location: Based in Ahmedabad, India.
- Personality: Professional, creative, helpful, and tech-savvy.

Instructions for responses:
1. Be professional but approachable.
2. If asked about her experience, highlight her work with Pucho.ai and building 400+ integration workflows.
3. If an HR recruiter asks, emphasize her problem-solving skills and leadership.
4. If a client asks, focus on how she can automate their business processes using AI.
5. Keep responses concise but informative.
6. Do not make up information that isn't provided here. If you don't know, say you can help them connect with Damini directly.
7. Use "Damini" in the third person or "we" if referring to her services.
`;

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Hi! I\'m Aira, Damini\'s digital avatar. Feel free to ask me anything about her skills or projects!' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        if (!GEMINI_API_KEY) {
            setMessages(prev => [...prev, { role: 'bot', content: "API Key missed! Please add it to your .env file." }]);
            setIsLoading(false);
            return;
        }

        const callGemini = async (modelName) => {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 12000);

            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    signal: controller.signal,
                    body: JSON.stringify({
                        contents: [
                            { role: 'user', parts: [{ text: DAMINI_CONTEXT }] },
                            ...messages.map(msg => ({
                                role: msg.role === 'user' ? 'user' : 'model',
                                parts: [{ text: msg.content }]
                            })),
                            { role: 'user', parts: [{ text: input }] }
                        ],
                        generationConfig: { temperature: 0.7, maxOutputTokens: 500 }
                    })
                });

                clearTimeout(timeoutId);
                const data = await response.json();

                if (response.status === 429) throw new Error("QUOTA");
                if (data.error) throw new Error(data.error.message);

                return data.candidates?.[0]?.content?.parts?.[0]?.text;
            } catch (err) {
                clearTimeout(timeoutId);
                throw err;
            }
        };

        // Try the most stable alias first
        const modelPool = ['gemini-flash-latest', 'gemini-2.0-flash', 'gemini-pro-latest'];
        let success = false;
        let lastError = "";

        for (const model of modelPool) {
            try {
                const reply = await callGemini(model);
                if (reply) {
                    setMessages(prev => [...prev, { role: 'bot', content: reply }]);
                    success = true;
                    break;
                }
            } catch (error) {
                console.warn(`Model ${model} failed:`, error.message);
                lastError = error.message;
                if (error.message === "QUOTA") {
                    setMessages(prev => [...prev, { role: 'bot', content: "Aira is at its free limit! 1 minute chill kijiye, phir se baat karte hain. ✨" }]);
                    success = true;
                    break;
                }
            }
        }

        if (!success) {
            setMessages(prev => [...prev, { role: 'bot', content: "Server thoda busy hai. Ek baar refresh karke try karein?" }]);
        }
        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="glass-card mb-4 w-[350px] md:w-[400px] h-[500px] rounded-3xl flex flex-col overflow-hidden shadow-2xl border transition-all"
                        style={{ borderColor: 'var(--border-color)' }}
                    >
                        {/* Header */}
                        <div className="p-4 border-b flex items-center justify-between bg-white/5" style={{ borderColor: 'var(--border-color)' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
                                    <Bot size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>Aira: The Portfolio AI</h3>
                                    <span className="text-[10px] flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        Free Lifetime Active
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none'
                                        : 'glass-card rounded-tl-none border shadow-sm'
                                        }`}
                                        style={msg.role !== 'user' ? { borderColor: 'var(--border-color)', backgroundColor: 'var(--glass-bg)' } : {}}
                                    >
                                        {msg.role === 'user' ? (
                                            msg.content
                                        ) : (
                                            <ReactMarkdown className="markdown-content">
                                                {msg.content}
                                            </ReactMarkdown>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="glass-card p-3 rounded-2xl rounded-tl-none border flex items-center gap-2"
                                        style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--glass-bg)' }}
                                    >
                                        <Loader2 size={16} className="animate-spin text-blue-500" />
                                        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Aira is thinking...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSendMessage} className="p-4 border-t bg-white/5 flex gap-2" style={{ borderColor: 'var(--border-color)' }}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask Aira anything..."
                                className="flex-grow bg-black/10 border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                                style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(true)}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)] transition-all relative group"
                >
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
                    <MessageSquare size={28} className="relative z-10" />
                </motion.button>
            )}
        </div>
    );
};

export default Chatbot;
