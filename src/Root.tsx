import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import { HomePage } from './components/HomePage';
import { ErrorPage } from './components/ErrorPage';

export const Root: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
