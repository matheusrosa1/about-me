import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import DarkModeProvider from './contexts/DarkModeProvider.tsx';
/* import './index.css' */

ReactDOM.createRoot(document.getElementById('root')!).render(
/*   <DarkModeProvider> */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
/*   </DarkModeProvider>, */
);
