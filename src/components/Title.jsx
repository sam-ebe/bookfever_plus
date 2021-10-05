import React from "react";
import Typography from '@mui/material/Typography';

function Title({title}) {
  return <div className="featured__title">
            <Typography 
              variant="h2" 
              component="h2"
              sx={{fontSize: "1.625rem", fontFamily: "Playfair Display,serif", textTransform: "uppercase", marginBottom: "30px"}}
              className="featured__title__with_divider"
            >
              {title}
            </Typography>
         </div>

}

export default Title;
