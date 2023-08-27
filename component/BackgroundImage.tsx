import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { ReactNode } from 'react';


interface BackgroundTextProps {
  backgroundImage: string;
  children: ReactNode;
}

const BackgroundText: React.FC<BackgroundTextProps> = ({ backgroundImage, children }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <Box sx={{width:"100%", height:140}} style={backgroundImageStyle}>
      <Box>
      {/* <Typography sx={{color:"white",display:"flex", justifyContent:"center", alignContent:"center"}}>{children}</Typography> */}
      <Box sx={{display:"flex", justifyContent:"center", alignContent:"center",color:"white"}}>
        {children}
        </Box>
      </Box>
    </Box >
  );
};

export default BackgroundText;
