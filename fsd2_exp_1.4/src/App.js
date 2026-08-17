import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Calendar from './components/Calendar';        // আপনার পুরোনো ক্যালেন্ডার
import PostScheduler from './components/PostScheduler'; // নতুন
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('scheduler'); // 'calendar' বা 'scheduler'

  return (
    <Provider store={store}>
      <div className="App">
        <header className="app-header">
          <p>
            <strong>Name:</strong> Rudrajit Pramanik | <strong>UID:</strong> 24BCY70262 |{' '}
            <strong>Branch:</strong> CSE (Cyber Security)
          </p>
          <div className="tab-bar">
            <button 
              className={activeTab === 'calendar' ? 'tab-active' : 'tab-btn'}
              onClick={() => setActiveTab('calendar')}
            >
              📆 Optimized Calendar (Memo + Hooks)
            </button>
            <button 
              className={activeTab === 'scheduler' ? 'tab-active' : 'tab-btn'}
              onClick={() => setActiveTab('scheduler')}
            >
              📅 Post Scheduler (Redux + Drag-Drop)
            </button>
          </div>
        </header>
        <main>
          {activeTab === 'calendar' && <Calendar />}
          {activeTab === 'scheduler' && <PostScheduler />}
        </main>
        <footer className="app-footer">
          <p>© 2026 - Full-Stack-2 (24CSP-337) | Section: 24BCY-2(B)NTPP</p>
        </footer>
      </div>
    </Provider>
  );
}

export default App;