import React, { useEffect, useState, useRef } from 'react';
import { initializeWebSocket, sendMessage } from '../../backend/server';

const MessageSender = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const wsRef = useRef(null);

    // Initialize WebSocket
    useEffect(() => {
        wsRef.current = initializeWebSocket(
            (data) => setMessages((prev) => [...prev, `دریافتی: ${data}`]),
            () => setMessages((prev) => [...prev, 'اتصال به سرور برقرار شد']),
            () => setMessages((prev) => [...prev, 'اتصال به سرور قطع شد']),
            (error) => setMessages((prev) => [...prev, `خطا: ${error.message || 'اتصال ناموفق (ممکن است سرور 401 برگرداند)'}`])
        );

        return () => {
            if (wsRef.current) wsRef.current.close();
        };
    }, []);

    // Handle send button click
    const handleSend = () => {
        if (!input.trim()) {
            setMessages((prev) => [...prev, 'لطفاً یک پیام وارد کنید']);
            return;
        }
        try {
            sendMessage(wsRef.current, input);
            setMessages((prev) => [...prev, `ارسالی: ${input}`]);
            setInput('');
        } catch (error) {
            setMessages((prev) => [...prev, `خطا در ارسال: ${error.message}`]);
        }
    };

    return (
        <div className='text-white' style={{ direction: 'rtl', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>ارسال پیام به WebSocket</h1>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="پیام خود را وارد کنید"
                    style={{ padding: '5px', margin: '5px', width: '300px' }}
                />
                <button
                    onClick={handleSend}
                    style={{ padding: '5px 10px', margin: '5px' }}
                >
                    ارسال
                </button>
            </div>
            <h2>پیام‌های ارسالی و دریافتی</h2>
            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    height: '200px',
                    overflowY: 'scroll',
                }}
            >
                {messages.length === 0 ? (
                    <p>هیچ پیامی وجود ندارد</p>
                ) : (
                    messages.map((msg, index) => <p key={index}>{msg}</p>)
                )}
            </div>
        </div>
    );
};

export default MessageSender;