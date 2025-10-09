'use client'

import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image"

export default function AboutSalesLead() {
    return (
        <>
            <Box>
               <Container maxWidth="lg">

                    <Typography variant="h5" sx={{ textAlign: "center", mt: 2, mb: 3 }}>
                        Unlock your sales potential and boost your revenue!
                    </Typography>

                    <Typography variant="body1" sx={{ color: "gray", textAlign: "center", mb: 3 }}>
                        Manage your leads, monitor pipeline progress, and drive sales success with our all-in-one Sales CRM.
                    </Typography>

                    <Image src="/salesHeroimage.webp" alt="" width={1200} height={600} />

                    <Button variant="contained" sx={{ textTransform: "none", bgcolor: "#E2007B", display: "block", margin: "auto", mb: 3 }}>
                        Get Started
                    </Button>

                    <Typography variant="h6" sx={{ color: "gray", textAlign: "center" }}>
                        Accelerate sales performance in 3-steps
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
                            <Image src="/step1.webp" alt="Step 1" width={320} height={90} style={{ marginBottom: 16, width: '100%', height: 'auto' }} />
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Effortlessly Manage Your Sales Pipeline
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray' }}>
                                Instantly import leads from any source, auto-capture leads with Refrens forms, and visualize your entire sales pipeline for quick, data-driven decisions.
                            </Typography>
                        </Box>
                        {/* Step 2 */}
                        <Box sx={{ maxWidth: { xs: '100%', md: 320 }, textAlign: "center", width: { xs: '100%', md: 'auto' } }}>
                            <Image src="/step2.webp" alt="Step 2" width={320} height={90} style={{ marginBottom: 16, width: '100%', height: 'auto' }} />
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Engage and Nurture Your Leads
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray' }}>
                                Easily segment and assign leads, stay connected via WhatsApp and Email, and set auto-reminders to never miss a beat.
                            </Typography>
                        </Box>
                        {/* Step 3 */}
                        <Box sx={{ maxWidth: { xs: '100%', md: 320 }, textAlign: "center", width: { xs: '100%', md: 'auto' } }}>
                            <Image src="/step3.webp" alt="Step 3" width={320} height={90} style={{ marginBottom: 16, width: '100%', height: 'auto' }} />
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Close Deals and Drive Revenue
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray' }}>
                                Stay on top of follow-ups and generate quotations in just one click, speeding up deal closures and increasing sales success.
                            </Typography>
                        </Box>
                    </Box>

               </Container>
            </Box>
        </>
    )
}