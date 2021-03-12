import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';
/* import axiosHeaders from './axiosHeaders'; */
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query'
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

/* axiosHeaders(); */
reportWebVitals();
