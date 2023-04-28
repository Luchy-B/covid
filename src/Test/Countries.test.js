import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Country = () => {
  const country = {
    region: 'Nigeria',
    confirmed: 266598,
  };
  return (
    <div>
      <h1>{country.region}</h1>
      <p>{country.confirmed}</p>
    </div>
  );
};

describe('Country', () => {
  test('Displays country data', () => {
    render(<Country />);
    expect(screen.getByText('Nigeria')).toBeInTheDocument();
    expect(screen.getByText('266598')).toBeInTheDocument();
  });
});
