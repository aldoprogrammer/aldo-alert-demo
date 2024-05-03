import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AldoAlertProvider } from './context/AldoAlertProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AldoAlertProvider>
    <App />
    </AldoAlertProvider>
  </React.StrictMode>,
)
