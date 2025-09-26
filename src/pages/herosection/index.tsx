import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';

export default function HeroSection() {
  return (
    <Box>
         <Box
      component="section"
      sx={{
        bgcolor: '#0f1420',
        backgroundImage: "url('/heroimage.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        py: { xs: 6, md: 10 },
        minHeight: { xs: 500, md: 600 },
        px: 2,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <Image src="/diamond.svg" alt="Premium" width={18} height={18} />
          <Typography sx={{ color: '#FCA94C', fontWeight: 600 }}>Digitalks Premium</Typography>
        </Stack>

        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 36, md: 65 },
            lineHeight: 1.1,
            fontWeight: 800,
            mt: 2,
          }}
        >
          Your Business Deserves To Go
          <br />
          Premium
        </Typography>

        <Typography sx={{ color: '#cbd5e1', maxWidth: 900, mx: 'auto', mt: 1, mb: 3 }}>
          Join 150k+ businesses that have streamlined their business operations with Digitalks.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" flexWrap="wrap" sx={{ mb: 2 }}>
          <Button
            component={Link}
            href="/plans"
            variant="contained"
            sx={{
              bgcolor: '#7c3aed',
              '&:hover': { bgcolor: '#6d28d9' },
              fontWeight: 600,
              textTransform: 'none',
              px: 2.5,
              py: 1.25,
              borderRadius: 2,
            }}
          >
            Explore Price Plans
          </Button>
          <Button
            component={Link}
            href="#features"
            variant="text"
            sx={{ color: '#ffffffcc', fontWeight: 600, textTransform: 'none' }}
          >
            View Features ▾
          </Button>
        </Stack>

        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
          <Typography sx={{ color: '#eab308', fontSize: 18 }}>★ ★ ★ ★ ★</Typography>
          <Typography sx={{ color: '#cbd5e1' }}>Rated 4.8/5 with 11k+ ratings</Typography>
        </Stack>
      </Container>
    </Box>
        {/* */}
        <Box sx={{ bgcolor: "#E9E0F8", height: "70px", width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='body1' sx={{ fontWeight: "350", textAlign: "center", fontSize:{md:"18px" , xs:"12px"} }}>1178+ businesses from India have upgraded to premium last week</Typography>
        </Box>
    </Box>
  );
}



