'use client'

import { Box, Container, Typography, Button } from "@mui/material"

export default function FeatureDeliveryChallan() {
    return (
        <>
            <Box sx={{ bgcolor: "#161C26", width: "100%", py: 6 }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" gutterBottom align="center" color="white">
                        Features of Referns GST
                    </Typography>
                    <Typography variant="h3" gutterBottom align="center" color="#A78BFA">
                        Delivery Challans
                    </Typography>
                    
                    <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center', 
                        gap: 4 
                    }}>
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 2rem)', md: 'calc(25% - 3rem)' }, 
                            textAlign: "center", 
                            color: "white" 
                        }}>
                            <Box sx={{ fontSize: 48, mb: 2 }}>📄</Box>
                            <Typography variant="h6" gutterBottom>
                                Generate Delivery Challan for Free
                            </Typography>
                            <Typography variant="body2">
                                Creating delivery challans should be easy. With our online delivery challan generator, you can generate professional challans without hassle. This feature ensures accuracy and efficiency, so you can focus on more important business tasks.
                            </Typography>
                        </Box>
                        
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 2rem)', md: 'calc(25% - 3rem)' }, 
                            textAlign: "center", 
                            color: "white" 
                        }}>
                            <Box sx={{ fontSize: 48, mb: 2 }}>+</Box>
                            <Typography variant="h6" gutterBottom>
                                Customization of Columns
                            </Typography>
                            <Typography variant="body2">
                                Referns delivery challan maker offers you to add relevant challan information, allowing you to customize columns. Tailor needs, ensuring all necessary details are included.
                            </Typography>
                        </Box>
                        
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 2rem)', md: 'calc(25% - 3rem)' }, 
                            textAlign: "center", 
                            color: "white" 
                        }}>
                            <Box sx={{ fontSize: 48, mb: 2 }}>⭐</Box>
                            <Typography variant="h6" gutterBottom>
                                Add Business Logo
                            </Typography>
                            <Typography variant="body2">
                                Personalize your delivery challans by adding your business logo. It gives your challans a professional appearance and strengthens your brand identity.
                            </Typography>
                        </Box>
                        
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 2rem)', md: 'calc(25% - 3rem)' }, 
                            textAlign: "center", 
                            color: "white" 
                        }}>
                            <Box sx={{ fontSize: 48, mb: 2 }}>💎</Box>
                            <Typography variant="h6" gutterBottom>
                                Personalized Invoice Templates
                            </Typography>
                            <Typography variant="body2">
                                Choose from a variety of delivery challan templates to send your brand. A well-designed challan can leave a lasting impression on your clients.
                            </Typography>
                        </Box>
                        
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 2rem)', md: 'calc(25% - 3rem)' }, 
                            textAlign: "center", 
                            color: "white" 
                        }}>
                            <Box sx={{ fontSize: 48, mb: 2 }}>⬇️</Box>
                            <Typography variant="h6" gutterBottom>
                                Download and Print
                            </Typography>
                            <Typography variant="body2">
                                Easily download and print your delivery challans with our online challan maker. It's simple to share challans with your clients in just a few clicks.
                            </Typography>
                        </Box>
                        
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 2rem)', md: 'calc(25% - 3rem)' }, 
                            textAlign: "center", 
                            color: "white" 
                        }}>
                            <Box sx={{ fontSize: 48, mb: 2 }}>💳</Box>
                            <Typography variant="h6" gutterBottom>
                                Accept Online Payments
                            </Typography>
                            <Typography variant="body2">
                                Receive international payments at the lowest cost with a secure payment system. This feature ensures you can cater to global client base without worrying about high transaction fees.
                            </Typography>
                        </Box>
                        
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 2rem)', md: 'calc(25% - 3rem)' }, 
                            textAlign: "center", 
                            color: "white" 
                        }}>
                            <Box sx={{ fontSize: 48, mb: 2 }}>💬</Box>
                            <Typography variant="h6" gutterBottom>
                                24/7 Live Support
                            </Typography>
                            <Typography variant="body2">
                                Enjoy round-the-clock support via email and live chat. This ensures that any issues or queries are resolved promptly, allowing you to focus on running your business.
                            </Typography>
                        </Box>
                        
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 2rem)', md: 'calc(25% - 3rem)' }, 
                            textAlign: "center", 
                            color: "white" 
                        }}>
                            <Box sx={{ fontSize: 48, mb: 2 }}>🏦</Box>
                            <Typography variant="h6" gutterBottom>
                                Bank Details and UPI
                            </Typography>
                            <Typography variant="body2">
                                Easily include your bank details and UPI information on your delivery challan. This feature facilitates smooth payments from your clients.
                            </Typography>
                        </Box>
                    </Box>
                    
                    <Box sx={{ mt: 6, textAlign: "center" }}>
                        <Button 
                            variant="contained" 
                            size="large" 
                            sx={{ 
                                backgroundColor: "#A78BFA", 
                                color: "white", 
                                px: 4, 
                                py: 1.5,
                                borderRadius: 2,
                                fontSize: "1.1rem",
                                "&:hover": { backgroundColor: "#8B5CF6" }
                            }}
                        >
                            Create Challan for Free
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}