import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { BackgroundImage } from '@/component';

export default function page() {
    const backgroundImageUrl = '/breadcrumbs-bg.jpg';
  return (
    <Box sx={{maxWidth:1440, marginTop:4}}>
 <BackgroundImage backgroundImage={backgroundImageUrl}>
<h1>Contact</h1>
 </BackgroundImage>
    <Box sx={{mt:4}}>
    <Box>
    <Typography variant='h5' sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>STATUTORY AUDIT</Typography>
    <Box sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>
    <Box sx={{margin:"4%"}}>
    <Avatar sx={{width:200, height:200}} alt="Travis Howard" src="/MOHON.png"/>
    <Typography variant='h6' sx={{display:"flex", justifyContent:"center", alignContent:"center",
color:"#681436"}}>Mohan Adhikary</Typography>
    <Typography  sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>FCA, TEAM LEAD</Typography>
    </Box>
    <Box sx={{margin:"4%"}}>
    <Avatar sx={{width:200, height:200}} alt="Travis Howard" src="/G.M F.png"/>
    <Typography variant='h6' sx={{display:"flex", justifyContent:"center", alignContent:"center",
color:"#681436"}}>G.M.FARUK AHMED</Typography>
    <Typography  sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>CISA</Typography>
    </Box>
    <Box sx={{margin:"4%"}}>
    <Avatar sx={{width:200, height:200}} alt="Travis Howard" src="/ajit.png"/>
    <Typography variant='h6' sx={{display:"flex", justifyContent:"center", alignContent:"center",
color:"#681436"}}>AJIT KUMAR PAUL</Typography>
    <Typography  sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>FCA</Typography>
    </Box>
    </Box>
    </Box>
    <Box>
    <Typography variant='h5' sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>IT AUDIT</Typography>
    <Box sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>
    <Box sx={{margin:"4%"}}>
    <Avatar sx={{width:200, height:200}} alt="Travis Howard" src="/G.M F.png"/>
    <Typography variant='h6' sx={{display:"flex", justifyContent:"center", alignContent:"center",
color:"#681436"}}>G.M.FARUK AHMED</Typography>
    <Typography  sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>FCA, TEAM LEAD</Typography>
    </Box>
    <Box sx={{margin:"4%"}}>
    <Avatar sx={{width:200, height:200}} alt="Travis Howard" src="/MOHON.png"/>
    <Typography variant='h6' sx={{display:"flex", justifyContent:"center", alignContent:"center",
color:"#681436"}}>Mohan Adhikary</Typography>
    <Typography  sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>FCA</Typography>
    </Box>
    <Box sx={{margin:"4%"}}>
    <Avatar sx={{width:200, height:200}} alt="Travis Howard" src="/debbrata.png"/>
    <Typography variant='h6' sx={{display:"flex", justifyContent:"center", alignContent:"center",
color:"#681436"}}>DEBABRATA DEB ROY</Typography>
    <Typography  sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>MBA, FCMA SENIOR ADVISER</Typography>
    </Box>
    </Box>
    </Box>
    <Box>
    <Typography variant='h5' sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>TAX, VAT CONSULTANT and OTHER REGULATORY SERVICES</Typography>
    <Box sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>
    <Box sx={{margin:"4%"}}>
    <Avatar sx={{width:200, height:200}} alt="Travis Howard" src="/dipok.png"/>
    <Typography variant='h6' sx={{display:"flex", justifyContent:"center", alignContent:"center",
color:"#681436"}}>DIPOK KUMAR DEB ROY</Typography>
    <Typography  sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>ADVOCATE, TEAM LEAD</Typography>
    </Box>
    <Box sx={{margin:"4%"}}>
    <Avatar sx={{width:200, height:200}} alt="Travis Howard" src="/krishnendu.png"/>
    <Typography variant='h6' sx={{display:"flex", justifyContent:"center", alignContent:"center",
color:"#681436"}}>KRISHNENDU DEB ROY</Typography>
    <Typography  sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>FCA, TEAM LEAD</Typography>
    </Box>
    <Box sx={{margin:"4%"}}>
    <Avatar sx={{width:200, height:200}} alt="Travis Howard" src="/MOHON.png"/>
    <Typography variant='h6' sx={{display:"flex", justifyContent:"center", alignContent:"center",
color:"#681436"}}>Mohan Adhikary</Typography>
    <Typography  sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>FCA</Typography>
    </Box>
    </Box>
    </Box>
    </Box>
    </Box>
  );
}