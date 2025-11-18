import ReactDOM from 'react-dom/client';
import router from './router/Router.jsx';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
