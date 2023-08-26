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

export default function page() {
  const backgroundImageUrl = '/footer-bg.jpg';
  return (
<div>
<BackgroundImage backgroundImage={backgroundImageUrl}>
            <Typography sx={{marginTop:4}} variant='h3'>Services</Typography>
            </BackgroundImage>,
</div>
  );
}