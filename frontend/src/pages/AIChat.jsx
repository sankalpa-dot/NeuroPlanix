import { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your AI Study Assistant. How can I help you today?", sender: "ai" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputValue, sender: "user" }]);
      setInputValue("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: "That's a great question! Let me help you understand this concept better...",
            sender: "ai",
          },
        ]);
      }, 500);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-slate-950 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">🧠 AI Chat Assistant</h1>

      <div className="flex-1 bg-slate-900 rounded-xl border border-slate-800 p-6 mb-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-800 text-gray-300"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Ask me anything..."
          className="flex-1 bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-white outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}

