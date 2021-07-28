import React, { useState, useRef } from 'react';
import { PayPalButton } from 'react-paypal-button-v2'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { addUserPremium } from '../../services/me.service';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { green, grey } from '@material-ui/core/colors';
import { useMutation } from "react-query";
import { Typography } from '@material-ui/core';

export default function PayPayPal() {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const timer = useRef();
  const mutate = useMutation(addUserPremium);

  if (paid) {
     timer.current = window.setTimeout(() => {
        window.location.href = `${process.env.REACT_APP_URL_BASE}/me`;
      }, 12000);
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: green[500]}}>
            <CheckCircleIcon style={{ color: grey[50] }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Pago completado, en breve te contactaran via Discord para validar tu compra." secondary="MyBOT List Premium Estándar" />

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
       
      <PayPalButton
        amount = '5.00'
        onSuccess = {(details, data) => {
  
          setPaid(true);
          mutate.mutate({ orderID: data.orderID });
        }}
        catchError = {(err) => {
          setError(err)
          console.error(err);
        }}
        options = {{
          clientId: `${process.env.REACT_APP_CLIENT_PAYPAL}`
        }}
      >
      </PayPalButton>

      <Box display="flex">
         <Box m="auto">
          <Typography variant="subtitle1" gutterBottom>
             Condiciones
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Las compras son únicas para recibir los beneficios. 
            Puedes comprar tantas veces como quieras y se acumularán.
            Una compra solo se puede transferir a un usuario diferente una vez. 
            No se permite la reventa de Premium.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Si tiene alguna pregunta adicional o desea solicitar un reembolso, no dude en contactarnos.
          </Typography>
              
        </Box>
      </Box>

    </>
  );
}
