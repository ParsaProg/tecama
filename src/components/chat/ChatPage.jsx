import { useState, useEffect } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');

  useEffect(() => {
    // Initialize WebSocket
    const websocket = new WebSocket('https://tecama-5mc0bjjrn-parsas-projects-e4a333eb.vercel.app/'); // Replace with your WebSocket server
    setWs(websocket);

    websocket.onopen = () => {
      setConnectionStatus('Connected');
    };

    websocket.onmessage = (event) => {
      const newMessage = { text: event.data, id: Date.now(), sender: 'other' };
      setMessages((prev) => [...prev, newMessage]);
    };

    websocket.onclose = () => {
      setConnectionStatus('Disconnected');
    };

    websocket.onerror = (error) => {
      console.error('WebSocket error:', error);
      setConnectionStatus('Error');
    };

    // Cleanup on unmount
    return () => {
      websocket.close();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() && ws && ws.readyState === WebSocket.OPEN) {
      const message = { text: input, id: Date.now(), sender: 'user' };
      ws.send(input);
      setMessages((prev) => [...prev, message]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Chat App</h1>
        <p className="text-sm">Status: {connectionStatus}</p>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === 'user'
                ? 'bg-blue-500 text-white ml-auto'
                : 'bg-gray-300 text-black mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="p-4 bg-white flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatPage;