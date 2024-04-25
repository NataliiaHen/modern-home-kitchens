import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { HashRouter as Router } from 'react-router-dom';
import { Root } from './Root';
import { PageSizeProvider } from './storage/PageSizeContext';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

// React Router is included in anticipation of future features. This setup will facilitate the implementation of navigation and routing across different components once new pages and functionalities are added to the application.

root.render(
  <React.StrictMode>
    <Router>
      <PageSizeProvider>
        <Root />
      </PageSizeProvider>
    </Router>
  </React.StrictMode>
);
