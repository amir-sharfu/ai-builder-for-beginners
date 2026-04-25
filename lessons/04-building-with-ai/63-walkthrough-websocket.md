# Walkthrough — WebSocket

> ⏱ 3 min read · 🟡 Intermediate

## Files: `server/server.ts` (WebSocket section) + `client/App.tsx` (WebSocket section)
The WebSocket system has two sides: the server that manages connections, and the frontend that uses them.

## The Server Side

### Opening a Connection
```typescript
wss.on("connection", (ws: WSClient) => {
  ws.isAlive = true;
  ws.send(JSON.stringify({ type: "connected" }));
```
When a browser connects, the server marks it as alive and immediately sends a "connected" confirmation.

### Receiving Messages
```typescript
ws.on("message", (data) => {
  const message = JSON.parse(data.toString());

  switch (message.type) {
    case "subscribe":
      // Browser wants to watch a specific chat
      const session = getOrCreateSession(message.chatId);
      session.subscribe(ws);
      // Send existing messages to the new subscriber
      ws.send(JSON.stringify({ type: "history", messages }));
      break;

    case "chat":
      // Browser sent a user message
      const session = getOrCreateSession(message.chatId);
      session.sendMessage(message.content);
      break;
  }
});
```
All WebSocket messages from the browser come through here. A `switch` routes them by type.

### The Heartbeat (Keeping Connections Alive)
```typescript
const heartbeat = setInterval(() => {
  wss.clients.forEach((ws) => {
    if (client.isAlive === false) return client.terminate();
    client.isAlive = false;
    client.ping();  // Send a ping
  });
}, 30000); // Every 30 seconds
```
Every 30 seconds, the server pings every connected client. If a client doesn't respond (network died, tab closed), `isAlive` stays `false` and the server terminates the connection. Without this, dead connections would accumulate forever.

## The Frontend Side

### Connecting
```typescript
const WS_URL = `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}/ws`;

const { sendJsonMessage, readyState, lastJsonMessage } = useWebSocket(WS_URL, {
  shouldReconnect: () => true,
  reconnectAttempts: 10,
  reconnectInterval: 3000,
});
```
Connects to the WebSocket URL. Automatically reconnects if the connection drops — up to 10 attempts, 3 seconds apart.

### Handling Incoming Messages
```typescript
useEffect(() => {
  if (lastJsonMessage) {
    handleWSMessage(lastJsonMessage);
  }
}, [lastJsonMessage]);
```
Whenever a new message arrives from the server, `handleWSMessage` processes it. React re-renders automatically.

### Sending Messages
```typescript
sendJsonMessage({ type: "chat", content, chatId: selectedChatId });
```
One line to send a message to the server.

## The Message Protocol
Every WebSocket message is a JSON object with a `type` field:

| Direction | Type | When |
|-----------|------|------|
| Server → Client | `connected` | On connection |
| Server → Client | `history` | After subscribing |
| Server → Client | `assistant_message` | AI response chunk |
| Server → Client | `tool_use` | Claude using a tool |
| Server → Client | `result` | Turn complete |
| Client → Server | `subscribe` | Open a chat |
| Client → Server | `chat` | Send a message |

---

← [Walkthrough — The Server](./62-walkthrough-server.md) · [Walkthrough — Frontend](./64-walkthrough-frontend.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)