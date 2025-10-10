"use client";

import AwardsAchievedPage from "@/pages/awardsAchived";
import Footer from "../../../../Components/footer";
import Navbar from "../../../../Components/navbar";
import { Box, Container, Typography, Button, Stack, Avatar } from "@mui/material";
import OnlinePriceSoftware from "./PricingOnline";

export default function InvoicingSoftware() {
    return (
        <>
            <header style={{position:"fixed" , zIndex:100 , width:"100%"}}>
                <Navbar />
            </header>

            {/* invoicing software */}
            <main>
                <Box
                    className="flex items-center justify-center text-center"
                    sx={{
                        bgcolor: "#8E3CF7", // purple background
                        color: "white",
                        py: { xs:15, md: 22 },
                        px: 2,
                    }}
                >
                    <Container maxWidth="lg">
                        {/* Heading */}
                        <Typography
                            variant="h3"
                            component="h1"
                            gutterBottom
                            className="font-bold"
                            sx={{
                                fontSize: { xs: "1.8rem", md: "2.9rem" },
                                fontWeight: "700",
                            }}
                        >
                            Online Invoicing &amp; Billing Software for Indian Businesses
                        </Typography>

                        {/* Sub text */}
                        <Typography
                            variant="body1"
                            className="mt-4"
                            sx={{
                                fontSize: { xs: "1rem", md: "1.2rem" },
                                lineHeight: 1.8,
                            }}
                        >
                            Digitalks is India’s best invoicing software for businesses to create
                            professional GST-compliant invoices, manage and track payments,
                            send auto payment reminders, and get paid faster. It also helps you
                            generate GSTR-1, GSTR-2B, GSTR-3B, manage inventory and warehouses,
                            handle e-invoicing with IRNs and QR codes, generate e-way bills,
                            send quotations, manage multi-currency billing, and customize branded
                            invoice templates – all from a single, powerful platform.
                        </Typography>

                        {/* Buttons */}
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                            className="mt-6"
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "white",
                                    color: "black",
                                    fontWeight: "600",
                                    px: 3,
                                    "&:hover": { bgcolor: "#f5f5f5" },
                                }}
                            >
                                Create Your FREE Invoice
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "#E4007C", // pink button
                                    color: "white",
                                    fontWeight: "600",
                                    px: 3,
                                    "&:hover": { bgcolor: "#c00067" },
                                }}
                            >
                                Create Your FREE Account
                            </Button>
                        </Stack>
                    </Container>
                </Box>

                {/* ISO Certifications */}
                <Box sx={{ bgcolor: "#F7F3FF", py: { xs: 4, md: 5 } }}>
                    <Container maxWidth="lg">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                overflowX: 'hidden',
                                justifyContent: { md: 'space-between' },
                                alignItems: { xs: 'center', md: 'flex-start' },
                                gap: { xs: 2, md: 3 },
                                px: { xs: 0, md: 2 }
                            }}
                        >
                            <Box sx={{ width: { xs: '100%', md: '20%' }, textAlign: 'center' }}>
                                <Box>
                                    <Avatar
                                        src="/ibus.svg"
                                        sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}
                                    />
                                    <Typography variant="h6" gutterBottom fontWeight="bold">
                                        3 Lakh+ Businesses
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Trusted Businesses
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: { xs: '100%', md: '20%' }, textAlign: 'center' }}>
                                <Box>
                                    <Avatar
                                     src="/iso.svg"
                                        sx={{ width: 60, height: 60, mx: 'auto', mb: 2,  }}
                                    />
                                    <Typography variant="h6" gutterBottom fontWeight="bold">
                                        ISO Certified
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Reliable & Secure
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: { xs: '100%', md: '20%' }, textAlign: 'center' }}>
                                <Box>
                                    <Avatar 
                                        src="/mobileapp.svg"
                                        sx={{ width: 60, height: 60, mx: 'auto', mb: 2,  }}
                                    />
                                    <Typography variant="h6" gutterBottom fontWeight="bold">
                                        Mobile App
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Android & iOS
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: { xs: '100%', md: '20%' }, textAlign: 'center' }}>
                                <Box>
                                    <Avatar
                                    src="/ratings.svg"
                                        sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: 'warning.main' }}
                                    />
                                    <Typography variant="h6" gutterBottom fontWeight="bold">
                                        4.8 Rating
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        1L+ Reviews
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: { xs: '100%', md: '20%' }, textAlign: 'center' }}>
                                <Box>
                                    <Avatar
                                      src="/mii.svg"
                                        sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: 'error.main' }}
                                    />
                                    <Typography variant="h6" gutterBottom fontWeight="bold">
                                        Made in India
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Built for Indian Businesses
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>

                {/* platform section award achived */}
                <Box>
                    <AwardsAchievedPage />
                </Box>
                
                <OnlinePriceSoftware />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}
