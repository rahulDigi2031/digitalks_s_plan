'use client'

import { Box, Container, Typography, Button } from "@mui/material"

export default function AboutInventoryMSPage(){
    return (
        <>
            <Box>
                <Container maxWidth="lg">
                    <Box sx={{ mt: { xs: 4, md: 6 }, mb: { xs: 4, md: 6 } }}>
                        <Typography
                            variant="h4"
                            sx={{ 
                                textAlign: "left", 
                                fontWeight: 700, 
                                mb: { xs: 2, md: 3 },
                                color: "#000"
                            }}
                        >
                            What is Inventory Management?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ 
                                textAlign: "left", 
                                lineHeight: 1.6,
                                color: "#666",
                                mb: { xs: 3, md: 4 }
                            }}
                        >
                            In most simple terms, inventory management is the process of tracking, storing, and replenishing stock. Good inventory management isn’t just about knowing what product is stored where. It’s about finding balance. For instance, you wouldn’t want so much stock that your resources are tied up in producing unwanted goods or wasted on items that sit unsold. On the other side, no one wants to deal with disappointed customers who can’t purchase their favorite products just because they went understock. Inventory workflow management is alike a machine that needs—all be well-oiled, i.e. keeping the shelves full while taking the guesswork out of ordering. It also creates a smooth workflow purchasing, storing, and selling goods—all while minimizing waste and extra costs
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{ 
                                textAlign: "left", 
                                fontWeight: 600, 
                                mb: { xs: 2, md: 2 },
                                color: "#000"
                            }}
                        >
                            Benefits of Strong Inventory Management
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ 
                                textAlign: "left", 
                                lineHeight: 1.6,
                                color: "#666",
                                mb: 1
                            }}
                        >
                            Fewer Stockouts: With strong stock management your chances of losing a sale just because you didn’t have enough product on hand for your business? Let’s find out:
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ 
                                textAlign: "left", 
                                lineHeight: 1.6,
                                color: "#666",
                                mb: 1
                            }}
                        >
                            Lower Storage Costs: With strong stock management, your chances of losing a sale just because you didn’t have enough product on hand decreases? Let’s find out:
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ 
                                textAlign: "left", 
                                lineHeight: 1.6,
                                color: "#666",
                                mb: 1
                            }}
                        >
                            Better Cash Flow: To much stock holds up funds and resources that could be used elsewhere in your business. With proper inventory management you can ensure that accurate resources are available.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ 
                                textAlign: "left", 
                                lineHeight: 1.6,
                                color: "#666",
                                mb: { xs: 3, md: 4 }
                            }}
                        >
                            Improved Customer Satisfaction: Customers expect reliability. Delivering the right product at the right time keeps them coming back for more, enhancing your brand standing.
                        </Typography>

                        <Box sx={{ display: "flex", justifyContent: "center", mb: { xs: 4, md: 6 } }}>
                            <Button 
                                variant="contained" 
                                sx={{ 
                                    bgcolor: "#E2007B", 
                                    color: "white", 
                                    padding: { xs: "10px 24px", md: "12px 32px" },
                                    fontSize: { xs: "14px", md: "16px" },
                                    borderRadius: 2,
                                    textTransform: "none",
                                    fontWeight: 600
                                }}
                            >
                                Get Started
                            </Button>
                        </Box>

                        <Typography
                            variant="h5"
                            sx={{ 
                                textAlign: "left", 
                                fontWeight: 700, 
                                mb: { xs: 2, md: 3 },
                                color: "#000"
                            }}
                        >
                            What is Inventory Management Software?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ 
                                textAlign: "left", 
                                lineHeight: 1.6,
                                color: "#666"
                            }}
                        >
                            is a tool that automates and simplifies the process of tracking and managing stock levels in your business. Unlike traditional manual methods, or using spreadsheets to track stock, this software provides you with real-time insights into your stock, helping you 1) monitor fast-selling items, 2) identify slow-moving stock, 3) plan reorders efficiently. Even the most basic inventory management software consists of features like demand forecasting, reordering alerts, and seamless integration with other business systems. It also helps manage components used in production and track the stock levels of your suppliers accuracy, For small and medium businesses (SMBs), inventory management is more than just a tool—it's a strategic asset for optimizing inventory and driving business growth.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}