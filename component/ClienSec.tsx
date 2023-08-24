"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      '/clients/client-1.png',
  },
  {
    label: 'Bird',
    imgPath:
      '/clients/client-2.png',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      '/clients/client-3.png',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      '/clients/client-4.png',
  },
  // {
  //   label: 'Goč, Serbia',
  //   imgPath:
  //     '/hero-carousel/hero-carousel-2.jpg',
  // },
  // {
  //   label: 'Goč, Serbia',
  //   imgPath:
  //     '/hero-carousel/hero-carousel-3.jpg',
  // },
  // {
  //   label: 'Goč, Serbia',
  //   imgPath:
  //     '/hero-carousel/hero-carousel-4.jpg',
  // },
  // {
  //   label: 'Goč, Serbia',
  //   imgPath:
  //     '/hero-carousel/hero-carousel-5.jpg',
  // },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(2);
  const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth:1440, flexGrow: 1 }}>
    
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                //   height:"vh",
                  display: 'block',
                  maxWidth: "full",
                //   overflow: 'hidden',
                  width: '10%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;