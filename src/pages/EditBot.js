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
import Chip from '@material-ui/core/Chip';
import VisibilityIcon from '@material-ui/icons/Visibility';

import Backdrop from '@material-ui/core/Backdrop';

import Joi from "@hapi/joi";

import { useSnackbar } from 'notistack';

import { useMutation, useQuery } from "react-query";

import Layout from '../components/Layout';
import LoadingLinear from '../components/common/LoadingLinear';
import AlertInput from '../components/common/AlertInput';
import LoadingPage from '../components/common/LoadingPage';
import { getBot, updateBot, addDevs, deleteDevsBot } from '../services/bot.service';
import { Box } from '@material-ui/core';

const marked = require("marked");
const schema = Joi.object({
  prefix_bot: Joi.string().min(1).max(7).required(),
  shortDesc_bot: Joi.string().min(10).max(190).required(),
  id_bot: Joi.string().min(18).max(22).required(),
  support_bot: Joi.string().uri({scheme:['http','https'],allowRelative : false}).allow(null).allow('').optional(),
  web_bot: Joi.string().uri({scheme:['http','https'],allowRelative : false}).allow(null).allow('').optional()
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
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 1, 2, 0),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    padding: theme.spacing(4),
    backgroundColor: '#000000f0',
    
  },
}));



export default function EditBot() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({success: false});
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const [datadevs, setDataDevs] = useState([]);

  const {isLoading, error, data: botQuery = {}} = useQuery(['getBotEdit', {id: id}], getBot)
  const { prefix_bot, shortDesc_bot, tag_bot, support_bot, web_bot, devs, longDesc_bot} = botQuery;

  const [desc, setDesc] = useState();

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setData({
      id_bot: id,
      prefix_bot: prefix_bot,
      shortDesc_bot: shortDesc_bot,
      support_bot: support_bot,
      web_bot: web_bot
    })
    setDesc(longDesc_bot)
  }, [id, prefix_bot, shortDesc_bot, support_bot, web_bot, longDesc_bot]);
  
  const [errors, setErrors] = useState({});

  const mutateUpdateBot = useMutation(updateBot);
  const mutateDevsBot = useMutation(addDevs);
  const mutateDevsDelete = useMutation(deleteDevsBot);

  const handleChange = (fieldName) => (event) => {

    const value = event.target.value;
    
    setData((prev) => ({ ...prev, [fieldName]: value }));
    setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    
  };
  const handleDevs = () => (event) => {

    const valuedevs = event.target.value;
    setDataDevs(valuedevs.split(',').slice(0, 2))
    
  } 
  const handleCancel = () => {
    window.location.href = "http://localhost:3000/me";
  }

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
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      console.log(devs.length);
      setSubmitting(false);

      if (devs.length > 0) {
        if(datadevs.length > 0) {
          mutateDevsDelete.mutate({ data })
          mutateDevsBot.mutate({ id_bot: id, datadevs});
        }

      } else {
        if (datadevs.length > 0) {
          mutateDevsBot.mutate({ id_bot: id, datadevs});

         } else {
          if (devs.length > 0) {
            mutateDevsDelete.mutate({ data })

          }
         }
      }
      
      mutateUpdateBot.mutate({ longDesc_bot: desc, data });
      setAlert({ success: true });

    }, 4000)

  }
  const { success } = alert;
  
  return (
    <Layout>
       {
        isLoading ? (
           <LoadingPage />
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
                value={data["prefix_bot"] ? data["prefix_bot"] : prefix_bot}
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

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="support_bot"
                defaultValue={support_bot}
                value={data["support_bot"]}
                onChange={handleChange("support_bot")}
                error={errors["support_bot"] ? true : false}
                fullWidth
                id="SupportBOT"
                helperText="Enlace de invitación de su servidor soporte"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="web_bot"
                defaultValue={web_bot}
                value={data["web_bot"]}
                onChange={handleChange("web_bot")}
                error={errors["web_bot"] ? true : false}
                fullWidth
                id="WebBOT"
                helperText="Enlace del sitio web"
              />
            </Grid>
            
            <Grid item xs={12}>
                <TextField
                  id="DevsBOT"
                  helperText="Desarrolladores (Agrege el ID del usuario, ejemplo: ID1, ID2)"
                  name="devs"
                  value={data["devs"]}
                  onChange={handleDevs("devs")}
                  rows={4}
                  defaultValue={devs.map(user => user.id_user).join(', ')}
                  variant="outlined"
                  fullWidth
                />

            </Grid>
            <Grid container direction="row" justify="flex-end" >
              <Chip
                icon={<VisibilityIcon />}
                label="Vista Previa"
                onClick={handleToggle}
              />

            </Grid>
            <Grid item xs={12}>
                <TextField
                  id="DescBOT"
                  label="Descripción de su Bot. (Se acepta el formato Markdown MD)"
                  multiline
                  rows={10}
                  defaultValue={desc}
                  onChange={e => setDesc(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
            </Grid>
          </Grid>
          {submitting &&
            <LoadingLinear />
          }
          {success &&
            <AlertInput message={'Su BOT fue editado correctamente.'} />
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
          <Button
            size="large"
            onClick={handleCancel}
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Cancelar
          </Button>

        </form>
      </div>

     </Container>

     )   
    }
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Box dangerouslySetInnerHTML={{
          __html: marked(!desc ? `Bot ${tag_bot}` : desc),
        }}>
        </Box>
      </Backdrop>
    </Layout>
    
  );
}
