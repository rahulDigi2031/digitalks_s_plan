'use client'

import { Box, Container, Typography, Button } from "@mui/material"
// import { CheckCircle, Diamond } from "@mui/icons-material"
import Image from "next/image"

export default function InventoryNewpricing(){
    return(
        <>
            <Box sx={{bgcolor:"#FBFCFD" , width:"100%" , py: 8}}>
                <Container maxWidth="lg">
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
                        Start for free, upgrade when you are sure.
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center', mb: 6 }}>
                        Only Pay When You Need Premium Features.
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {/* Free Card */}
                        <Box sx={{ 
                            flexBasis: { xs: '100%', md: '40%' }, 
                            bgcolor: 'white', 
                            p: 4, 
                            borderRadius: 2, 
                            textAlign: 'center', 
                            boxShadow: 1 
                        }}>
                            <Image src="/rightmark.svg" alt="" width={60} height={60} style={{borderRadius:"50%" , border:"1px solid white"}}></Image>

                            {/* <CheckCircle sx={{ fontSize: 48, color: 'purple', mb: 2 }} /> */}
                            
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                                Free Plan
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                                All of our premium features are available on a free trial. Experience what all Refrens has to offer without making any payment!
                            </Typography>

                            <Typography variant="body1" component="a" sx={{color:"#723FD4"}}>Create Purchase Order</Typography>
                        </Box>

                        {/* Premium Card */}
                        <Box sx={{ 
                            flexBasis: { xs: '100%', md: '40%' }, 
                            bgcolor: 'white', 
                            p: 4, 
                            borderRadius: 2, 
                            textAlign: 'center', 
                            boxShadow: 1 
                        }}>
                            <Image src="/pdiamond.svg" alt="" width={60} height={60} style={{borderRadius:"50%" , border:"1px solid white"}}></Image>

                            {/* <Diamond sx={{ fontSize: 48, color: 'purple', mb: 2 }} /> */}
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                                Scale with Premium
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                                Customize, schedule, & track accounting documents, access intelligent accounting reports, add multiple users, manage inventory & more to get the most out of Refrens!
                            </Typography>

                            <Typography variant="body1" component="a" sx={{color:"#723FD4"}}>Explore Premium Features</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}