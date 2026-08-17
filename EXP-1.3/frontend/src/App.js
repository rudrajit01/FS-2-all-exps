// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    // Optional: check token validity on load? We'll let Dashboard handle it.

    return (
        <div className="App">
            {token ? (
                <Dashboard token={token} setToken={setToken} />
            ) : (
                <Login setToken={setToken} />
            )}
        </div>
    );
}

export default App;