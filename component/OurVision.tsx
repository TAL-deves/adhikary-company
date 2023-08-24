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

export default function OurVision() {
  return (

    <Box sx={{ flexGrow: 1, maxWidth:1440, display:"flex", justifyContent:"center", alignContent:"center", marginY:2}}>
    <Grid container spacing={2}>
      <Grid item xs={12}sm={7}>
      <Card sx={{ maxWidth: "full" }}>
      <CardMedia
        sx={{ height:500 }}
        image="/finance5.jpg"
        title="finance"
      /> 
    </Card>
      </Grid> 
      <Grid item xs={12}sm={5}>
        <Typography variant='h2'>Our Vision</Typography>
        {/* <Typography variant='h4'>Introduction</Typography> */}
  <Typography sx={{textDecorationStyle:"dashed"}}>Our vision is to be the most highly respected professional firm where we seek to build strong and lasting relationships with our clients by providing them quality services which are personalized, reliable and value driven. Where clients will be confident that their interests and business are being cared for by a trusted firm that enjoys working with them and one another. A firm that will offer comprehensive business and tax related services and assist enterprises to tackle complex situations in the fast changing scenarios of business with the power of rightful decision making.</Typography>
      </Grid>
    </Grid>
  </Box>

  );
}