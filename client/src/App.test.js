import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  // Arange
  const {getByText} = render(<App />);
  // Act
  const header = getByText(/newsletter/i);
  // Assert
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).not.toBeFalsy();
});

// jest global function
//- test
// test('test concise', () => {
//  const { getByText } = render(<App />);
//  getByText(/testing/i);
// });