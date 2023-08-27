import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const OurService = [
    {
      label: 'Audit Services',
      imgPath:
        '/hero-carousel/finance1.webp',
    },
    {
      label: 'Accounting Services',
      imgPath:
        '/hero-carousel/finance2.jpg',
    },
    {
      label: 'Assurance Services',
      imgPath:
        '/hero-carousel/finance3.webp',
    },
    {
      label: 'Taxation Services',
      imgPath:
        '/hero-carousel/hero-carousel-5.jpg',
    },
    {
      label: 'Corporate VAT Services',
      imgPath:
        '/hero-carousel/hero-carousel-5.jpg',
    },
    {
      label: 'Company Affairs',
      imgPath:
        '/hero-carousel/hero-carousel-5.jpg',
    },
    {
      label: 'BIDA Affair',
      imgPath:
        '/hero-carousel/hero-carousel-5.jpg',
    },
    {
      label: 'Other regulatory services',
      imgPath:
        '/hero-carousel/hero-carousel-5.jpg',
    },
  ];

export default function ServiceSec() {


  return (

    <Box sx={{ flexGrow: 1, margin:5}}>
        <Typography variant='h3' sx={{display:"flex", justifyContent:"center", alignContent:"center", margin:2,color:"#681436"}}> Our Services</Typography>
    <Grid container spacing={2}>
        {
            OurService.map((service)=>{
                return(
                    // eslint-disable-next-line react/jsx-key
                    <Grid item xs={12}sm={6} md={4}>
                    <Card sx={{ maxWidth: 420 }} key={service.label}>
                    {/* <CardMedia
                      sx={{ height: 300 }}
                      image="https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80"
                      title="green iguana"
                    /> */}
                    <Typography sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>
                    <WarehouseIcon sx={{color:"#681436", height:24}}/>
                    </Typography>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{color:"#681436"}}>
                        {service.label}
                      </Typography>
                    </CardContent>
                  </Card>
                    </Grid> 
                )
            })
        }
    </Grid>
  </Box>

  );
}