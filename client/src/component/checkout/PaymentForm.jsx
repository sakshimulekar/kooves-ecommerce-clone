import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Replace this with your actual API endpoint to fetch the client secret
    fetch('http://localhost:8000/checkout/create-payment-intent',{
        method:'POST'
    })
      .then(response => response.json())

      .then(data => {
        console.log(data)
        setClientSecret(data.clientSecret)
      })
        
      .catch(error => console.error('Error fetching client secret:', error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'John Doe', // Replace with actual name
            address: {
              line1: '123 Main St',
              city: 'City',
              state: 'State',
              postal_code: '12345', // Replace with actual postal code
            },
          },
        },
      });
    if (result.error) {
      console.log('Payment error:', result.error);
      // Show error to the user
    } else {
      console.log('Payment succeeded:', result.paymentIntent);
      // Payment successful, update UI or navigate to a success page
      window.location.href = '/successpayment';
    }
  };

  return (
    <div style={{marginTop:"20%",width:'30%',border:'1px solid black'}}>
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    </div>
  );
};

export default PaymentForm;
