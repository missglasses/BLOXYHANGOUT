import { useEffect, useState } from 'react';

function Profile() {
  const [newPost, setNewPost] = useState('');
  const [isChatMaximized, setIsChatMaximized] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'Cinnamon', message: 'Kelan update??', time: '2:30 PM' },
    { id: 2, sender: 'Aki', message: 'sa oct 9 yung upd', time: '2:32 PM' },
    { id: 3, sender: 'Cinnamon', message: 'What time ba?', time: '2:35 PM' },
    { id: 4, sender: 'Sck', message: '9pm ata', time: '2:35 PM' }
    
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [userPosts, setUserPosts] = useState([
    {
      id: 1,
      content: "Cosplay with the peeps! @sck8well @dawnn @BreadyBear @nobibi",
      image: "/heroes.png",
      likes: 24,
      comments: 8,
      shares: 3,
      time: "2 hours ago"
    },
    {
      id: 2,
      content: "HALLOWEEN PARTY | Oct 18 9:00 PM | NBH: MARIA_MERCEDES98 | PLOT: AKITOKE",
      likes: 18,
      comments: 12,
      shares: 5,
      time: "1 day ago"
    },
    {
      id: 3,
      content: "New level unlocked! The challenges are getting more interesting! 🏆 #LevelUp #Achievement",
      image: "/halloween.png",
      likes: 31,
      comments: 15,
      shares: 7,
      time: "3 days ago"
    }
  ]);

  useEffect(() => {
    // Add dashboard-page class to body for consistent background
    document.body.classList.add('dashboard-page');
    
    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('dashboard-page');
    };
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: userPosts.length + 1,
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0,
        time: "Just now"
      };
      setUserPosts([post, ...userPosts]);
      setNewPost('');
    }
  };

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
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="/btsarmy.png" alt="Profile Avatar" />
        </div>
        <div className="profile-info">
          <h1>Bloxburger</h1>
          <p className="profile-status">🟢 Online</p>
          <p className="profile-bio">Passionate Bloxburg player and community member. Love exploring new adventures and making friends!</p>
          <button className="edit-profile-btn">✏️ Edit Profile</button>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-number">156</span>
          <span className="stat-label">Friends</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">42</span>
          <span className="stat-label">Level</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">1.2K</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">89</span>
          <span className="stat-label">Achievements</span>
        </div>
      </div>

      {/* Twitter-style Post Container */}
      <div className="profile-posts">
        {/* Create Post */}
        <div className="create-post">
          <div className="post-input-container">
            <img src="/btsarmy.png" alt="Profile" className="post-avatar" />
            <form onSubmit={handlePostSubmit} className="post-form">
              <textarea
                placeholder="What's happening in Bloxburg?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="post-textarea"
              />
              <div className="post-actions">
                <button type="submit" className="post-btn">Post</button>
              </div>
            </form>
          </div>
        </div>

        {/* User Posts */}
        <div className="posts-feed">
          {userPosts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <img src="/btsarmy.png" alt="Profile" className="post-avatar" />
                <div className="post-info">
                  <h4>Bloxburger</h4>
                  <span className="post-time">{post.time}</span>
                </div>
              </div>
              <div className="post-content">
                <p>{post.content}</p>
                {post.image && (
                  <img src={post.image} alt="Post" className="post-image" />
                )}
              </div>
              <div className="post-actions">
                <button className="action-btn">
                  <span>❤️</span>
                  <span>{post.likes}</span>
                </button>
                <button className="action-btn">
                  <span>💬</span>
                  <span>{post.comments}</span>
                </button>
                <button className="action-btn">
                  <span>🔄</span>
                  <span>{post.shares}</span>
                </button>
                <button className="action-btn">
                  <span>📤</span>
                </button>
              </div>
            </div>
          ))}
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

export default Profile; 