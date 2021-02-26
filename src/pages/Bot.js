import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import AvatarBot from "../components/bot/AvatarBot";
import InfoBot from "../components/bot/InfoBot";
import ActionBot from "../components/bot/ActionBot";
import DevsBot from "../components/bot/DevsBot";


let marked = require("marked");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbg: {
    padding: theme.spacing(3, 0),
  },
  action: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  devsContent: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
  },
  descriptionContent: {
    marginTop: theme.spacing(1),
  },
}))
var outputStyle = {
  height: "100vh",
  backgroundColor: "#252525",
  border: '1px solid #33343b',
  padding: "10px 20px",
};
const devTest = ['CraterMaik', 'Maik'];

const testContentDescription = `Marked - Markdown Parser
========================

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
`;

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth={false} className={classes.containerbg}/*  style={{ background: 'linear-gradient(to right, rgba(34, 36, 38, 0.68), rgba(34, 36, 38, 0.68)), url(https://i.imgur.com/94Mqbdi.jpeg) center top / cover no-repeat fixed', height: '150vh' }} */>
        <Container maxWidth={'lg'}>
          <div className={classes.root}>
            <Grid container spacing={1} justify='center'>
              <Grid item xs={12} sm={6}>
                <Box display="flex">
                  <Box m="auto">
                    <AvatarBot />
                  </Box>
                </Box>
                <Box className={classes.action}>
                  <ActionBot />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} >
                <InfoBot />
              </Grid>
              
              <Grid item xs={12}>
                <Divider style={{ marginBottom: 20 }}/>
                <Box className={classes.devsContent}>
                  Desarrollado por: 
                  <Box>
                    {devTest.map((dev) => {
                      return (
                        <DevsBot value={dev} />
                      )
                    })

                    }
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Divider style={{ marginBottom: 20 }}/>
                <Box className={classes.descriptionContent}>
                   <div
                      style={outputStyle}
                      dangerouslySetInnerHTML={{
                        __html: marked(testContentDescription),
                      }}
                    ></div>
                </Box>
              </Grid>
            </Grid>
          </div>
        
        </Container>
      </Container>
    </Layout>
  );
}