import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './theme';
import './index.css';
import { AuthProvider } from './context/AuthContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider> {/* Wrap your application with AuthProvider */}
                <Router>
                    <App />
                </Router>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);
