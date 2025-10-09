'use client'

import { Box, Container, Typography, Button } from "@mui/material"
import Image from "next/image"

export default function SalesCRMdesigning(){
    return(
       <>
         <Box sx={{bgcolor:'#F7F9FA' , width:"100%"}}>
            <Container maxWidth="lg">
                <Box sx={{ py: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                        Sales CRM designed to help you close deals faster
                    </Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.secondary', mb: 4 }}>
                        Consolidate your sales process with Refrens
                    </Typography>
                    
                    {/* Automated Lead Capture Section */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3, mb: 4 }}>
                        <Box sx={{ flex: 1 }}>
                            <Image src="/automated-lead-capture-left.webp" alt="Automated Lead Capture Left" width={300} height={400} style={{ width: '100%', height: 'auto' }} />
                        </Box>
                        <Box sx={{ flex: 2, textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: '600', mb: 2 }}>
                                Automated Lead Capture
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                                Automate lead capture, integrate web forms to capture leads directly into your CRM.
                            </Typography>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Image src="/lead-manager-right.webp" alt="Lead Manager" width={300} height={400} style={{ width: '100%', height: 'auto' }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                        <Button variant="contained" sx={{ textTransform: 'none', bgcolor: '#E2007B', px: 4, py: 1 }}>
                            Get Started
                        </Button>
                    </Box>

                    {/* Centralized Communication Section */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3, mb: 4 }}>
                        <Box sx={{ flex: 1 }}>
                            <Image src="/centralized-comm-left.webp" alt="Centralized Communication Left" width={300} height={400} style={{ width: '100%', height: 'auto' }} />
                        </Box>
                        <Box sx={{ flex: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: '600', mb: 2 }}>
                                Centralized Communication for Seamless Collaboration
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                                Eliminate the need for multiple apps. Keep everyone in the loop with centralized communication.
                            </Typography>
                            <Image src="/chat-bubble.webp" alt="Chat Bubble" width={200} height={150} style={{ width: '100%', height: 'auto', display: 'block', }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                        <Button variant="contained" sx={{ textTransform: 'none', bgcolor: '#E2007B', px: 4, py: 1 }}>
                            Get Started
                        </Button>
                    </Box>

                    {/* Stress Free Follow-ups Section */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3, mb: 4 }}>
                        <Box sx={{ flex: 1 }}>
                            <Image src="/stress-free-followups-left.webp" alt="Stress Free Follow-ups Left" width={300} height={400} style={{ width: '100%', height: 'auto' }} />
                        </Box>
                        <Box sx={{ flex: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: '600', mb: 2 }}>
                                Stress Free Follow-ups
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                                Set up automated follow-up reminders from Refrens so you never miss a lead.
                            </Typography>
                            <Image src="/activity-log.webp" alt="Activity Log" width={200} height={150} style={{ width: '100%', height: 'auto', display: 'block', }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                        <Button variant="contained" sx={{ textTransform: 'none', bgcolor: '#E2007B', px: 4, py: 1 }}>
                            Get Started
                        </Button>
                    </Box>

                    {/* Sales Management Simplified Section */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3, mb: 4 }}>
                        <Box sx={{ flex: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: '600', mb: 2 }}>
                                Sales Management Simplified
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                                Handle leads, communicate with prospects, send quotations &amp; collect payments all in one place.
                            </Typography>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Image src="/sales-pipeline.webp" alt="Sales Pipeline" width={400} height={300} style={{ width: '100%', height: 'auto' }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                        <Button variant="contained" sx={{ textTransform: 'none', bgcolor: '#E2007B', px: 4, py: 1 }}>
                            Get Started
                        </Button>
                    </Box>

                    {/* Capture Indiamart Leads Section */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3, mb: 4 }}>
                        <Box sx={{ flex: 1 }}>
                            <Image src="/indiamart-integration.webp" alt="Indiamart Integration" width={300} height={400} style={{ width: '100%', height: 'auto' }} />
                        </Box>
                        <Box sx={{ flex: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: '600', mb: 2 }}>
                                Capture Indiamart Leads into Refrens
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                Automatically connect your Indiamart account to capture all inquiries, WhatsApp messages, email, quotations and payments.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                        <Button variant="contained" sx={{ textTransform: 'none', bgcolor: '#E2007B', px: 4, py: 1 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
         </Box>
       </> 
    )
}