import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
/* import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'; */
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
/* import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'; */
import { green } from '@material-ui/core/colors';

/* import Form from '@material-ui/core/Form'; */
import Joi from "@hapi/joi";

import { useMutation } from "react-query";

import Layout from '../components/Layout';
import LoadingLinear from '../components/common/LoadingLinear';
import { addBot } from '../services/bot.service';

const schema = Joi.object({
  id_bot: Joi.string().trim().min(18).max(22).required(),
  idUser_bot: Joi.string().trim().min(18).max(22),
  prefix_bot: Joi.string().min(1).max(100).required(),
  shortDesc_bot: Joi.string().min(10).max(190).required(),
  note_bot: Joi.string(),
  invite_bot: Joi.string(),
})

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(5)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  colorNote: {
    borderColor: green,
    borderWidth: 2,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Tags = [{
    value: '1',
    label: 'Adminstración',
  },
  {
    value: '2',
    label: 'Memes',
  },
  {
    value: '3',
    label: 'Musica',
  },
  {
    value: '4',
    label: 'Util',
  },
  {
    value: '5',
    label: 'Moderación',
  },
  {
    value: '6',
    label: 'Imagenes',
  },
];
const Libs = [{
    value: '1',
    label: 'Discord.js',
  },
  {
    value: '2',
    label: 'discord.php',
  },
  {
    value: '3',
    label: 'discord.py',
  },
  {
    value: '4',
    label: 'Eris',
  },
  {
    value: '5',
    label: 'DiscordRB',
  },
  {
    value: '6',
    label: 'discordUnity',
  },
];

export default function AddBot() {
  const classes = useStyles();
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const mutate = useMutation(addBot);
 /*  const [state, setState] = useState({
    tag: '',
    lib: ''
  }); 
 */
   const handleChange = (fieldName) => (event) => {
    // const name = event.target.name;

    const value = event.target.value;

     setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
     setData((prev) => ({ ...prev, [fieldName]: value }));

   /*  setState({
      ...state,
      [name]: event.target.value,
    }); */
  };

  const handleSubmit = event => {
    event.preventDefault();

    const validation = schema.validate(data, { abortEarly: false });
    if(validation.error) {
      const errors = validation.error.details.reduce((acc, current) => {
        return {
          ...acc,
          [current.context.key]: current.message,
        }
      }, {});
      setErrors(errors);
      console.log('entro datos Error');
      return;
    }
    console.log('entro datos');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);

      alert('Ha enviado el formulario.')
      mutate.mutate({ data });
      const limpio = Object.keys(data).reduce((acc, current) => {
        return {
          ...acc,
          [current]: "",
        };
      }, {});
      setData(limpio);
    }, 5000)


  }

  return (
    <Layout>
      <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Ingrese la información de su bot
        </Typography>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                name="id_bot"
                value={data["id_bot"]}
                onChange={handleChange("id_bot")}
                error={errors["id_bot"] ? true : false}
                variant="outlined"
                required
                fullWidth
                id="idBot"
                label="ID BOT (550712806543065108)"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                name="prefix_bot"
                value={data["prefix_bot"]}
                onChange={handleChange("prefix_bot")}
                error={errors["prefix_bot"] ? true : false}
                required
                fullWidth
                id="prefixBOT"
                label="Prefix BOT"
                autoComplete="prefixBOT"
              />
            </Grid>

          {/*   <Grid item xs={12}>
              <TextField
                label="Servidor Discord (Soporte)"
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: <InputAdornment position="start">https://discord.gg/</InputAdornment>,
                }}
                variant="outlined"
                fullWidth
              />
            </Grid> */}

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                name="shortDesc_bot"
                value={data["shortDesc_bot"]}
                onChange={handleChange("shortDesc_bot")}
                error={errors["shortDesc_bot"] ? true : false}
                fullWidth
                id="TitleBOT"
                label="Un breve titulo de su BOT (minimo de 10 caracteres)"
                autoComplete="TitleBOT"
              />
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <Select
                id="outlined-select-tag"
                displayEmpty
                fullWidth
                inputProps={{
                  name: 'tag',
                  id: 'tag-simple',
                }}
                value={state.tag}
                onChange={handleChange}
                variant="outlined"
              > 
                <MenuItem value="" disabled>
                  Categoria
                </MenuItem>
                {Tags.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <Form>Seleccione una Categoria</Form>
            </Grid>

            <Grid item xs={12} sm={6}>
              
              <Select
                id="outlined-select-lib"
                inputProps={{
                  name: 'lib',
                  id: 'lib-simple',
                }}
                displayEmpty
                fullWidth
                value={state.lib}
                onChange={handleChange}
                variant="outlined"
              > 
              <MenuItem value="" disabled>
                Libreria
              </MenuItem>
                {Libs.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <Form>Seleccione una Libreria</Form>
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="invite_bot"
                value={data["invite_bot"]}
                onChange={handleChange("invite_bot")}
                fullWidth
                id="LinkBOT"
                label="Enlace de invitación de su BOT"
                autoComplete = "LinkBOT"
              />
            </Grid>

            <Grid item xs={12}>
                <TextField
                  id="NoteBot"
                  label="Nota Extra de su BOT"
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

            </Grid>
          </Grid>
          {submitting &&
            <LoadingLinear />
          }
          <Button
            size="large"
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Agregar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

     </Container>
    </Layout>
    
  );
}
