import React, {
  useEffect, useState
} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Joi from "@hapi/joi";
import { useSnackbar } from 'notistack';

import { useMutation, useQuery } from "react-query";

import Layout from '../components/Layout';
import LoadingLinear from '../components/common/LoadingLinear';
import AlertInput from '../components/common/AlertInput';
import { getBot, updateBot } from '../services/bot.service';
/* import { getUser } from '../services/me.service';
 */
const schema = Joi.object({
  prefix_bot: Joi.string().min(1).max(7).required(),
  shortDesc_bot: Joi.string().min(10).max(190).required(),
  id_bot: Joi.string().trim().min(18).max(22),
})

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(5)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function EditBot() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({success: false});
  const [data, setData] = useState();
  const { id } = useParams();

  const {isLoading, error, data: botQuery = {}} = useQuery(['getBotEdit', {id: id}], getBot)
  const { prefix_bot, shortDesc_bot} = botQuery;


  useEffect(() => {
    setData({
      id_bot: id,
      prefix_bot: prefix_bot,
      shortDesc_bot: shortDesc_bot
    })
  }, [id, prefix_bot, shortDesc_bot]);

  const [errors, setErrors] = useState({});

  const mutateUpdateBot = useMutation(updateBot);

  const handleChange = (fieldName) => (event) => {

    const value = event.target.value;
    
    setData((prev) => ({ ...prev, [fieldName]: value }));
    setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    
  };
  
  const handleSubmit = event => {
    event.preventDefault();
     
    console.log(data);
    const validation = schema.validate(data, { abortEarly: false });

    if(validation.error) {
      const errors = validation.error.details.reduce((acc, current) => {
        return {
          ...acc,
          [current.context.key]: current.message,
        }
      }, {});
      setErrors(errors);
      enqueueSnackbar('Debes agregar los datos de su BOT en los campos requeridos.', { variant: 'error'});
      return;
    }
    
    console.log('entro datos');
    setSubmitting(true);
    setTimeout(() => {

      setSubmitting(false);
      mutateUpdateBot.mutate({ data });
      setAlert({ success: true });

    }, 4000)

  }
  const { success } = alert;
  
  return (
    <Layout>
       {
        isLoading ? (
           'Cargando...'
        ) : error ? (
          <h1>Error!</h1>
        ) : (
      <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Editar Bot
        </Typography>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                name="prefix_bot"
                defaultValue={prefix_bot}
                value={data["prefix_bot"]}
                onChange={handleChange("prefix_bot")}
                error={errors["prefix_bot"] ? true : false}
                required
                fullWidth
                id="prefixBOT"
                helperText="Prefix BOT"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                name="shortDesc_bot"
                defaultValue={shortDesc_bot}
                value={data["shortDesc_bot"]}
                onChange={handleChange("shortDesc_bot")}
                error={errors["shortDesc_bot"] ? true : false}
                fullWidth
                id="TitleBOT"
                helperText="Un breve titulo de su BOT (minimo de 10 caracteres)"
              />
            </Grid>

     {/*        <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="invite_bot"
                defaultValue={!isLoading ? invite_bot : null}
                value={data["invite_bot"]}
                onChange={handleChange("invite_bot")}
                fullWidth
                id="LinkBOT"
                helperText="Enlace de invitación de su BOT"
              />
            </Grid> */}

           {/*  <Grid item xs={12}>
                <TextField
                  id="NoteBot"
                  helperText="Nota Extra de su BOT"
                  required
                  name="note_bot"
                  value={data["note_bot"]}
                  onChange={handleChange("note_bot")}
                  multiline
                  rows={4}
                  defaultValue="Bot funciona solo con permisos de Administrador, como dato."
                  variant="outlined"
                  fullWidth
                />

            </Grid> */}
          </Grid>
          {submitting &&
            <LoadingLinear />
          }
          {success &&
            <AlertInput />
          }
          <Button
            size="large"
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Guardar
          </Button>

        </form>
      </div>

     </Container>
     )   
    }
    </Layout>
    
  );
}
