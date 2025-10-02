'use client'

import { Box, Container, Typography, Button, Card, CardContent } from "@mui/material";
import InvoiceFaQ from "../invoiceFAQ";
import IntroOFinvoice from "../introInvoicePart";

export default function OnlinePriceSoftware(){
    return(
        <>
            <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}>
                <Container maxWidth="lg">
                    {/* Main Heading */}
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography 
                            variant="h4" 
                            component="h1"
                            sx={{ 
                                fontWeight: 'bold',
                                color: '#2c3e50',
                                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                                lineHeight: 1.3,
                                mb: 2
                            }}
                        >
                            Pricing of online invoicing software
                        </Typography>
                        
                        <Typography 
                            variant="body1"
                            sx={{ 
                                color: '#7B61FF',
                                fontSize: '1rem',
                                fontWeight: 500
                            }}
                        >
                            Only Pay When You Need Premium Features.
                        </Typography>
                    </Box>

                    {/* Pricing Cards */}
                    <Box sx={{ 
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                        mb: 8,
                        justifyContent: 'center'
                    }}>
                        {/* Free Plan Card */}
                        <Card sx={{ 
                            flex: 1,
                            maxWidth: { xs: '100%', md: '400px' },
                            p: 3,
                            textAlign: 'center',
                            border: '1px solid #e0e0e0',
                            borderRadius: 3,
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}>
                            <CardContent>
                                {/* Icon placeholder */}
                                <Box sx={{ 
                                    width: 60,
                                    height: 60,
                                    borderRadius: '50%',
                                    backgroundColor: '#f0f0f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    mb: 3
                                }}>
                                    <Box sx={{ 
                                        width: 30,
                                        height: 30,
                                        borderRadius: '50%',
                                        border: '2px solid #9C27B0'
                                    }} />
                                </Box>

                                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#2c3e50' }}>
                                    Free Plan
                                </Typography>

                                <Typography variant="body2" sx={{ 
                                    color: '#5a6c7d',
                                    lineHeight: 1.6,
                                    mb: 3
                                }}>
                                    All of our premium features are available on a free trial. Experience what all Refrens has to offer without making any payment!
                                </Typography>

                                <Button
                                    variant="text"
                                    sx={{
                                        color: '#7B61FF',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Create Your FREE Account
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Premium Plan Card */}
                        <Card sx={{ 
                            flex: 1,
                            maxWidth: { xs: '100%', md: '400px' },
                            p: 3,
                            textAlign: 'center',
                            border: '1px solid #e0e0e0',
                            borderRadius: 3,
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}>
                            <CardContent>
                                {/* Icon placeholder */}
                                <Box sx={{ 
                                    width: 60,
                                    height: 60,
                                    borderRadius: '50%',
                                    backgroundColor: '#f0f0f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    mb: 3
                                }}>
                                    <Box sx={{ 
                                        width: 25,
                                        height: 15,
                                        border: '2px solid #9C27B0',
                                        borderRadius: '3px 3px 8px 8px'
                                    }} />
                                </Box>

                                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#2c3e50' }}>
                                    Premium Plan
                                </Typography>

                                <Typography variant="body2" sx={{ 
                                    color: '#5a6c7d',
                                    lineHeight: 1.6,
                                    mb: 3
                                }}>
                                    Manage your accounting at faster pace with additional premium features at minimal cost.
                                </Typography>

                                <Button
                                    variant="text"
                                    sx={{
                                        color: '#7B61FF',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Explore Premium Features
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Bottom Purple Section */}
                    <Box sx={{ 
                        backgroundImage: 'url(/banner.webp)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                        borderRadius: 3,
                        overflow: 'hidden',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: '#7C3DDA',
                            opacity: 0.9,
                            zIndex: 1
                        }
                    }}>
                        <Box sx={{
                            position: 'relative',
                            zIndex: 2,
                            p: { xs: 4, md: 6 },
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            gap: 4
                        }}>
                        {/* Left Content */}
                        <Box sx={{ flex: 1, color: 'white' }}>
                            <Typography variant="h4" sx={{ 
                                fontWeight: 'bold',
                                mb: 3,
                                fontSize: { xs: '1.8rem', md: '2.2rem' }
                            }}>
                                Get Started Today.
                            </Typography>
                            
                            <Typography variant="body1" sx={{ 
                                lineHeight: 1.6,
                                mb: 4,
                                fontSize: '1.1rem'
                            }}>
                                All in one online invoicing software for your business is now free. You can upgrade anytime to unlock more features.
                            </Typography>

                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#E91E63',
                                    color: 'white',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#C2185B'
                                    }
                                }}
                            >
                                Create Your FREE Account
                            </Button>
                        </Box>

                        {/* Right Image - Invoice Templates */}
                        <Box sx={{ 
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        </Box>
                        </Box>

                    </Box>

                    {/* Invoice specific FaQ's*/}
                    <InvoiceFaQ />

                    {/* Intro about Invoice Software */}
                    <IntroOFinvoice />
                    
                </Container>
            </Box>
        </>
    )
}