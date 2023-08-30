import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { BackgroundImage } from '@/component';
import { Divider } from '@mui/material';
// import { IntroductionSection, OurMissionSection, OurValusSection, OurVisionSection } from '@/component';

export default function page() {
  const backgroundImageUrl = '/footer-bg.jpg';
  return (
<div>
<BackgroundImage backgroundImage={backgroundImageUrl}>
            <h1>Services</h1>
            </BackgroundImage>,
            <Typography variant='h4' sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>Services</Typography>
           {/* <Demo/> */}
           <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/Acca.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Audit Services
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
</div>
  );
}



