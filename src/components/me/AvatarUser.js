import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { amber } from '@material-ui/core/colors';
import { Tooltip } from '@material-ui/core';
import BeenhereIcon from '@material-ui/icons/Beenhere';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  }
}));

export default function AvatarBot({ user, premium }) {
  const classes = useStyles();

  return (premium ? (
    <Tooltip title="MyBOT List Premium">
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={<BeenhereIcon style={{ fontSize: 40, color: amber[500] }} />}
      >
        
        <Avatar variant='circular' className={classes.large} alt={user.social_provider} src={user.social_avatarUrl} />
      </Badge>
    </Tooltip>
  ) : (
    <Avatar variant='circular' className={classes.large} alt={user.social_provider} src={user.social_avatarUrl} />
  )

  );
}
