import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Joi from "@hapi/joi";
import { useSnackbar } from 'notistack';

import { useMutation, useQuery } from "react-query";
import { TagsSelect } from "react-select-material-ui";
import Layout from '../components/Layout';
import LoadingLinear from '../components/common/LoadingLinear';
import AlertInput from '../components/common/AlertInput';
import { addBot, addTags, getTags } from '../services/bot.service';

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const StyleSelect = {
  color: '#6930c3', 
  backgroundColor: 'transparent',
  border: '1px solid gray', 
  borderRadius: '3px', 
  padding: '0 10px',
  outline: 'none',
}


export default function AddBot() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({success: false});
  const [data, setData] = useState({});
  const [tags, setTags] = useState({});
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
  const handleChangeTags = (values) => {
    console.log(values);
    setTags(values)
  };

  /* const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', {
      variant
    });
  }; */
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
      enqueueSnackbar('Debes agregar los datos de su BOT en los campos requeridos.', { variant: 'error'});
      console.log('entro datos Error');
      return;
    }
    console.log('entro datos');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      mutate.mutate({ data });
      mutateTag.mutate({ id_bot: data.id_bot, tags});
      setAlert({ success: true });
     /*  const limpio = Object.keys(data).reduce((acc, current) => {
        return {
          ...acc,
          [current]: "",
        };
      }, {});
      setData(limpio); */
    }, 5000)

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
                <TagsSelect
                  style={StyleSelect}
                  label="Seleccione las categoria de su BOT"
                  options={!isLoading && tagsQuery.map((tg) => tg.name_tag)}
                  onChange={handleChangeTags}
                  SelectProps={{
                    msgNoOptionsAvailable: "All tags are selected",
                    msgNoOptionsMatchFilter: "No tag matches the filter",
                  }}
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
    </Layout>
    
  );
}
