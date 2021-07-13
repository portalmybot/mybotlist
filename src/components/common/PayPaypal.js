import React, { useState, useRef, useEffect } from 'react';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { addUserPremium } from '../../services/me.service';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { green, grey } from '@material-ui/core/colors';
import { useMutation } from "react-query";

export default function PayPayPal() {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();
  const timer = useRef();
  const mutate = useMutation(addUserPremium);

  useEffect(() => {
    clearTimeout(timer.current);
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "MyBOT List Premium Estándar por 3 meses",
                amount: {
                  currency_code: "USD",
                  value: 5.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          mutate.mutate();
          console.log(order);
        },
        onError: (err) => {
          setError(err)
          console.error(err);
        },
      })
      .render(paypalRef.current);
      
  }, []);

  if (paid) {
     timer.current = window.setTimeout(() => {
        window.location.href = `${process.env.REACT_APP_URL_BASE}/me`;
      }, 5000);
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: green[500]}}>
            <CheckCircleIcon style={{ color: grey[50] }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Pago completado" secondary="MyBOT List Premium Estándar" />
      </ListItem>
    );
  }

  // If any error occurs
  if (error) {
    return <div>Ocurrió un error al procesar el pago.! Inténtalo de nuevo.</div>;
  }

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CheckCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Total: $5 Dolares" secondary="MyBOT List Premium Estándar" />
      </ListItem>
      <div ref={paypalRef} />
    </>
  );
}
