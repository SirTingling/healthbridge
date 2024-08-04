import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing global CSS styles
import { BrowserRouter } from 'react-router-dom'; 
import 'react-toastify/dist/ReactToastify.css'; // Importing Toastify CSS for notifications
import { AuthContextProvider } from './context/AuthContext.jsx'; // Importing AuthContextProvider for authentication context
import { ToastContainer } from 'react-toastify'; // Importing ToastContainer for Toastify notifications
//--------------------------------------------------------------------------------------------------------
// Rendering the root component of the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        {/* ToastContainer configuration for notifications */}
        <ToastContainer
          theme='dark'
          position='top-right'
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />
        {/* Main App component */}
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

//-----------------------------------------------------------------------------------------------------------
