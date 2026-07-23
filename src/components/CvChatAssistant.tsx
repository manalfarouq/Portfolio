import React, { useState } from 'react';
import { Bot, Send, User, X } from 'lucide-react';

export const CvChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string }>>([
    {
      sender: 'assistant',
      text: "Bonjour ! Je suis l'Assistant IA du portfolio de Farouqi Manal. Posez-moi une question sur ses compétences en Machine Learning, ses projets F1/Vision, ou son parcours à Agadir !",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: 'assistant', text: data.answer }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: "Manal Farouqi est Développeuse IA diplômée d'une Licence d'Excellence à Agadir, experte en Python, TensorFlow, YOLOv8, RAG et Azure. Vous pouvez la contacter par email à farouqimanal@gmail.com !",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full bg-[#171717] text-white shadow-2xl hover:bg-[#333330] transition-all flex items-center gap-2 border-2 border-[#B08D57] cursor-pointer group"
          title="Posez une question à l'Assistant IA"
        >
          <Bot className="w-6 h-6 text-[#B08D57] group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline micro-label text-[#B08D57] pr-1">
            Assistant IA Farouqi
          </span>
        </button>
      ) : (
        <div className="w-80 sm:w-96 bg-[#171717] rounded-2xl border border-[#2B2B28] shadow-2xl overflow-hidden flex flex-col h-[480px]">
          {/* Header */}
          <div className="bg-[#0F0F0E] text-white p-4 flex items-center justify-between border-b border-[#2B2B28]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#B08D57]/20 border border-[#B08D57]/40 flex items-center justify-center">
                <Bot className="w-4 h-4 text-[#B08D57]" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-white">Assistant IA — Portfolio Manal</h4>
                <span className="micro-label text-[#B08D57]">En ligne • Gemini 2.5 Flash</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0F0F0E] text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#171717] border border-[#2B2B28] text-white flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-[#B08D57]" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#B08D57] text-[#171717] font-semibold rounded-tr-none'
                      : 'bg-[#1E1E1C] text-[#E8E8E8] border border-[#2B2B28] rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>

                {m.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-[#B08D57] text-[#171717] flex items-center justify-center shrink-0 mt-1 font-bold">
                    <User className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 items-center text-[#B08D57] italic text-[11px]">
                <Bot className="w-4 h-4 animate-bounce" />
                <span>Manal IA réfléchit...</span>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-[#0F0F0E] border-t border-[#2B2B28] flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: Quels sont ses projets F1 ou sa stack ?"
              className="flex-1 bg-[#1E1E1C] border border-[#2B2B28] rounded-xl px-3 py-2 text-xs font-medium text-white focus:outline-none focus:border-[#B08D57]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 rounded-xl bg-[#0F5132] text-white hover:bg-[#0B3D26] transition-colors cursor-pointer disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

