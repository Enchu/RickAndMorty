import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterInfo from './ui/components/CharacterInfo/CharacterInfo.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
