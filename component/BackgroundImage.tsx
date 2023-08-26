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
      <Typography sx={{color:"white",display:"flex", justifyContent:"center", alignContent:"center"}}>{children}</Typography>
      </Box>
    </Box >
  );
};

export default BackgroundText;
