import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import Link from 'next/link';
import { CardMedia } from '@mui/material';

export default function Footer() {

  return (
    <Sheet
      variant="solid"
    //   color={color}
      invertedColors
      sx={{
        bgcolor:"#681436",
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
      }}
    >
   <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
<Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'column', sm:"row" },
            maxWidth: { xs: '100%', sm:"60%" },
            gap: 1,
          }}
        >
     <CardMedia
        component="img"
        height="30%"
        image="/LT.png"
        alt="Logo image"
      />

          {/* <AspectRatio
            ratio="21/9"
            minHeight={100}
            // sx={{ width:260 }}
          >
            <img alt="" src="/LT.png" />
          </AspectRatio> */}
          <CardContent >
            <Typography level="body-sm">Chartered Accountants</Typography>
            <Typography level="body-xs" sx={{ mb: 0.5 }}>
            House 07, Level 5, Road 137/141 Gulshan 1, Dhaka 1212
            </Typography>
            <Typography level="body-xs" sx={{ mb: 0.5 }}>
            Email: Mohan@arccabd.com
            </Typography>
          </CardContent>
        </Card>

        {/* <Card
        variant='soft'
         sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: "50%" },
            gap: 1,
          }}>
            <Typography>ADHIKARI & COMPANY</Typography>
          <CardContent>
            <Typography>
              ADHIKARI & COMPANY
            </Typography>
          </CardContent>
        </Card> */}
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: "50%" } }}>
            <ListSubheader>Useful Links</ListSubheader>
            <Divider sx={{ mr: 3 }} />
            <List>
              <ListItem>
                <ListItemButton>Home</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>About us</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Services</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Our Team</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Our Client</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Certificates</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Contact</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: "50%" } }}>
            <ListSubheader>Our Services</ListSubheader>
            <Divider sx={{ mr: 3 }} />
            <List>
              <ListItem>
                <ListItemButton>
                  Audit Services
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  Accounting Services
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  Assurance Services
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  Taxation Services
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  Corporate VAT Services
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  Company Affairs
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  BIDA Affairs
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                   Other regulatory Services
                </ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
      <Divider sx={{ m: 2 }} />
      <Box sx={{display:"block"}}>
      <Box sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>
      © Copyright <Typography variant="soft">Adhikari & Company.</Typography> All Rights Reserved
      </Box>
      <Box sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>Designed by <Link target='_blank' href={"https://www.techanalyticaltd.com"}>Tech Analytica Limited</Link>
      </Box>
      </Box>
    </Sheet>
  );
}