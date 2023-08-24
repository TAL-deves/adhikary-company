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

export default function Introduction() {
  return (

    <Box sx={{ flexGrow: 1, maxWidth:1440, display:"flex", justifyContent:"center", alignContent:"center"}}>
    <Grid container spacing={2}>
    <Grid item xs={12}sm={5}>
        <Typography variant='h2'>Adhikari & Company</Typography>
        <Typography variant='h4'>Introduction</Typography>
  <Typography sx={{textDecorationStyle:"dashed"}}>Adhikari & Company is a Chartered Accountancy Firm under the Institute of Chartered Accountants of Bangladesh (ICAB). It mainly plays the role as Auditor of various companies and acts as management consultants, financial advisers, professional consultants, corporate & legal consultants in any technical & general lines to render services to any public & private bodies, whether of Govt. or to any public utility concerns including bodies & to act as advisers, retainers, consultants, representatives, agents, secretaries, managing agents, arbitrators and to hold or represent any local or foreign principals in his or their line of business. The firm was established by Mr. Mohan Adhikari FCA who was the former partner of Pinaki & Company, an oldest CA firms in Bangladesh.</Typography>
      </Grid>
      <Grid item xs={12}sm={7}>
      <Card sx={{ maxWidth: "full" }}>
      <CardMedia
        sx={{ height:800 }}
        image="/finance4.jpg"
        title="finance"
      /> 
    </Card>
      </Grid> 
      
    </Grid>
  </Box>

  );
}