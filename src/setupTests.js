// src/setupTests.js
import '@testing-library/jest-dom/extend-expect';

// This will ensure each test runs with a DOM element with the ID 'root'
beforeEach(() => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
});

// Optionally, you can also clean up the DOM after each test
afterEach(() => {
  document.body.innerHTML = '';
});
