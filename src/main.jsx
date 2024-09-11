import ReactDOM from 'react-dom/client'
import router from './router/Router.jsx';
import React from 'react';
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/> 
  </React.StrictMode>,
)