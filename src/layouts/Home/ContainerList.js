import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import CardList from './CardList.js';


const cards = [1, 2, 3, 4, 5, 6];

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    marginTop: theme.spacing(-10),
  }
 })
)
export default function ContainerList() {
  const classes = useStyles();
   return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={5}>
        {cards.map((card) => (
         <Grid item key={card} xs={12} sm={6} md={3}>
          <CardList />
        </Grid>
        ))}
      </Grid>
    </Container>
   )
  
}
 