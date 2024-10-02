import React from 'react';
import { Box, Typography } from '@mui/material';
import firebackground from '../assets/firebg.jpg';

const DiscountCards = () => {
  const discounts = [
    { id: 1, title: '20% off on Barbeque', description: 'Enjoy a delicious discount' },
    { id: 2, title: 'Buy 1 Get 1 Free', description: 'Special offer for barbeque lovers' },
    { id: 3, title: '30% off on Weekends', description: 'Weekend special offer' },
    { id: 4, title: '20% off on Barbeque', description: 'Enjoy a delicious discount' },
    { id: 5, title: 'Buy 1 Get 1 Free', description: 'Special offer for barbeque lovers' },
    { id: 6, title: '30% off on Weekends', description: 'Weekend special offer' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'scroll',
        paddingTop: 6,
        paddingLeft: 2,
       
        gap: 2,
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {discounts.map((discount) => (
        <Box
          key={discount.id}
          sx={{
            minWidth: 400,
            minHeight: 220,
            borderRadius: 2,
            p: 2,
            boxShadow: 3,
            textAlign: 'center',
            backgroundImage: `url(${firebackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {discount.title}
          </Typography>
          <Typography variant="body2">{discount.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default DiscountCards;
