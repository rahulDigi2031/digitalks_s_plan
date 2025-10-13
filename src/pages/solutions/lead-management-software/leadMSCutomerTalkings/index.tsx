import { Box, Typography, Button, Avatar } from "@mui/material";
import Image from "next/image";

export default function LeadMSCustomersFeedback() {
    return (
        <>
            <Box sx={{ bgcolor: '#7C3DDA', py: 6, textAlign: 'center' }}>
                <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 6 }}>
                        See Why Our Customers Trust Us Before You Do
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                        {/* Testimonial 1 */}
                        <Box sx={{ 
                            backgroundColor: 'white', 
                            borderRadius: 2, 
                            p: 3, 
                            maxWidth: 300, 
                            textAlign: 'left',
                            position: 'relative'
                        }}>
                            <Avatar sx={{ width: 60, 
                                    height: 60, 
                                    position: 'absolute', 
                                    top: -30, 
                                    left: '50%', 
                                    transform: 'translateX(-50%)',
                                    border: '4px solid white'
                                }}
                                src="https://via.placeholder.com/60?text=User1"
                            />
                            
                            <Typography variant="body1" sx={{ mt: 4, mb: 2, fontStyle: 'italic' }}>
                                Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It’s simple, It’s feature-rich, and it’s value for money.
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                Aniket
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                Owner, Spaceflex Coworking Space
                            </Typography>
                        </Box>

                        {/* Testimonial 2 */}
                        <Box sx={{ 
                            backgroundColor: 'white', 
                            borderRadius: 2, 
                            p: 3, 
                            maxWidth: 300, 
                            textAlign: 'left',
                            position: 'relative'
                        }}>
                            <Avatar
                                sx={{ 
                                    width: 60, 
                                    height: 60, 
                                    position: 'absolute', 
                                    top: -30, 
                                    left: '50%', 
                                    transform: 'translateX(-50%)',
                                    border: '4px solid white'
                                }}
                                src="https://via.placeholder.com/60?text=User2"
                            />
                            <Typography variant="body1" sx={{ mt: 4, mb: 2, fontStyle: 'italic' }}>
                                Refrens has exceeded my expectations in terms of ease of use and affordability.
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                Rubita
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                Freelance Developer
                            </Typography>
                        </Box>

                        {/* Testimonial 3 */}
                        <Box sx={{ 
                            backgroundColor: 'white', 
                            borderRadius: 2, 
                            p: 3, 
                            maxWidth: 300, 
                            textAlign: 'left',
                            position: 'relative'
                        }}>
                            <Avatar
                                sx={{ 
                                    width: 60, 
                                    height: 60, 
                                    position: 'absolute', 
                                    top: -30, 
                                    left: '50%', 
                                    transform: 'translateX(-50%)',
                                    border: '4px solid white'
                                }}
                                src="https://via.placeholder.com/60?text=User3"
                            />
                            <Typography variant="body1" sx={{ mt: 4, mb: 2, fontStyle: 'italic' }}>
                              I thought Excel was fine enough for me until I tried Refrens - It has completely won me over!
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                Shivansh Tulsyan
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                CEO, Binny Textiles
                            </Typography>
                        </Box>

                        {/* Testimonial 4 */}
                         <Box sx={{ 
                            backgroundColor: 'white', 
                            borderRadius: 2, 
                            p: 3, 
                            maxWidth: 300, 
                            textAlign: 'left',
                            position: 'relative'
                        }}>
                            <Avatar sx={{ width: 60, 
                                    height: 60, 
                                    position: 'absolute', 
                                    top: -30, 
                                    left: '50%', 
                                    transform: 'translateX(-50%)',
                                    border: '4px solid white'
                                }}
                                src="https://via.placeholder.com/60?text=User1"
                            />
                            
                            <Typography variant="body1" sx={{ mt: 4, mb: 2, fontStyle: 'italic' }}>
                                After switching to Refrens, I no longer need to pay for 4 different software to manage leads, communication, accounting, and payments.
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                Anjani
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                Founder, Brown Mocha
                            </Typography>
                        </Box>

                        {/* Testimonial 5 */}
                         <Box sx={{ 
                            backgroundColor: 'white', 
                            borderRadius: 2, 
                            p: 3, 
                            maxWidth: 300, 
                            textAlign: 'left',
                            position: 'relative'
                        }}>
                            <Avatar sx={{ width: 60, 
                                    height: 60, 
                                    position: 'absolute', 
                                    top: -30, 
                                    left: '50%', 
                                    transform: 'translateX(-50%)',
                                    border: '4px solid white'
                                }}
                                src="https://via.placeholder.com/60?text=User1"
                            />
                            
                            <Typography variant="body1" sx={{ mt: 4, mb: 2, fontStyle: 'italic' }}>
                                Refrens has made juggling multiple leads a breeze with easy segmentation and centralized communication.
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                Linkee
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                Freelancer, Content Writer
                            </Typography>
                        </Box>

                    </Box>
                    <Box sx={{ mt: 6 }}>
                        <Button 
                            variant="contained" 
                            sx={{ 
                                bgcolor: '#E2007B', 
                                color: 'white', 
                                px: 2.3, 
                                py: 1, 
                                fontSize: '1rem', 
                                fontWeight: 600,
                                borderRadius: 2,
                                textTransform: 'none'
                            }}
                        >
                            Get start
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}