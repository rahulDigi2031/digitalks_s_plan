"use client";

import { useRouter } from "next/router";
import React from "react";
import {
  AppBar,
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import AboutSalesLead from "./aboutSalesLead";
import SalesWorkFlow from "./salesWorkflow";
import UserFeedbacks from "@/pages/templates/delivery-challan-format/happyUsersfeedback";
import ApprovedSoftware from "@/pages/templates/delivery-challan-format/highratedsoftwareimage";
import SalesCRMdesigning from "./salesCRMDesigning";
import Footer from "../../../../Components/footer";

export default function SaleCRMFormat() {
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [accountOpen, setAccountOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const toSlug = (label: string) =>
    label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .replace(/-+/g, "-");

  return (
    <>
      <Box>
        <header>
          <AppBar
            position="fixed"
            elevation={0}
            sx={{ bgcolor: "#7C3DDA", zIndex: 1200 }}
          >
            <Container maxWidth="xl">
              <Toolbar
                sx={{
                  minHeight: 64,
                  px: 2,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {/* Left side - Logo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#fff" }}
                    >
                      Digitalks
                    </Typography>
                  </Box>
                </motion.div>

                {/* Desktop Center - Navigation items */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Button
                      color="inherit"
                      onClick={() => setProductsOpen(true)}
                      endIcon={
                        <span style={{ transform: "translateY(2px)" }}>▾</span>
                      }
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontWeight: 500,
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                      }}
                    >
                      Products
                    </Button>

                    <Button
                      color="inherit"
                      component={Link}
                      href="/plans"
                      onClick={() => router.push("/")}
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontWeight: 500,
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                      }}
                    >
                      Pricing
                    </Button>
                  </Box>
                </motion.div>

                {/* Desktop Right side - Action items wrapped in a single Box */}
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => router.push("/contact")}
                    sx={{
                      textTransform: "none",
                      background: "#DF007A",
                      boxShadow: "none",
                      borderRadius: 2,
                      px: 3,
                      py: 1,
                      fontWeight: 600,
                      "&:hover": {
                        boxShadow: "none",
                        opacity: 0.95,
                        background: "#C7006B",
                      },
                    }}
                  >
                    Register
                  </Button>
                  <IconButton
                    onClick={() => setAccountOpen(true)}
                    sx={{
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    <Avatar
                      sx={{ bgcolor: "#A78BFA", width: 32, height: 32 }}
                    />
                  </IconButton>
                </Box>

                {/* Mobile - Hamburger menu */}
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    alignItems: "center",
                    gap: 1,
                  }}
                >
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
                      fontSize: "0.875rem",
                      "&:hover": {
                        boxShadow: "none",
                        opacity: 0.95,
                        background: "#C7006B",
                      },
                    }}
                  >
                    Register
                  </Button>

                  <IconButton
                    onClick={() => setMobileMenuOpen(true)}
                    sx={{
                      color: "#fff",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </header>

        <main>
          {/* Hero Section */}
        <Box
            sx={{
              bgcolor: "#7C3DDA",
              pt: { xs: 15, md: 22 },
              pb: { xs: 6, md: 10 },
            }}
          >
            <Container maxWidth="lg">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  justifyContent: "space-between",
                  gap: 3,
                }}
              >
                {/* Left - Text */}
                <Box sx={{ maxWidth: 640 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: 38, md: 38 },
                      lineHeight: { xs: 1.15, md: 1.1 },
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: -0.5,
                    }}
                  >
                    Best Sales CRM Software
                  </Typography>
                  <Typography
                    sx={{
                      mt: 3,
                      color: "rgba(255,255,255,0.9)",
                      fontSize: { xs: 16, md: 18 },
                    }}
                  >
                    Streamline Your Sales Process With Comprehensive Sales CRM
                    More Powerful Than Excel | Easier Than Enterprise Solutions
                  </Typography>
                  <Button
                    onClick={() => setOpen(true)}
                    variant="contained"
                    sx={{
                      mt: 4,
                      px: 3,
                      py: 1.25,
                      textTransform: "none",
                      fontWeight: 700,
                      background: "#DF007A",
                      boxShadow: "none",
                      "&:hover": { background: "#C7006B", boxShadow: "none" },
                    }}
                  >
                    Get started
                  </Button>
                </Box>

                {/* Right - Collage */}
                <Box
                  sx={{
                    position: { xs: "relative", md: "absolute" }, // mobile pe relative, desktop pe absolute
                    top: { md: 80 },
                    right: { md: 380 },
                    width: { xs: "100%", md: 450 },
                    height: { xs: 220, md: 400 },
                    mx: { xs: "auto", md: 0 }, // mobile me center align
                  }}
                >
                  <Image
                    src="/temp.webp"
                    alt="Person"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>

              </Box>

            </Container>
        </Box>

        <Box sx={{bgcolor:"#E9E0F8" , width:"100%" , height:"80px"}}>
                <Container maxWidth="lg" sx={{display:"flex" , justifyContent:"space-evenly" , alignItems:"center" , height:"60px"}}>
                   <Typography sx={{ mt: 3,color: "black", fontSize: { xs: 16, md: 16 },}}>
                        Trusted by 150k+ sales reps, entrepreneurs, agencies, and freelancers across 178 countries
                   </Typography>
                </Container>
        </Box>
            {/* About section */}
        <AboutSalesLead />

        <Box sx={{bgcolor:"#E9E0F8" , width:"100%" , height:"70px"}}>
            <Container maxWidth="lg" sx={{height:"70px" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <Typography variant="body1">
                    Rated ⭐ 4.8/5 based on 11700+ Ratings
                </Typography>
            </Container>
        </Box>

        <SalesWorkFlow /> 

        <UserFeedbacks />  

        <ApprovedSoftware />   

        <SalesCRMdesigning />    









      {/* drawers and dialog Boxes below-side */}

                  





        </main>

        <footer>
            <Footer />
        </footer>
      </Box>
    </>
  );
}
