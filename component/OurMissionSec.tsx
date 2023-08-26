


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

export default function OurMissionSec() {
  return (

    <Box sx={{ flexGrow: 1, maxWidth:1440, display:"flex", justifyContent:"center", alignContent:"center"}}>
    <Grid container spacing={2}>
    <Grid item xs={12}sm={5}>
        <Typography variant='h2' sx={{color:"#681436"}}>Our Mission</Typography>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}> We will provide businesses, entrepreneurs and individuals with the highest quality accounting, auditing, tax planning and business advisory services delivered in a timely, efficient and innovative manner by a professional team that clearly enjoys working together to exceed their clients’ needs and expectations.</Typography><br/>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}> We will provide intelligent, dynamic and practical advice to our clients, to help them to attain their full potential, improve the profitability of their business and to meet the challenges of the business and economic world</Typography><br/>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}> We will aim to add value to the community.</Typography><br/>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}> We will predominantly work with organizations in the charitable and voluntary sectors as partners to help them achieve their desired outcomes.</Typography><br/>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}> We will use our extensive knowledge of law and regulations to help our clients comply in areas of charity and company financial reporting and taxation. Client’s expectation will be that we will always get this right.</Typography><br/>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}> We will partner with other like-minded professionals to bring our clients advice and guidance in areas where we are not qualified or experienced.</Typography><br/>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}> We will at all times be mindful of our professional independence and our duty of confidentiality</Typography><br/>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}> We will embrace an ethical and environmental code which enhances the community in which we work.
We will be generous.</Typography><br/>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}> We will be clear about our billing policy and fees and leave no areas of doubt about our clients investment in us, their responsibilities and our responsibilities</Typography><br/>
  <Typography sx={{textDecorationStyle:"dashed",color:"#681436"}}> We will strive on building relationships and social networks with clients & colleagues.
</Typography>
      </Grid>
      <Grid item xs={12}sm={7}>
      <Card sx={{ maxWidth: "full" }}>
      <CardMedia
        sx={{ height:1024 }}
        image="/finance7.jpg"
        title="finance"
      /> 
    </Card>
      </Grid> 
      
    </Grid>
  </Box>

  );
}