import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Joi from "@hapi/joi";
import { useSnackbar } from 'notistack';

import { useMutation, useQuery } from "react-query";

import Layout from '../components/Layout';
import LoadingLinear from '../components/common/LoadingLinear';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AlertInput from '../components/common/AlertInput';
import { addBot, addTags, getTags, botExists } from '../services/bot.service';

const schema = Joi.object({
  id_bot: Joi.number().trim().min(18).max(22).required(),
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddBot() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({success: false});
  const [data, setData] = useState({});
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});
  
  const {isLoading, data: tagsQuery} = useQuery('tags', getTags, {
     refetchAllOnWindowFocus: false,
  })

  

  const mutate = useMutation(addBot);
  const mutateTag = useMutation(addTags);
  const handleChange = (fieldName) => (event) => {
    const value = event.target.value;

    setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    setData((prev) => ({ ...prev, [fieldName]: value }));
    
  };
  const handleChangeTags = (event, values) => {
    let tagsValue = values.map((tag) => tag.name_tag);
    console.log(tagsValue.slice(0, 3));
    setTags(tagsValue.slice(0, 3))

  };

  const handleSubmit = async event => {
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
      enqueueSnackbar('Debes agregar los datos de su BOT en los campos requeridos.', { variant: 'error'});
      
      console.log('entro datos Error');
      return;
    }
    if (tags.length < 1) {
      setErrors({tags_bot: 'tags_bot'})
      enqueueSnackbar('Debes seleccionar las categorias para su BOT.', {
        variant: 'error'
      });
      return;
    } 
    const existsBot = await botExists(data.id_bot)

    if(existsBot) {
      setErrors({id_bot: 'id_bot'})
      enqueueSnackbar('El ID del bot agregado ya esta registrado.', { variant: 'warning'});
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      
      mutate.mutate({ data });
      mutateTag.mutate({ id_bot: data.id_bot, tags});
      setAlert({ success: true });
      const limpio = Object.keys(data).reduce((acc, current) => {
        return {
          ...acc,
          [current]: "",
        };
      }, {});
      setData(limpio);
      setTags([]);
      
    }, 5000)
    setTimeout(() => {
      window.location.href = 'http://localhost:3000/me';
    }, 7000);


  }
  const { success } = alert;
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
               <Autocomplete
                multiple
                limitTags={3}
                id="tags-outlined"
                options={!isLoading && tagsQuery}
                getOptionLabel={(option) => option.name_tag}
                filterSelectedOptions
                onChange={handleChangeTags}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Seleccione las categoria de su BOT"
                    error={errors["tags_bot"] ? true : false}
                  />
                )}
              />
            </Grid>
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="invite_bot"
                value={data["invite_bot"]}
                onChange={handleChange("invite_bot")}
                fullWidth
                id="LinkBOT"
                label="Enlace de invitación de su BOT"
              />
            </Grid>

            <Grid item xs={12}>
                <TextField
                  id="NoteBot"
                  label="Nota Extra de su BOT"
                  name="note_bot"
                  value={data["note_bot"]}
                  onChange={handleChange("note_bot")}
                  multiline
                  rows={4}
                  /* defaultValue="Bot funciona solo con permisos de Administrador, como dato." */
                  placeholder="Bot funciona solo con permisos de Administrador, como dato."
                  variant="outlined"
                  fullWidth
                />

            </Grid>
          </Grid>
          {submitting &&
            <LoadingLinear />
          }
          <Divider />
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
