import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    //maxHeight: 300
  },
});

export default function BookCard(book) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={book.title}
          height="100%"
          image= {book.image}
          title={book.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {book.title}
          </Typography>
          <Typography color="textSecondary" component="p">
            {book.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          ADD TO CART
        </Button>
        <Button size="small" color="secondary">
          GET NOW
        </Button>
      </CardActions>
    </Card>
  );
}
