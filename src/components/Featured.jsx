import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import BookCard from './BookCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
   margin: theme.spacing(4),
   background: '#3f51b5',
   '&:nth-of-type(2n+1)': {
     background: '#FFC05C'
   }
  },
  block: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(4),
      //width: theme.spacing(16),
    },
  },
  title: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 700,
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  }
}));


function Featured({books, title}) {
  const classes = useStyles();
  
  return (
    <Paper className={classes.root} >
      <Typography gutterBottom variant="h2" className={classes.title}>
        {title}
      </Typography>
      <div className={classes.block}>

        {books.map((book) => {
      return (
        
        <BookCard key={book.id} {...book} />

      )
          })
        }   
      </div>
    </Paper>
  )
}

export default Featured;
