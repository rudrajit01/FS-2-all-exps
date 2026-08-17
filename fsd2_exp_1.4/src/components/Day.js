import React, { memo, useMemo } from 'react';
import './Day.css';

/**
 * Day Component - Optimized with React.memo
 * Re-renders only when props change
 */
const Day = memo(({ day, dayData, isSelected, onSelect, index }) => {
  console.log(`🔵 Day ${day} rendered`);

  // useMemo: Expensive computation example
  // In a real app, this could be formatting dates, calculating lunar phases, etc.
  const formattedDate = useMemo(() => {
    console.log(`💰 Computing expensive date format for day ${day}`);
    // Simulating expensive computation
    const date = new Date(2026, 6, day);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }, [day]);

  // useMemo: Compute day status (expensive calculation)
  const dayStatus = useMemo(() => {
    console.log(`💰 Computing day status for day ${day}`);
    // Simulate expensive calculation
    const isWeekend = dayData?.isWeekend || false;
    const isEvenDay = day % 2 === 0;
    return {
      isWeekend,
      isEvenDay,
      label: isWeekend ? '🌙 Weekend' : isEvenDay ? '📌 Even' : '📌 Odd'
    };
  }, [day, dayData]);

  const handleClick = () => {
    onSelect(day);
  };

  return (
    <div
      className={`day-card ${isSelected ? 'selected' : ''} ${dayStatus.isWeekend ? 'weekend' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Select day ${day}`}
      data-testid={`day-${day}`}
    >
      <div className="day-number">{day}</div>
      <div className="day-weekday">{dayData?.dayOfWeek || ''}</div>
      <div className="day-status">{dayStatus.label}</div>
      <div className="day-date">{formattedDate}</div>
      {isSelected && <div className="selected-badge">✓ Selected</div>}
    </div>
  );
});

// Display name for debugging
Day.displayName = 'Day';

export default Day;