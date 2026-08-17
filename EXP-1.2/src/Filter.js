import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from './selectors';
import { setFilter } from './postsSlice';
import translations from './translations';

function Filter() {
  const currentFilter = useSelector(selectFilter);
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const t = translations[language];

  const categories = ['All', 'React', 'Redux', 'JavaScript'];

  return (
    <div className="filter-section">
      <label className="filter-label" htmlFor="category-select">
        {t.filterLabel}
      </label>
      <select
        id="category-select"
        className="filter-select"
        value={currentFilter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <span className="filter-badge">
        {t.currentLabel} <strong>{currentFilter}</strong>
      </span>
    </div>
  );
}

export default Filter;

