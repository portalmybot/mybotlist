import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import LabelIcon from '@material-ui/icons/Label';
import { useQuery } from "react-query";
import Skeleton from '@material-ui/lab/Skeleton';
import { getTagsHome } from '../../services/bot.service';


/* const tags = ['Anime', 'Economía', 'Soporte', 'Admin', 'Social', 'Videos', 'Moderación'];
 */
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginTop: theme.spacing(3),
    maxWidth: 600,
    margin: theme.spacing(0, 'auto'),
  },
}));

 const Chips = () => {
  const classes = useStyles();
  const {isLoading, data: tagsHomeQuery} = useQuery('tagsHome', getTagsHome, {
     refetchAllOnWindowFocus: false,
  })
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      {isLoading && (
          <>
            <Skeleton variant="text" width="30%" height="32" />
            <Skeleton variant="text" width="30%" height="32"/>
            <Skeleton variant="text" width="30%" height="32"/>
            <Skeleton variant="text" width="30%" height="32"/>
            <Skeleton variant="text" width="30%" height="32"/>
          </>
      )}

      {!isLoading && tagsHomeQuery.map((tag) => {
        return (
          <div>
            <Chip variant="outlined" key={tag.name_tag} label={tag.name_tag} component="a" color="default" style={{backgroundColor: stringToColor(tag.name_tag +'++-'+ tag.id), fontSize: 15}} icon={<LabelIcon />} onClick={handleClick} clickable/>
          </div>
        )

      })}

    </div>
  );
}

export default Chips;
