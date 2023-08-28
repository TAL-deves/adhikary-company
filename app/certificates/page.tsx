import { BackgroundImage } from '@/component';
import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';


const image=[
    {id:1, image:"/ca-krishnendu.jpeg", name:"certificate"},
    {id:2, image:"/ca-krishnendu2.jpeg", name:"certificate2"},
    {id:3, image:"/arcca-TIN.jpeg", name:"certificate3"},
    {id:4, image:"/arcca-tradeL.jpeg", name:"certificate4"},
    {id:5, image:"/certificates-1.jpg", name:"certificate5"},
    {id:7, image:"/certificates-3.jpg", name:"certificate7"},
    {id:8, image:"/certificates.jpg", name:"certificate8"},
    {id:9, image:"/certificates.png", name:"certificate9"},
    {id:10, image:"/vat-agent-license.jpeg", name:"certificate10"},
    {id:11, image:"/letter.jpg", name:"certificate11"}
]

const page = () => {
    const backgroundImageUrl = '/hero-carousel/finance2.jpg';
    const backgroundImageUrl2 = '/public/';
    return (
        <Box>
            <BackgroundImage backgroundImage={backgroundImageUrl}>
            <h1>Certificates</h1>
            </BackgroundImage>
{
    image.map((single)=>{
        return(
        <>
        <Box key={single.id} sx={{margin:2}}>
        <Card>
      {/* <CardMedia
        // sx={{padding:2 }}
        image={single.image}
        title={single.name}
      />  */}
         <CardMedia
        component="img"
        height="full"
        image={single.image}
        alt={single.name}
      />
    </Card>
        </Box>
       
            </>
        )
    })
}
        </Box>
    );
};

export default page;