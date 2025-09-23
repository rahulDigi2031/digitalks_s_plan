import { Box, Typography, Button } from '@mui/material';
import SignUp from '../login';

const contactpage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '80vh',
        backgroundImage: `url(/contactBg.webp)`, // Add background image from public folder
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover', // Ensure the image covers the area
        backgroundPosition: 'center', // Center the image
        color: 'white',
        padding: 4,
      }}
    >
      {/* Left Section (Hero Content) */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        //   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add overlay for readability
        }}
      >
        <Typography variant="h3" gutterBottom>
        Tools you need to run your business.
        </Typography>

        {/* <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
         Accounting. Inventory. Leads and more.
        </Button> */}

        <Typography variant="subtitle1" gutterBottom>
        Accounting. Inventory. Leads and more.
        </Typography>
      </Box>
      {/* Right Section (Sign-up Form) */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
        }}
      >
        <SignUp />
      </Box>
    </Box>
  );
};

export default contactpage;