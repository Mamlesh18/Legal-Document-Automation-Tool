import React, { useState } from 'react';
import axios from 'axios';
import './chat-bot-style.css'; // Import your CSS file for styling
import logo10 from './botlogo.png'

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return; // Prevent sending empty messages
  
    // Add the sent message to the messages array
    setMessages(prevMessages => [...prevMessages, { text: message, type: 'sent' }]); 
  
    // Clear the input field
    setMessage(''); 
  
    try {
      // Send the message to the backend
      const res = await axios.post('http://localhost:5000/predict', { message });
  
      // Add the received message to the messages array
      setMessages(prevMessages => [...prevMessages, { text: res.data.response, type: 'received' }]); 
  
      // Update the response state
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen && (
        <img
          src={logo10}
          alt="Chat Bot"
          onClick={toggleChat}
          className="chat-bot-toggle"
        />
      )}
      {isOpen && (
        <div className="chat-container">
          <div className="chat-box">
            <div className="chat-close" onClick={handleClose}>X</div> {/* Close symbol */}
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Type your message..." />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
