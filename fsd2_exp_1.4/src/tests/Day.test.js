import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Day from '../components/Day';

describe('Day Component Tests', () => {
  const mockProps = {
    day: 15,
    dayData: {
      day: 15,
      isWeekend: false,
      dayOfWeek: 'Wed'
    },
    isSelected: false,
    onSelect: jest.fn(),
    index: 14
  };

  test('✅ Day component renders correctly with day number', () => {
    render(<Day {...mockProps} />);
    
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('Wed')).toBeInTheDocument();
  });

  test('✅ Day component handles click events', () => {
    const onSelectMock = jest.fn();
    render(<Day {...mockProps} onSelect={onSelectMock} />);
    
    const dayElement = screen.getByTestId('day-15');
    fireEvent.click(dayElement);
    
    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith(15);
  });

  test('✅ Day component shows selected state when isSelected is true', () => {
    render(<Day {...mockProps} isSelected={true} />);
    
    const dayElement = screen.getByTestId('day-15');
    expect(dayElement).toHaveClass('selected');
    expect(screen.getByText('✓ Selected')).toBeInTheDocument();
  });

  test('✅ Day component shows weekend styling when isWeekend is true', () => {
    const weekendProps = {
      ...mockProps,
      dayData: {
        ...mockProps.dayData,
        isWeekend: true
      }
    };
    render(<Day {...weekendProps} />);
    
    const dayElement = screen.getByTestId('day-15');
    expect(dayElement).toHaveClass('weekend');
  });

  test('✅ Day component displays formatted date', () => {
    render(<Day {...mockProps} />);
    
    // Check for the formatted date (July 15, 2026)
    expect(screen.getByText(/July 15, 2026/i)).toBeInTheDocument();
  });

  test('✅ Day component displays day status', () => {
    render(<Day {...mockProps} />);
    
    // For day 15 (odd), should show '📌 Odd'
    expect(screen.getByText('📌 Odd')).toBeInTheDocument();
  });

  test('✅ Day component is accessible with keyboard', () => {
    render(<Day {...mockProps} />);
    
    const dayElement = screen.getByTestId('day-15');
    expect(dayElement).toHaveAttribute('role', 'button');
    expect(dayElement).toHaveAttribute('tabIndex', '0');
    expect(dayElement).toHaveAttribute('aria-label', 'Select day 15');
  });
});