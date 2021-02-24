import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import { green, yellow, /* grey */} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0, 1, 0, 1.5),
      '& .MuiButton-startIcon': {
        marginLeft: '0',
        marginRight: '0',
      },
    minWidth: 0,
    maxWidth: 0,
  }
}));

export default function ButtonSizes({value}) {
  const classes = useStyles();
  
  return (
     <Tooltip TransitionComponent={Zoom} title={value} placement="top">
        <Button color="default" className={classes.button} startIcon={value === 'verificado' ? <VerifiedUserIcon style={{ color: green[500], fontSize: '30px' }}/>: <OfflineBoltIcon style={{ color: yellow[500], fontSize: '30px' }}/> } />
     </Tooltip>
  );
}
