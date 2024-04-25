import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <div className="page__content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
