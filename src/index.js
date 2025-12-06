import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // This is required for Tailwind to be processed by react-scripts

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);