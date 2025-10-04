import { Box, Typography, Button, Avatar } from "@mui/material";
import Image from "next/image";

export default function Quotation() {
    return (
        <>
            <Box sx={{ bgcolor: '#7C3DDA', py: 6, textAlign: 'center' }}>
                <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 6 }}>
                        What Our Users Say About Refers Quotation Templates
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
                                "Refers Quotation Software has simplified my business operations and creating quotes has never been easier. The templates make a great impression on my clients. Highly recommended!"
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
                                "I love Refers Quotation Software! It's user-friendly, efficient and its customer support is top-notch. My quotes look polished and I can focus on growing my business."
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
                                "Refers Quotation Software is a time-saver! I can convert quotes to invoices effortlessly and the features have streamlined my workflow. Must-have tool for any entrepreneur."
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                Shivansh Tyagi
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                CEO, Binny Textiles
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 6 }}>
                        <Button 
                            variant="contained" 
                            sx={{ 
                                bgcolor: '#E2007B', 
                                color: 'white', 
                                px: 4, 
                                py: 1.5, 
                                fontSize: '1rem', 
                                fontWeight: 600,
                                borderRadius: 2,
                                textTransform: 'none'
                            }}
                        >
                            Create Quotation for Free
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}