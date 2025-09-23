'use client';
import { Box, Typography, Button } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Example social icons, install react-icons if needed

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#00695C', // Dark teal background
          color: 'white',
          padding: { xs: 2, md: 4 },
          borderTop: '1px solid #B2DFDB', // Light teal border
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 4, // Spacing between columns
          }}
        >
          {/* Company Section */}
          <Box
            sx={{
              flex: '0 1 calc(25% - 12px)', // Approximately 25% width minus gap on md screens
              maxWidth: '100%', // Full width on xs screens
              '@media (max-width: 900px)': {
                flex: '0 1 100%', // Full width on smaller screens
              },
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Company
            </Typography>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">Blog</Typography>
            <Typography variant="body2">Press</Typography>
          </Box>

          {/* Product Section */}
          <Box
            sx={{
              flex: '0 1 calc(25% - 12px)', // Approximately 25% width minus gap on md screens
              maxWidth: '100%', // Full width on xs screens
              '@media (max-width: 900px)': {
                flex: '0 1 100%', // Full width on smaller screens
              },
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Product
            </Typography>
            <Typography variant="body2">Features</Typography>
            <Typography variant="body2">Pricing</Typography>
            <Typography variant="body2">Integrations</Typography>
            <Typography variant="body2">Support</Typography>
          </Box>

          {/* Resources Section */}
          <Box
            sx={{
              flex: '0 1 calc(25% - 12px)', // Approximately 25% width minus gap on md screens
              maxWidth: '100%', // Full width on xs screens
              '@media (max-width: 900px)': {
                flex: '0 1 100%', // Full width on smaller screens
              },
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Resources
            </Typography>
            <Typography variant="body2">Guides</Typography>
            <Typography variant="body2">Tutorials</Typography>
            <Typography variant="body2">FAQ</Typography>
            <Typography variant="body2">Contact</Typography>
          </Box>

          {/* Contact Us Section */}
          <Box
            sx={{
              flex: '0 1 calc(25% - 12px)', // Approximately 25% width minus gap on md screens
              maxWidth: '100%', // Full width on xs screens
              '@media (max-width: 900px)': {
                flex: '0 1 100%', // Full width on smaller screens
              },
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: support@refrens.com</Typography>
            <Typography variant="body2">Phone: +91-123-456-7890</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button
                sx={{
                  backgroundColor: '#B2DFDB', // Light teal button background
                  color: '#00695C', // Dark teal text/icon color
                  '&:hover': { backgroundColor: '#80CBC4' }, // Lighter teal hover
                  minWidth: '36px',
                  padding: '6px',
                }}
              >
                <FaFacebookF />
              </Button>
              <Button
                sx={{
                  backgroundColor: '#B2DFDB',
                  color: '#00695C',
                  '&:hover': { backgroundColor: '#80CBC4' },
                  minWidth: '36px',
                  padding: '6px',
                }}
              >
                <FaTwitter />
              </Button>
              <Button
                sx={{
                  backgroundColor: '#B2DFDB',
                  color: '#00695C',
                  '&:hover': { backgroundColor: '#80CBC4' },
                  minWidth: '36px',
                  padding: '6px',
                }}
              >
                <FaInstagram />
              </Button>
              <Button
                sx={{
                  backgroundColor: '#B2DFDB',
                  color: '#00695C',
                  '&:hover': { backgroundColor: '#80CBC4' },
                  minWidth: '36px',
                  padding: '6px',
                }}
              >
                <FaLinkedinIn />
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Copyright Section */}
        <Box sx={{ mt: 4, textAlign: 'center', borderTop: '1px solid #B2DFDB', pt: 2 }}>
          <Typography variant="body2">
            © 2025 Refrens. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}