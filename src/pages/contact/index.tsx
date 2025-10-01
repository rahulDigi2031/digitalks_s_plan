import { Box, Typography, Button, AppBar, Container, Toolbar, IconButton, Avatar, Dialog, DialogTitle, DialogContent, Stack, ListItemButton, List } from '@mui/material';
import SignUp from '../signup';
import Footer from '../../../Components/footer';
import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const contactpage = () => {
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [accountOpen, setAccountOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const router = useRouter()


  const toSlug = (label: string) =>
    label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .replace(/-+/g, "-");

  return (
   <>

   <header>
   <AppBar position="fixed" elevation={0} sx={{ bgcolor: "#6A36CD", zIndex: 1200 , mb:2 }}>
            <Container maxWidth="xl">
            <Toolbar sx={{ 
              minHeight: 64, 
              px: 2, 
              display: 'flex', 
              justifyContent: 'space-around', 
              alignItems: 'center' 
            }}>
              {/* Left side - Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}  
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>Digitalks</Typography>
                </Box>
              </motion.div>

              {/* Desktop Center - Navigation items */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                style={{ 
                 display: 'flex',
                 alignItems: 'center',
                 gap: '2rem',
                 justifyContent: 'center'
                }}
              >
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4  }}>
                  <Button 
                    color="inherit" 
                    onClick={() => setProductsOpen(true)} 
                    endIcon={<span style={{ transform: "translateY(2px)" }}>▾</span>} 
                    sx={{ 
                      textTransform: "none", 
                      color: '#fff',
                      fontWeight: 500,
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                    }}
                  >
                    Products
                  </Button>
                  
                  <Button 
                    color="inherit" 
                    component={Link}
                    href="/plans"
                    onClick={() => router.push('/')}
                    sx={{ 
                      textTransform: 'none', 
                      color: '#fff',
                      fontWeight: 500,
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                    }}
                  >
                    Pricing
                  </Button>
                </Box>
              </motion.div>

              {/* Desktop Right side - Action items wrapped in a single Box */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => router.push('/contact')}
                  sx={{
                    textTransform: "none",
                    background: "#DF007A",
                    boxShadow: "none",
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    "&:hover": { boxShadow: "none", opacity: 0.95, background: "#C7006B" }
                  }}
                >
                  Register
                </Button>
                <IconButton 
                  onClick={() => setAccountOpen(true)}
                  sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  <Avatar sx={{ bgcolor: "#A78BFA", width: 32, height: 32 }} />
                </IconButton>
              </Box>

              {/* Mobile - Hamburger menu */}
              <Box sx={{ 
                display: { xs: 'flex', md: 'none' }, 
                alignItems: 'center', 
                gap: 1 
              }}>
                <Button
                  variant="contained"
                  onClick={() => setAccountOpen(true)}
                  sx={{
                    textTransform: "none",
                    background: "#DF007A",
                    boxShadow: "none",
                    borderRadius: 2,
                    px: 2,
                    py: 0.5,
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    "&:hover": { 
                      boxShadow: "none", 
                      opacity: 0.95,
                      background: "#C7006B"
                    },
                  }}
                >
                  Register
                </Button>

                <IconButton 
                  onClick={() => setMobileMenuOpen(true)}
                  sx={{
                    color: '#fff',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
            </Container>
        </AppBar>
   </header>
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
        mt: 6,
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

    < footer>
        <Footer />
      </footer>









      {/* Products Dialog */}
      <Dialog open={productsOpen} onClose={() => setProductsOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Products</DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            <Box>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                <Box sx={{ width: 34, height: 34, borderRadius: 1, bgcolor: "#EDE7FF", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #D7C9FF" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.731 7.0043C20.907 7.30905 20.9998 7.65476 21 8.00672V16.0061C20.9988 16.3562 20.9055 16.6997 20.7295 17.0023C20.5534 17.3048 20.3009 17.5556 19.9971 17.7295L13.0029 21.7292C12.6984 21.9066 12.3523 22 12 22M20.731 7.0043C20.5549 6.69956 20.3019 6.44649 19.9971 6.27051L13.0029 2.2708C12.6984 2.09344 12.3523 2 12 2C11.6477 2 11.3016 2.09344 10.9971 2.2708L4.00286 6.27051C3.69814 6.44649 3.44506 6.69956 3.26904 7.0043M20.731 7.0043L11.9988 12.045M3.26904 7.0043C3.09301 7.30905 3.00023 7.65476 3 8.00672V16.0061C3.00118 16.3562 3.09448 16.6997 3.27053 17.0023C3.44657 17.3048 3.69915 17.5556 4.00286 17.7295L10.9971 21.7292C11.3016 21.9066 11.6477 22 12 22M3.26904 7.0043L11.9988 12.045M12 22L11.9988 12.045" stroke="#6B46C1" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Solutions</Typography>
              </Stack>
              <List dense>
                {["Cloud Accounting Software","AI Accounting Agent","GST Billing Software","Invoicing Software","Quotation Software","e-Invoicing Software","eWay Bill Software","Inventory Software","Invoicing API","Sales CRM","Lead Management Software","Download Mobile App"].map((label) => (
                  <ListItemButton key={label} component={Link} href={`/solutions/${toSlug(label)}`}>
                    {label}
                  </ListItemButton>
                ))}
              </List>
            </Box>
            <Box>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                <Box sx={{ width: 34, height: 34, borderRadius: 1, bgcolor: "#E9F7EC", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #CBEBD3" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="6" width="16" height="12" rx="2" stroke="#2E7D32" stroke-width="1.5"/>
                    <rect x="8" y="10" width="8" height="4" rx="1" stroke="#2E7D32" stroke-width="1.5"/>
                  </svg>
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Free Tools</Typography>
              </Stack>
              <List dense>
                {["GST Invoice Maker","Invoice Generator","Quotation Generator","Create Proforma Invoice","Invoice Formats","Create Purchase Order","Create Delivery Challan","Quotation Templates","Commercial Invoice","Consulting Invoice"].map((label) => (
                  <ListItemButton key={label} component={Link} href={`/tools/${toSlug(label)}`}>
                    {label}
                  </ListItemButton>
                ))}
              </List>
            </Box>
            <Box>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                <Box sx={{ width: 34, height: 34, borderRadius: 1, bgcolor: "#E7F0FF", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #C8DEFF" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10V6a2 2 0 0 1 2-2h8v6" stroke="#1E88E5" stroke-width="1.5" stroke-linecap="round"/>
                    <rect x="4" y="10" width="16" height="10" rx="2" stroke="#1E88E5" stroke-width="1.5"/>
                  </svg>
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Categories</Typography>
              </Stack>
              <List dense>
                {["SMBs","Consultants","Startups","Chartered Accountant","Export/Import Business","Professional Services","Freelancers/Self-Employed"].map((label) => (
                  <ListItemButton key={label} component={Link} href={`/categories/${toSlug(label)}`}>
                    {label}
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

       {/* Account Dialog (Avatar/Register click) */}
       <Dialog open={accountOpen} onClose={() => setAccountOpen(false)} maxWidth="xs" fullWidth>
        <DialogContent sx={{ py: 3 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Avatar sx={{ bgcolor: "#A78BFA" }} />
            <Box>
              <Typography sx={{ fontWeight: 700 }}>Hi User</Typography>
              <Typography variant="body2" color="text.secondary">Login/register to access your account</Typography>
            </Box>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              sx={{
                flex: 1,
                background: "linear-gradient(90deg,#FF0B7B,#F89B29)",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": { boxShadow: "none", opacity: 0.95 },
              }}
            >
              Register
            </Button>
            <Button variant="outlined" sx={{ flex: 1, textTransform: "none" }}>Login</Button>
          </Stack>
        </DialogContent>
      </Dialog>
      
   </>
  );
};

export default contactpage;


