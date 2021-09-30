import React from "react";
import Typography from '@mui/material/Typography';

function Title({title}) {
  return <>
            <Typography 
              variant="h2" 
              gutterBottom 
              component="h2"
              sx={{fontSize: "1.625rem", fontFamily: "Playfair Display,serif", textTransform: "uppercase"}}
              className="title_with_divider"
            >
              {title}
            </Typography>;
         </>

}

export default Title;
