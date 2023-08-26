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

export default function OurValuesSec() {
  return (

    <Box sx={{ flexGrow: 1, maxWidth:1440, display:"flex", justifyContent:"center", alignContent:"center", marginY:2}}>
    <Grid container spacing={2}>
      <Grid item xs={12}sm={7}>
      <Card sx={{ maxWidth: "full" }}>
      <CardMedia
        sx={{ height:500 }}
        image="/finance3.webp"
        title="finance"
      /> 
    </Card>
      </Grid> 
      <Grid item xs={12}sm={5}>
        <Typography variant='h4' sx={{color:"#681436"}}>Our Values</Typography>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}>Honesty, integrity and ethics in all we do.</Typography>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}>Teamwork in an atmosphere of mutual respect.</Typography>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}>Employ talented, caring and responsible people.</Typography>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}>Develop leaders for the growth and health of our Firm.</Typography>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}>Provide an enjoyable work environment.</Typography>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}>Give back to the communities we serve.</Typography>
      </Grid>
    </Grid>
  </Box>

  );
}