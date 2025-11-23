const wsUrl = 'https://tecama-cka8huq29-parsas-projects-e4a333eb.vercel.app';

export function initializeWebSocket(onMessage, onConnect, onDisconnect, onError) {
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
        console.log('WebSocket connected');
        if (onConnect) onConnect();
    };

    ws.onmessage = (event) => {
        console.log(`Received: ${event.data}`);
        if (onMessage) onMessage(event.data);
    };

    ws.onclose = () => {
        console.log('WebSocket disconnected');
        if (onDisconnect) onDisconnect();
        setTimeout(() => initializeWebSocket(onMessage, onConnect, onDisconnect, onError), 5000);
    };

    ws.onerror = (error) => {
        console.error(`WebSocket error: ${error}`);
        if (onError) onError(error);
    };

    return ws;
}

export function sendMessage(ws, message) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(message);
        console.log(`Sent: ${message}`);
    } else {
        console.error('WebSocket is not connected');
        throw new Error('اتصال به سرور برقرار نیست');
    }
}