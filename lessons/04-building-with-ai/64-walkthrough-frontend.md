# Walkthrough — Frontend

> ⏱ 3 min read · 🟡 Intermediate

## Files: `client/App.tsx`, `client/components/ChatList.tsx`, `client/components/ChatWindow.tsx`

## App.tsx — The Brain

`App.tsx` is the central file. It:
- Holds all the state (chats list, selected chat, messages, loading status)
- Manages the WebSocket connection
- Passes data and actions down to components

### State (What the App Remembers)
```typescript
const [chats, setChats] = useState<Chat[]>([]);           // list of all chats
const [selectedChatId, setSelectedChatId] = useState(null);// which chat is open
const [messages, setMessages] = useState<Message[]>([]);   // messages in current chat
const [isLoading, setIsLoading] = useState(false);         // waiting for AI?
```
Think of `useState` as the app's memory. Every time one of these changes, React re-renders the relevant parts of the UI automatically.

### Fetching Chats
```typescript
const fetchChats = async () => {
  const res = await fetch(`/api/chats`);  // HTTP GET
  const data = await res.json();
  setChats(data);                          // Update state → UI re-renders
};
```
`async/await` means "wait for the network call to finish before continuing." Without it, `data` would be empty because the fetch hadn't completed.

### Handling AI Responses
```typescript
case "assistant_message":
  setMessages((prev) => [
    ...prev,           // keep existing messages
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: message.content,
      timestamp: new Date().toISOString(),
    },
  ]);
  setIsLoading(false);
  break;
```
When an `assistant_message` arrives via WebSocket, a new message is added to the array. React re-renders the chat window. The user sees the message appear.

## ChatList.tsx — The Sidebar

Receives: list of chats, selected chat ID, callback functions
Shows: list of chat names with select and delete actions

```typescript
function ChatList({ chats, selectedChatId, onSelectChat, onNewChat, onDeleteChat }) {
  return (
    <div>
      <button onClick={onNewChat}>+ New Chat</button>
      {chats.map((chat) => (
        <div key={chat.id} onClick={() => onSelectChat(chat.id)}>
          {chat.title}
          <button onClick={() => onDeleteChat(chat.id)}>×</button>
        </div>
      ))}
    </div>
  );
}
```

`chats.map()` loops through every chat and renders one row per chat. `key={chat.id}` helps React track which row is which.

## ChatWindow.tsx — The Conversation

Shows: the messages, a loading indicator, the input box
Receives: messages array, isLoading flag, sendMessage function

The input box:
- Tracks what the user is typing
- When Enter is pressed or Send is clicked, calls `onSendMessage`
- Clears after sending
- Disabled while AI is responding

Messages are rendered differently based on role: user messages right-aligned, assistant messages left-aligned, tool use messages shown with a special indicator.

## What to Ask AI About the Frontend
> "In App.tsx, the messages state is in the parent component but it's used in ChatWindow. Why not put the state directly in ChatWindow? What's the benefit of keeping it in App.tsx?"

---

← [Walkthrough — WebSocket](./63-walkthrough-websocket.md) · [Walkthrough — AI Client](./65-walkthrough-ai-client.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)