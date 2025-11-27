import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [isChatMaximized, setIsChatMaximized] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'Sarah', message: 'Hey! How was your game session?', time: '2:30 PM' },
    { id: 2, sender: 'You', message: 'It was amazing! We completed the quest!', time: '2:32 PM' },
    { id: 3, sender: 'Mike', message: 'Great job! Want to join our next event?', time: '2:35 PM' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Add dashboard-page class to body
    document.body.classList.add('dashboard-page');
    
    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('dashboard-page');
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        sender: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="dashboard-container">
      {/* Welcome Header */}
      <div className="dashboard-header">
        <div className="user-info">
          <div className="user-avatar">
            <img src="/btsarmy.png" alt="User Avatar" />
          </div>
          <div className="user-details">
            <h2>Welcome back, <span className="username">Bloxburger</span>!</h2>
            <p>Last login: Today at 2:30 PM</p>
          </div>
        </div>
        <div className="dashboard-actions">
          <Link to="/profile" className="action-btn">Profile</Link>
          <button className="action-btn logout">Logout</button>
        </div>
      </div>

      {/* Posts Section */}
      <div className="posts-section">
        <h3>Recent Posts</h3>
        <div className="posts-grid">
          <div className="post-card">
            <div className="post-header">
              <img src="/tambay.png" alt="User" className="post-avatar" />
              <div className="post-info">
                <h4>Sarah Johnson</h4>
                <span className="post-time">2 hours ago</span>
              </div>
            </div>
            <div className="post-content">
              <p>Just completed the new adventure quest! It was so much fun! 🎮✨</p>
              <img src="/heroes.png" alt="Post image" className="post-image" />
            </div>
            <div className="post-actions">
              <button className="post-btn">👍 Like</button>
              <button className="post-btn">💬 Comment</button>
              <button className="post-btn">🔄 Share</button>
            </div>
          </div>

          <div className="post-card">
            <div className="post-header">
              <img src="/religious.png" alt="User" className="post-avatar" />
              <div className="post-info">
                <h4>Mike Chen</h4>
                <span className="post-time">4 hours ago</span>
              </div>
            </div>
            <div className="post-content">
              <p>Who's up for a group event this weekend? Let's make it epic! 🎉</p>
            </div>
            <div className="post-actions">
              <button className="post-btn">👍 Like</button>
              <button className="post-btn">💬 Comment</button>
              <button className="post-btn">🔄 Share</button>
            </div>
          </div>

          <div className="post-card">
            <div className="post-header">
              <img src="/balintong.png" alt="User" className="post-avatar" />
              <div className="post-info">
                <h4>Emma Davis</h4>
                <span className="post-time">6 hours ago</span>
              </div>
            </div>
            <div className="post-content">
              <p>New level unlocked! The challenges are getting more interesting! 🏆</p>
              <img src="/halloween.png" alt="Post image" className="post-image" />
            </div>
            <div className="post-actions">
              <button className="post-btn">👍 Like</button>
              <button className="post-btn">💬 Comment</button>
              <button className="post-btn">🔄 Share</button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Box */}
      <div className={`chat-box ${isChatMaximized ? 'maximized' : ''}`}>
        <div className="chat-header">
          <div className="chat-title" onClick={() => setIsChatMaximized(!isChatMaximized)}>
            <span className="chat-icon">💬</span>
            <span>BloxyHangout Chat</span>
          </div>
          <div className="chat-controls">
            <button 
              className="chat-btn minimize" 
              onClick={(e) => {
                e.stopPropagation();
                setIsChatMaximized(!isChatMaximized);
              }}
            >
              {isChatMaximized ? '−' : '□'}
            </button>
            <button className="chat-btn close">×</button>
          </div>
        </div>
        
        <div className="chat-messages">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
              <div className="message-content">
                <span className="message-sender">{msg.sender}</span>
                <p>{msg.message}</p>
                <span className="message-time">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
        
        <form className="chat-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard; 