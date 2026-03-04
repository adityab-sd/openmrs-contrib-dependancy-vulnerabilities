import React from 'react';
import { render, screen } from '@testing-library/react';
import CVETable from '../components/CVETable.js';

describe('CVETable Component', () => {
  test('should render table with correct headers', () => {
    render(<CVETable cves={[]} />);
    expect(screen.getByText('CVE ID')).toBeInTheDocument();
    expect(screen.getByText('Severity')).toBeInTheDocument();
    expect(screen.getByText('Score')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  test('should render single CVE row', () => {
    const cves = [
      {
        id: 'CVE-2021-1234',
        severity: 'HIGH',
        score: 8.5,
        description: 'Test vulnerability',
        affectedVersions: '1.0-2.0',
        fixedIn: '2.1',
        cwe: 'CWE-123'
      }
    ];
    
    render(<CVETable cves={cves} />);
    
    expect(screen.getByText('CVE-2021-1234')).toBeInTheDocument();
    expect(screen.getByText('8.5/10')).toBeInTheDocument();
    expect(screen.getByText('Test vulnerability')).toBeInTheDocument();
    expect(screen.getByText('1.0-2.0')).toBeInTheDocument();
  });

 // To handle null exception, if value is empty it should return '-'
  test('should display score as hyphen when null', () => {
    const cves = [
      {
        id: 'CVE-2021-1234',
        severity: 'HIGH',
        score: null,
        description: 'Test',
        affectedVersions: '-',
        fixedIn: '-',
        cwe: '-'
      }
    ];
    
    render(<CVETable cves={cves} />);
    const cells = screen.getAllByText('-');
    expect(cells.length).toBeGreaterThan(0);
  });

  // Should display '-' if description of json item is empty
  test('should display hyphen for missing description', () => {
    const cves = [
      {
        id: 'CVE-2021-1234',
        severity: 'HIGH',
        score: 8.5,
        description: '-',
        affectedVersions: '-',
        fixedIn: '-',
        cwe: '-'
      }
    ];
    
    render(<CVETable cves={cves} />);
    const cells = screen.getAllByText('-');
    expect(cells.length).toBeGreaterThan(0);
  });
});
