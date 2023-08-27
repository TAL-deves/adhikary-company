import { BackgroundImage, IntroductionSection, OurMissionSection, OurValusSection, OurVisionSection } from '@/component';
import { Box, Typography } from '@mui/material';
import React from 'react';

const page = () => {
    const backgroundImageUrl = '/hero-carousel/finance2.jpg';

    return (
        <Box>
            <BackgroundImage backgroundImage={backgroundImageUrl}>
            {/* <Typography sx={{marginTop:4}} variant='h3'>About Us</Typography> */}
            <h1>About Us</h1>
            </BackgroundImage>,
            <IntroductionSection/>
            <OurVisionSection/>
            <OurMissionSection/>
            <OurValusSection/>
        </Box>
    );
};

export default page;
