import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DependencyTable from '../components/DependencyTable.js';

describe('DependencyTable Component', () => {
  test('should render table headers', () => {
    render(<DependencyTable dependencies={[]} />);
    expect(screen.getByText('Dependency')).toBeInTheDocument();
    expect(screen.getByText('Version')).toBeInTheDocument();
    expect(screen.getByText('Severity')).toBeInTheDocument();
    expect(screen.getByText('CVEs')).toBeInTheDocument();
  });

  test('should render single dependency', () => {
    const dependencies = [
      {
        name: 'lodash',
        version: '4.17.0',
        cves: [
          { severity: 'HIGH', id: 'CVE-2021-1234' }
        ]
      }
    ];
    
    render(<DependencyTable dependencies={dependencies} />);
    expect(screen.getByText('lodash')).toBeInTheDocument();
    expect(screen.getByText('4.17.0')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument(); 
  });
});
