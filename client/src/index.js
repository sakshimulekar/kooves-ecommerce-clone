import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import {ChakraProvider} from "@chakra-ui/react"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
root.render(
  <Elements stripe={stripePromise}>
  <ChakraProvider>
    <BrowserRouter>
      
      <Provider store={store}>
      <App />
      </Provider>
      
    </BrowserRouter>
  </ChakraProvider>
  </Elements>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
