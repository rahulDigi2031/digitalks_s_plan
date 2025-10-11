import { Box, Typography, Button, Avatar } from "@mui/material";
import Image from "next/image";

export default function InventoryUserFeedback() {
    return (
        <>
            <Box sx={{ bgcolor: '#f7f7f7', py: 6, textAlign: 'center' }}>
                <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
                   
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
                                Collecting USD payments was always a headache. With Refrens' online invoicing software, it’s a breeze.
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                Nayan
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                Founder, Sug Labs Software Agency
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
                               We needed a consultant who can help us with some licenses. Refrens team worked hard to connect us with the right consultant.
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                Himanshu
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                Founder, Packaged Food
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