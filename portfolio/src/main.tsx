import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './assets/css/style.min.css'
import './assets/scss/style.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
