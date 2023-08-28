import { BackgroundImage } from '@/component';
import { Box, Typography } from '@mui/material';
import React from 'react';

const page = () => {
    const backgroundImageUrl = '/hero-carousel/finance2.jpg';
    return (
        <Box>
            <BackgroundImage backgroundImage={backgroundImageUrl}>
            <h1>Our Client</h1>
            </BackgroundImage>
<Typography variant='h5' sx={{display:"flex", justifyContent:"center", alignContent:"center", margin:2}}>Major Clients of Adhikari & Company</Typography>

        </Box>
    );
};

export default page;