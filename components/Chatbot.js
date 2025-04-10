
import React, { useState } from "react";
import "../css/Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async () => {
    if (userInput.trim()) {
      const newMessages = [...messages, { role: "user", content: userInput }];
      setMessages(newMessages);

      try {
        const response = await fetch("http://localhost:7203/api/Chatbot/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: userInput })
        });

        const data = await response.json();
        const botMessage = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

        setMessages([...newMessages, { role: "bot", content: botMessage }]);
      } catch (error) {
        setMessages([
          ...newMessages,
          { role: "bot", content: "Failed to get response. Please try again." },
        ]);
      }

      setUserInput("");
    }
  };

  return (
    <div className={`chatbot ${isOpen ? "open" : ""}`}>
      {!isOpen && <div className="chatbot-icon" onClick={toggleChat}>💬</div>}

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h4>Chatbot Assistant</h4>
            <button className="close-button" onClick={toggleChat}>✖</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>{msg.content}</div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;