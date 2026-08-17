import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLanguage } from './languageSlice';
import translations from './translations';
import Filter from './Filter';
import PostsList from './PostsList';
import './App.css';

function App() {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const t = translations[language];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">{t.appTitle}</h1>
        <button
          className="toggle-btn"
          onClick={() => dispatch(toggleLanguage())}
        >
          {t.toggleButton}
        </button>
      </header>
      <Filter />
      <PostsList />
    </div>
  );
}

export default App;

