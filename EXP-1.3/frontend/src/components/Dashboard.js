// frontend/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ token, setToken }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            if (!token) return;
            try {
                const response = await axios.get('http://localhost:5000/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.data.success) {
                    setUserInfo(response.data.user);
                } else {
                    setError('Failed to fetch profile');
                }
            } catch (err) {
                setError(err.response?.data?.message || 'Error fetching profile');
                // If token invalid, log out
                if (err.response?.status === 401 || err.response?.status === 403) {
                    handleLogout();
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        setToken(null);
        setUserInfo(null);
    };

    if (loading) return <div style={styles.container}>Loading dashboard...</div>;
    if (error) return <div style={styles.container}><p style={styles.error}>{error}</p><button onClick={handleLogout}>Logout</button></div>;

    return (
        <div style={styles.container}>
            <h2>Dashboard</h2>
            {userInfo ? (
                <div>
                    <p><strong>Username:</strong> {userInfo.username}</p>
                    <p><strong>Role:</strong> {userInfo.role}</p>
                    <p><strong>User ID:</strong> {userInfo.userId}</p>
                </div>
            ) : (
                <p>No user data</p>
            )}
            <button onClick={handleLogout} style={styles.button}>Logout</button>
        </div>
    );
};

const styles = {
    container: { maxWidth: '400px', margin: '50px auto', padding: '20px', textAlign: 'center' },
    error: { color: 'red' },
    button: { padding: '10px 20px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default Dashboard;