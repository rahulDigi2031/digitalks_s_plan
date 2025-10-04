'use client'

import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image"

export default function InvoiceGallery() {
    return (
        <>
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 700, color: '#333' }}>
                    Pick your favorite invoice template in step 3 with Refrens
                </Typography>

                {/* Row 1 - 4 Images */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    justifyContent: 'center',
                    mb: 3
                }}>
                    <Box sx={{ textAlign: 'center', flex: { xs: 1, sm: 0 }, minWidth: { xs: 'auto', sm: 220 } }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 1 }}>
                          Use Quotation Template
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                                src="/quot01.webp"
                                alt="Professional Invoice Template"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center', flex: { xs: 1, sm: 0 }, minWidth: { xs: 'auto', sm: 220 } }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 1 }}>
                        Use Quotation Template - Letterhead
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                               src="/Quot02.webp"
                                alt="Letterhead Invoice Template"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center', flex: { xs: 1, sm: 0 }, minWidth: { xs: 'auto', sm: 220 } }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 1 }}>
                         Use Classic Quotation Template
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                                src="/Quot03.webp"
                                alt="Classic Invoice Template"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center', flex: { xs: 1, sm: 0 }, minWidth: { xs: 'auto', sm: 220 } }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 1 }}>
                         Use Printable Quotation Template
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                                src="/Quot04.webp"
                                alt="Print Friendly Invoice Template"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Row 2 - 2 Images */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 3,
                    justifyContent: 'center'
                }}>
                    <Box sx={{ textAlign: 'center', flex: { xs: 1, sm: 0 }, minWidth: { xs: 'auto', sm: 300 } }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 1 }}>
                          Use Modern Quotation Template
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                                src="/Quot05.webp"
                                alt="Modern Invoice Template"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center', flex: { xs: 1, sm: 0 }, minWidth: { xs: 'auto', sm: 300 } }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 1 }}>
                          Use Quotation Template - Business
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                                src="/Quot06.webp"
                                alt="Business Invoice Template"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>

            {/*  */}
            <Box sx={{
                bgcolor: '#7C3DDA',
                py: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                width: '100%'
            }}>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mr: 2 }}>
                Get Your Free Quotation Format Now
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: '#E2007B',
                        color: 'white',
                        borderRadius: 2,
                        px: 3,
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': { bgcolor: '#D5006B' }
                    }}
                >
                    Create Free Quotation
                </Button>
            </Box>
        </>
    )
}