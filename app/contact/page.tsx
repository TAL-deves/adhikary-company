import { BackgroundImage } from '@/component';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const page = () => {
    const backgroundImageUrl = '/hero-carousel/finance3.webp';
    return (
        <Box>
            <BackgroundImage backgroundImage={backgroundImageUrl}>
            <h1>Contact Us</h1>
            </BackgroundImage>
            <Grid container spacing={2} sx={{mt:2}}>
             <Grid xs={12} sm={6}>
                {/* <Box> */}
                    {/* <Box>
                        <Typography>One</Typography>
                    </Box>
                    <Box>
                        <Typography>Two</Typography>
                    </Box>
                    </Box> */}
                    <Card sx={{maxWidth:450}}>
                    <Box sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>
                        <Typography sx={{ display:"flex", justifyContent:"center", alignContent:"center"}}>
                        <ContactMailIcon sx={{color:"#681436", height:24}}/>
                        </Typography>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                      Our Address
                      </Typography>
                      <Typography sx={{color:"#681436"}}>
                      House 07, Road 137/141, Gulshan 1, Dhaka-1212
                      </Typography>
                    </CardContent>
                    </Box>
                  </Card>
                    </Grid> 
                  <Grid xs={12} sm={6}>
                  {/* <Box sx={{display:"flex", 
                  justifyContent:"center",
                   alignContent:"center"}}>
                    <Box sx={{display:"block"}}>
                        <Typography>One22</Typography>
                    </Box>
                    <Box sx={{display:"block",}}>
                        <Typography >Two22</Typography>
                    </Box>
                    </Box> */}
                    <Card sx={{maxWidth:450}}>
                        <Box sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>
                        <Typography sx={{ display:"flex", justifyContent:"center", alignContent:"center"}}><MailOutlineIcon sx={{color:"#681436", height:24}}/>
                        </Typography>
                        
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                       Email Us
                      </Typography>
                      <Typography sx={{color:"#681436"}}>
                       Email:mohon@arccabd.com
                      </Typography>
                    </CardContent>
                        </Box>
                  </Card>
                    </Grid> 
                    </Grid>
            <Box  sx={{
        display: "flex", flexDirection: "column",justifyContent:"center", alignItems: "center", marginTop: "3rem", width:"100%"
      }}>
      <iframe width="100%" height="500" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2622041977656!2d90.41410111026319!3d23.773675575505415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76eabbbfeb5%3A0x957610bcdf66ffbf!2sAdhikari%20Roy%20%26%20Co.%2C%20Chartered%20Accountants!5e0!3m2!1sen!2sbd!4v1693133324282!5m2!1sen!2sbd">
            </iframe>
      </Box>
        </Box>
    );
};

export default page;