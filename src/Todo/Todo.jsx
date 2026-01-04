import React, { useState } from 'react'

export default function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleTodo = () => {
    if (input.trim() === "") return;

    const item = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodo((pre) => [...pre, item]);
    setInput("");
  };

  const handleToggle = (id) => {
    setTodo(
      todo.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };
 
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md">

        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Todo App
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            onClick={handleTodo}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
        {todo.length===0? <p className="text-center text-gray-500 mt-5">No todos available. Please add some tasks.</p>:<ul className="mt-5 space-y-3">
          {todo.map((t) => (
            <li
              key={t.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => handleToggle(t.id)}
                  className="h-5 w-5 accent-blue-600"
                />

                <span
                  className={`text-lg ${
                    t.completed ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {t.text}
                </span>
              </div>

              <button
                onClick={() => handleDelete(t.id)}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>}

        
      </div>
    </div>
  );
}
