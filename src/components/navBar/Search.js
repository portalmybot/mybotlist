import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useQuery } from 'react-query'

import { getHomeSearchBots } from '../../services/bot.service';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(5),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  const {isLoading, data: listSearchBots} = useQuery('listSearchBots', getHomeSearchBots)

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  return (
    <div className={classes.search}>
      <div style={{ width: 250 }}>
        <ReactSearchAutocomplete
          items={!isLoading && listSearchBots}
          fuseOptions={{ keys: ["username_bot"] }}
          resultStringKeyName="username_bot"
          onSelect={handleOnSelect}
          placeholder='Buscar ...'
          autoFocus
          styling={{
            borderRadius: "4px",
            height: "34px",
            backgroundColor: "#303030",
            border:'none',
            color: "white",
            hoverBackgroundColor: "#252525",
            fontFamily: "Lexend Deca",
            boxShadow: "none",
            iconColor: "white",
            lineColor: "#303030",
          }}
        />
      </div>
    </div>
  );
}
