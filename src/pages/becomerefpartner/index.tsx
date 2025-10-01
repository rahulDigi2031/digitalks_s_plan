import { AppBar, Avatar, Box, Button, Container, Dialog, DialogContent, DialogTitle, Divider, Drawer, IconButton, List, ListItemButton, Stack, Toolbar, Typography } from "@mui/material";
import InterestForm from "../../../Components/InterestForm";
import React, { useState } from "react";
import Footer from "../../../Components/footer";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import Image from "next/image";
import MediaCoverage from "../aboutpage/mediaCoverage";
import MediaCoverSection from "./mediacover";
import PartnerWithUS from "./PartnerwithUs";
import PrepaidPartnerShipModel from "./ppm";
import IdealPartner from "./idealpartner";
import RatedSection from "../highratedsection";
import FAQ from "./faqs";


export default function BecomeRefpartner(){
    const [open, setOpen] = useState(false);
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
    
    return(
        <Box sx={{ py: 6 }}>

        {/* NAVBAR  */}
        <header>
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: "#7757FA", zIndex: 1200 }}>
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


        {/* MA */}
           <main>
           {/* Hero Section */}
           <Box sx={{ bgcolor: '#7757FA', pt: { xs: 6, md: 12 }, pb: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 6 }}>
                        {/* Left - Text */}
                        <Box sx={{ maxWidth: 640 }}>
                            <Typography variant="h3" sx={{ fontSize: { xs: 38, md: 56 }, lineHeight: { xs: 1.15, md: 1.1 }, fontWeight: 800, color: '#fff', letterSpacing: -0.5 }}>
                                Become A Refrens
                                <br />
                                Partner
                            </Typography>
                            <Typography sx={{ mt: 3, color: 'rgba(255,255,255,0.9)', fontSize: { xs: 16, md: 18 } }}>
                                Unlock Unlimited Earnings & Lifetime Commissions
                            </Typography>
                            <Button onClick={() => setOpen(true)} variant="contained" sx={{ mt: 4, px: 3, py: 1.25, textTransform: 'none', fontWeight: 700, background: '#DF007A', boxShadow: 'none', '&:hover': { background: '#C7006B', boxShadow: 'none' } }}>
                                Get In Touch
                            </Button>
                        </Box>

                        {/* Right - Collage */}
                        <Box sx={{ position: 'relative', minHeight: { xs: 260, md: 420 }, flex: 1 }}>
                            {/* Top-left emoji */}
                            <Box sx={{ position: 'absolute', top: 40, left: { xs: 20, md: 0 }, fontSize: { xs: 28, md: 36 } }}>💸</Box>
                            {/* Top-right arrow emoji */}
                            <Box sx={{ position: 'absolute', top: 40, right: { xs: 20, md: 40 }, fontSize: { xs: 28, md: 36 } }}>📈</Box>

                            {/* Person cards */}
                            <Box sx={{ position: 'absolute', top: { xs: 70, md: 20 }, right: { xs: 20, md: 120 }, width: { xs: 140, md: 200 }, height: { xs: 160, md: 220 }, bgcolor: '#F3D1FF', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="/user.png" alt="Person" width={140} height={140} style={{ width: '70%', height: 'auto' }} />
                            </Box>
                            <Box sx={{ position: 'absolute', left: { xs: 20, md: 60 }, top: { xs: 130, md: 140 }, width: { xs: 160, md: 220 }, height: { xs: 180, md: 240 }, bgcolor: '#FFBBD2', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="/user.png" alt="Person" width={160} height={160} style={{ width: '70%', height: 'auto' }} />
                            </Box>
                            <Box sx={{ position: 'absolute', right: { xs: 20, md: 40 }, bottom: { xs: 20, md: 40 }, width: { xs: 160, md: 220 }, height: { xs: 180, md: 240 }, bgcolor: '#FFE08A', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="/user.png" alt="Person" width={160} height={160} style={{ width: '70%', height: 'auto' }} />
                            </Box>
                            {/* Handshake emoji */}
                            <Box sx={{ position: 'absolute', right: { xs: 10, md: 100 }, bottom: { xs: -10, md: 0 }, fontSize: { xs: 28, md: 36 } }}>🤝</Box>
                        </Box>
                    </Box>
                </Container>
           </Box>

            <Box sx={{bgcolor:"#E9E0F8" , height:"70px" , width:"100%" , display:"flex" , justifyContent:"center", alignItems:"center   "}}>
                <Typography variant="body2" sx={{textAlign:"center"}}>Average Potential Earnings of Refrens Partners : ₹50,000 Every Month - No Upper Cap - Lifetime Commissions.</Typography>
            </Box>

            {/* media contact*/}
            <MediaCoverSection />

            <Box sx={{bgcolor:"#E9E0F8" , height:"70px" , width:"100%" , display:"flex" , justifyContent:"center", alignItems:"center   "}}>
                <Typography variant="body2" sx={{textAlign:"center"}}>Trusted by 2 Lakh+ businesses across 178 countries</Typography>
            </Box>

            {/* Contact form dialog open and close code.*/}
            <Container maxWidth="md" sx={{mb:3}}>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    maxWidth="xs"
                    fullWidth
                    scroll="body"
                    PaperProps={{ sx: { overflow: 'visible', maxHeight: 'none' } }}>
                    <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box component="span" sx={{ fontWeight: 600 }}>Partner Interest Form</Box>
                        <IconButton aria-label="Close" onClick={() => setOpen(false)}>
                            <Box component="span" sx={{ fontSize: 24, lineHeight: 1 }}>&times;</Box>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers={false} sx={{ overflow: 'visible', p: 2 }}>
                        <InterestForm />
                    </DialogContent>
                    </Dialog>
            </Container>

            {/* Why Partner With Us section */}
            <PartnerWithUS onOpenDialog={() => setOpen(true)} />

            <PrepaidPartnerShipModel onOpenDialog={() => setOpen(true)}/>
            <Box sx={{bgcolor:"#E9E0F8" , height:"70px" , width:"100%" , display:"flex" , justifyContent:"center", alignItems:"center   "}}>
                <Typography variant="body2" sx={{textAlign:"center"}}>India will become a $12 billion software market in 5 years - Refrens is up for grabbing this opportunity, are you?</Typography>
            </Box>

            {/*  */}

            <IdealPartner />

            {/*  */}

            <RatedSection />

            <FAQ />

           </main>

           <footer>
              <Footer />
           </footer>
       
          {/* Mobile Drawer Menu */}
          <Drawer 
              anchor="right"
              open={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              sx={{
              '& .MuiDrawer-paper': {
                  width: 280,
                  bgcolor: '#fff',
              },
              }}
          >
              <Box sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#7C3DDA' }}>Menu</Typography>
                  <IconButton onClick={() => setMobileMenuOpen(false)}>
                  <CloseIcon />
                  </IconButton>
              </Box>
              
              <Divider sx={{ mb: 2 }} />
              
              <List>
                  <ListItemButton 
                  onClick={() => {
                      setProductsOpen(true);
                      setMobileMenuOpen(false);
                  }}
                  sx={{ 
                      borderRadius: 1, 
                      mb: 1,
                      '&:hover': { bgcolor: 'rgba(124, 61, 218, 0.1)' }
                  }}
                  >
                  <Typography sx={{ fontWeight: 500 }}>Products</Typography>
                  </ListItemButton>
                  
                  <ListItemButton 
                  component={Link}
                  href="/plans"
                  sx={{ 
                      borderRadius: 1, 
                      mb: 1,
                      '&:hover': { bgcolor: 'rgba(124, 61, 218, 0.1)' }
                  }}
                  >
                  <Typography sx={{ fontWeight: 500 }}>Pricing</Typography>
                  </ListItemButton>
              </List>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                  variant="contained"
                  onClick={() => {
                      setAccountOpen(true);
                      setMobileMenuOpen(false);
                  }}
                  sx={{
                      textTransform: "none",
                      background: "#DF007A",
                      boxShadow: "none",
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 600,
                      "&:hover": { 
                      boxShadow: "none", 
                      opacity: 0.95,
                      background: "#C7006B"
                      },
                  }}
                  >
                  Register
                  </Button>
                  
                  <Button
                  variant="outlined"
                  onClick={() => {
                      setAccountOpen(true);
                      setMobileMenuOpen(false);
                  }}
                  sx={{
                      textTransform: "none",
                      borderColor: "#7C3DDA",
                      color: "#7C3DDA",
                      py: 1.5,
                      fontWeight: 500,
                      "&:hover": { 
                      borderColor: "#6B46C1",
                      backgroundColor: "rgba(124, 61, 218, 0.1)"
                      },
                  }}
                  >
                  Login
                  </Button>
              </Box>
              </Box>
          </Drawer>

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
                  onClick={() => router.push('/signup')}
                  >
                  Register
                  </Button>
                  <Button variant="outlined" sx={{ flex: 1, textTransform: "none" }} onClick={() => router.push('/loginform')}>Login</Button>
              </Stack>
              </DialogContent>
          </Dialog>

        </Box>
    )
}


