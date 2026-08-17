import { useState, useMemo, useCallback } from 'react';

/**
 * Custom hook for calendar logic with performance optimizations
 * @returns {Object} Calendar state and functions
 */
export const useCalendar = () => {
  // State for selected day
  const [selectedDay, setSelectedDay] = useState(null);

  // useMemo: Cache the days array - expensive computation
  // Generates 31 days only once, not on every render
  const days = useMemo(() => {
    console.log('🔄 Generating days array (expensive computation)');
    return Array.from({ length: 31 }, (_, index) => ({
      day: index + 1,
      // Simulate additional data that would be expensive to compute
      isWeekend: (index + 1) % 7 === 0 || (index + 1) % 7 === 6,
      dayOfWeek: new Date(2026, 6, index + 1).toLocaleDateString('en-US', { 
        weekday: 'short' 
      })
    }));
  }, []); // Empty dependency array = computed once

  // useCallback: Stable function reference - prevents recreation on each render
  const selectDay = useCallback((dayNumber) => {
    console.log(`📅 Day selected: ${dayNumber}`);
    setSelectedDay(dayNumber);
  }, []);

  // useCallback: Stable function reference
  const isSelected = useCallback((dayNumber) => {
    return selectedDay === dayNumber;
  }, [selectedDay]);

  // useCallback: Clear selection
  const clearSelection = useCallback(() => {
    setSelectedDay(null);
  }, []);

  return {
    days,
    selectedDay,
    selectDay,
    isSelected,
    clearSelection
  };
};

export default useCalendar;