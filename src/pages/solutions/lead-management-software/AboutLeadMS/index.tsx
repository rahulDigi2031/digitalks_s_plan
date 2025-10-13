'use client'

import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image"

export default function AboutLeadMS() {
    return (
        <>
            <Box>
               <Container maxWidth="lg">

                    <Typography variant="h4" sx={{ textAlign: "center", mt: 2, mb: 3 }}>
                       Transform Your Lead Management Process
                    </Typography>

                    <Typography variant="body1" sx={{ color: "gray", textAlign: "center", mb: 3 }}>
                        Capture Leads, Nurture, Convert and Track Your Progress - All In One Place
                    </Typography>

                    <Image src="/salesHeroimage.webp" alt="" width={1200} height={600} />

                    <Button variant="contained" sx={{ textTransform: "none", bgcolor: "#E2007B", display: "block", margin: "auto", mb: 3 }}>
                        Get Started
                    </Button>

                    <Typography variant="h6" sx={{ color: "gray", textAlign: "center" }}>
                        Convert more leads, faster with our 3-step system
                    </Typography>

                    {/* 3 Steps Section */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: "center",
                        alignItems: { xs: 'center', md: 'flex-start' },
                        gap: { xs: 3, md: 5 },
                        mt: 4,
                        mb: 6,
                    }}>
                        {/* Step 1 */}
                        <Box sx={{ maxWidth: { xs: '100%', md: 320 }, textAlign: "center", width: { xs: '100%', md: 'auto' } }}>
                            <Image src="/lead1.webp" alt="Step 1" width={320} height={90} style={{ marginBottom: 16, width: '100%', height: 'auto' }} />
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Capture Leads Like a Boss
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray' }}>
                                Reduce turnaround time and automatically capture leads faster than a speeding bullet - from any source!
                            </Typography>
                        </Box>
                        {/* Step 2 */}
                        <Box sx={{ maxWidth: { xs: '100%', md: 320 }, textAlign: "center", width: { xs: '100%', md: 'auto' } }}>
                            <Image src="/lead2.webp" alt="Step 2" width={320} height={90} style={{ marginBottom: 16, width: '100%', height: 'auto' }} />
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Nurture Leads to Success
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray' }}>
                                Segment, assign, and communicate with leads over WhatsApp and Email. Keep track and set auto-reminders
                            </Typography>
                        </Box>
                        {/* Step 3 */}
                        <Box sx={{ maxWidth: { xs: '100%', md: 320 }, textAlign: "center", width: { xs: '100%', md: 'auto' } }}>
                            <Image src="/lead3.webp" alt="Step 3" width={320} height={90} style={{ marginBottom: 16, width: '100%', height: 'auto' }} />
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Drive Closure
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray' }}>
                                Ensure timely follow-ups at every stage of the lead. Create and track quotations in one click to close more deals faster and boost revenue
                            </Typography>
                        </Box>
                    </Box>

               </Container>
            </Box>
        </>
    )
}