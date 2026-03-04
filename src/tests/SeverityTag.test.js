import React from 'react';
import { render, screen } from '@testing-library/react';
import SeverityTag from '../components/SeverityTag.js';

describe('SeverityTag Component', () => {
  
  test('should render CRITICAL severity tag', () => {
    render(<SeverityTag severity="CRITICAL" />);
    expect(screen.getByText('CRITICAL')).toBeInTheDocument();
    expect(screen.getByText('CRITICAL')).toHaveClass('pill', 'CRITICAL');
  });


  test('should convert lowercase severity to uppercase', () => {
    render(<SeverityTag severity="critical" />);
    expect(screen.getByText('CRITICAL')).toBeInTheDocument();
  });
});
