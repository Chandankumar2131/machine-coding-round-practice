import React, { useState } from 'react'

export default function Chips() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);

  const keyHandle = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setChips((prev) => [...prev, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const newChips = chips.filter((_, i) => i !== index);
    setChips(newChips);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      {/* Input */}
      <input
        type="text"
        placeholder="Enter chip text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={keyHandle}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 
                   focus:ring-blue-500 focus:outline-none mb-4"
      />

      {/* Chips Container */}
      <div className="flex flex-wrap gap-3">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-blue-100 text-blue-800 
                       px-4 py-1 rounded-full shadow-sm border border-blue-200"
          >
            <span className="font-medium">{chip}</span>
            <button
              onClick={() => handleDelete(index)}
              className="bg-blue-300 hover:bg-blue-400 text-white 
                         rounded-full w-5 h-5 flex items-center justify-center 
                         text-xs font-bold transition"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
