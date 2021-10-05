/* BookCard */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
/* Dialog */
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
/* Transition */
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BookCard(book) {

  /* ResponsiveDialog actions */
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className='bookCard' sx={{ width: "260px", objectFit: "cover", margin: "15px 15px"}}>
        <CardActionArea className='bookCard__area' >
          <CardMedia
            component="img"
            className='bookCard__image'
            image= {book.image}
            alt={book.title}
            title={book.title}
            sx={{ height: "350px" }}
          />
          <div className='bookCard__image__overlay' sx={{ height: "350px",  width: "260px"  }}>
            <Button className='bookCard__image__overlay__button' variant="outlined" size="medium" onClick={handleClickOpen} >QUICK VIEW</Button>
          </div>
          <CardContent className='bookCard__cardContent'>
            <Typography gutterBottom variant="h5" component="h3" sx={{ maxWidth: "300px", marginBottom: "0"}}>
              {book.title}
            </Typography>
            <Typography className='author' color="textSecondary" component="h3" sx={{ fontStyle: "italic"}}>
              {book.author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
          fullScreen={fullScreen}
          open={open}
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          className="dialog"
          maxWidth="lg"
        >
          <div className="dialog__container">
            <div className="dialog__image">
              <CardMedia
                component="img"
                className="dialog__image__item"
                image= {book.image}
                alt={book.title}
                title={book.title}
              />
            </div>
            <div className="dialog__infos">
              <DialogContent className="dialog__infos__content">

                <Typography gutterBottom variant="h5" component="h3">
                  {book.title}
                </Typography>
                <Typography className='author' color="textSecondary" component="h3" sx={{ fontStyle: "italic"}}>
                  {book.author}
                </Typography>
                <Typography color="textSecondary" component="p">
                  {/* Add quotations design */}
                  {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum"}
                </Typography>
              </DialogContent>
              <DialogActions>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                  className="dialog__close"
                >
                  <CloseIcon />
                </IconButton>
              </DialogActions>
            </div>
          </div>

        </Dialog>
      </>
  );
}