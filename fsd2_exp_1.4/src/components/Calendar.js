import React, { useMemo, useCallback } from 'react';
import Day from './Day';
import useCalendar from '../hooks/useCalendar';
import './Calendar.css';

const Calendar = () => {
  // Use the custom hook
  const { days, selectedDay, selectDay, isSelected, clearSelection } = useCalendar();

  // useMemo: Memoize the render count or any derived data
  const stats = useMemo(() => {
    console.log('💰 Computing calendar stats...');
    const totalDays = days.length;
    const selected = selectedDay ? `Day ${selectedDay}` : 'None';
    return { totalDays, selected };
  }, [days, selectedDay]);

  // useCallback: Stable function reference for day selection
  const handleDaySelect = useCallback((dayNumber) => {
    selectDay(dayNumber);
  }, [selectDay]);

  // useMemo: Memoize the days grid to prevent re-rendering
  // when other state changes (like stats)
  const dayGrid = useMemo(() => {
    console.log('🔄 Building day grid...');
    return days.map((dayData, index) => (
      <Day
        key={dayData.day}
        day={dayData.day}
        dayData={dayData}
        isSelected={isSelected(dayData.day)}
        onSelect={handleDaySelect}
        index={index}
      />
    ));
  }, [days, isSelected, handleDaySelect]);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>📅 July 2026</h1>
        <div className="calendar-stats">
          <span>Total Days: {stats.totalDays}</span>
          <span className="selected-day-info">
            Selected: {stats.selected}
          </span>
          {selectedDay && (
            <button 
              className="clear-btn"
              onClick={clearSelection}
              aria-label="Clear selection"
            >
              ✕ Clear
            </button>
          )}
        </div>
        <div className="optimization-badge">
          ⚡ React.memo | useMemo | useCallback
        </div>
      </div>

      <div className="calendar-grid">
        {/* Day headers */}
        <div className="day-headers">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        {/* Days grid */}
        <div className="days-grid">
          {dayGrid}
        </div>
      </div>

      <div className="calendar-footer">
        <p>🔵 Blue = Selected | 🌙 Red = Weekend</p>
        <p className="perf-note">
          Each day component uses <strong>React.memo</strong> to prevent unnecessary re-renders.
          Open console to see render logs!
        </p>
      </div>
    </div>
  );
};

export default Calendar;