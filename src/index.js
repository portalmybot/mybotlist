import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';
/* import axiosHeaders from './axiosHeaders'; */
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

/* axiosHeaders(); */
reportWebVitals();
