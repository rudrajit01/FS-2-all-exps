import { createSelector } from 'reselect';
import translations from './translations';

// Basic selectors
export const selectFilter = (state) => state.posts.filter;
export const selectLanguage = (state) => state.language;

// Select posts from translations based on current language
export const selectPosts = createSelector(
  [selectLanguage],
  (language) => {
    const langData = translations[language];
    return langData ? langData.posts : [];
  }
);

// Memoized selector to filter posts by category
export const selectFilteredPosts = createSelector(
  [selectPosts, selectFilter],
  (posts, filter) => {
    console.log('🔄 Filtering in progress...');
    if (filter === 'All') {
      return posts;
    }
    return posts.filter((post) => post.category === filter);
  }
);

