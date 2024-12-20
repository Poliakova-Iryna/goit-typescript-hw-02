import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './components/App/App';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          className: '',
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 1000,
          },
        }}
      />
  </React.StrictMode>
);