import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from '../components/Calendar';

describe('Calendar Component Tests', () => {
  test('✅ Calendar renders successfully', () => {
    render(<Calendar />);
    
    // Check if calendar header is present
    expect(screen.getByText(/July 2026/i)).toBeInTheDocument();
    
    // Check if all 31 days are rendered
    const dayElements = screen.getAllByTestId(/day-/);
    expect(dayElements).toHaveLength(31);
  });

  test('✅ Calendar displays correct number of days', () => {
    render(<Calendar />);
    
    // Check for day 1 and day 31 specifically
    expect(screen.getByTestId('day-1')).toBeInTheDocument();
    expect(screen.getByTestId('day-31')).toBeInTheDocument();
  });

  test('✅ Day selection updates correctly', () => {
    render(<Calendar />);
    
    // Initially no day should be selected
    const initialSelected = screen.queryByText(/Selected: Day/i);
    expect(initialSelected).toBeNull();
    
    // Click on day 15
    const day15 = screen.getByTestId('day-15');
    fireEvent.click(day15);
    
    // Day 15 should now be selected
    expect(screen.getByText(/Selected: Day 15/i)).toBeInTheDocument();
    
    // Day 15 should have the selected class
    expect(day15).toHaveClass('selected');
  });

  test('✅ Clear button clears selection', () => {
    render(<Calendar />);
    
    // Select a day
    const day10 = screen.getByTestId('day-10');
    fireEvent.click(day10);
    
    // Verify selection
    expect(screen.getByText(/Selected: Day 10/i)).toBeInTheDocument();
    expect(day10).toHaveClass('selected');
    
    // Click clear button
    const clearBtn = screen.getByRole('button', { name: /Clear selection/i });
    fireEvent.click(clearBtn);
    
    // Selection should be cleared
    expect(screen.queryByText(/Selected: Day 10/i)).toBeNull();
    expect(day10).not.toHaveClass('selected');
  });

  test('✅ Calendar stats display correctly', () => {
    render(<Calendar />);
    
    // Check total days count
    expect(screen.getByText(/Total Days: 31/i)).toBeInTheDocument();
  });

  test('✅ Optimization badges are displayed', () => {
    render(<Calendar />);
    
    expect(screen.getByText(/React.memo/i)).toBeInTheDocument();
    expect(screen.getByText(/useMemo/i)).toBeInTheDocument();
    expect(screen.getByText(/useCallback/i)).toBeInTheDocument();
  });
});