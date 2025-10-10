'use client'

import { Box, Container, Typography, Button } from "@mui/material";

export default function ExploreinvoiceSoftware(){
    return(
        <>
            <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}>
                <Container maxWidth="lg">
                    {/* Main Heading */}
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography 
                            variant="h4" 
                            component="h1"
                            sx={{ 
                                fontWeight: 'bold',
                                color: '#2c3e50',
                                fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                                lineHeight: 1.3,
                                mb: 3
                            }}
                        >
                            Why Businesses & Startups in India Choose Digitalks Billing Software?
                        </Typography>
                        
                        {/* Description */}
                        <Typography 
                            variant="body1"
                            sx={{ 
                                color: '#5a6c7d',
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                lineHeight: 1.6,
                                maxWidth: '800px',
                                mx: 'auto',
                                mb: 4
                            }}
                        >
                            Businesses and startups in India choose Digitalks billing software because it makes GST billing, TDS, ITC, and GST return filing simple 
                            while also managing invoicing, payments, and inventory management in one place. Digitalks is easy for non-accountants and comes with 
                            powerful features like recurring invoices, auto payment reminders, and integration with accounting software. Digitalks helps businesses 
                            save time, stay compliant, and maintain healthy cash flow.
                        </Typography>
                    </Box>

                    {/* Main Image */}
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        mb: 4 
                    }}>
                        <Box 
                            component="img" 
                            src="/ss.webp" 
                            alt="Digitalks Billing Software Dashboard"
                            sx={{ 
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                            }}
                        />
                    </Box>

                    {/* Create Free Invoice Button */}
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        mb: 6 
                    }}>
                        <Button
                            variant="contained"
                            size="large"
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
                            Create Free Invoice
                        </Button>
                    </Box>

                    {/* Bottom Description */}
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography 
                            variant="body1"
                            sx={{ 
                                color: '#5a6c7d',
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                lineHeight: 1.6,
                                maxWidth: '900px',
                                mx: 'auto'
                            }} >
                            Refrens is more than just invoicing software. It's a complete business management solution that brings invoicing, billing, accounting, GST 
                            compliance, inventory, sales and finance operations together. With automation, robust security, and a user-friendly interface, Refrens 
                            eliminates the need for multiple software. Whether you need to send invoices, track payments, or stay GST-compliant, Refrens invoicing 
                            software helps you run your business smoothly, so you can focus on growing your business.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}