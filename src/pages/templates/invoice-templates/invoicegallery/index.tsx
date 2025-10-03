'use client'

import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image"

export default function InvoiceGallery() {
    return (
        <>
            <Container maxWidth="lg" sx={{ py: 4 }}>
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
                            Professional Invoice Template
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                                src="/format01.webp"
                                alt="Professional Invoice Template"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center', flex: { xs: 1, sm: 0 }, minWidth: { xs: 'auto', sm: 220 } }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 1 }}>
                            Letterhead Invoice Template
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                                src="/format02.webp"
                                alt="Letterhead Invoice Template"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center', flex: { xs: 1, sm: 0 }, minWidth: { xs: 'auto', sm: 220 } }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 1 }}>
                            Classic Invoice Template
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                                src="/format03.webp"
                                alt="Classic Invoice Template"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center', flex: { xs: 1, sm: 0 }, minWidth: { xs: 'auto', sm: 220 } }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 1 }}>
                            Print Friendly Invoice Template
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                                src="/format04.webp"
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
                            Modern Invoice Template
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                                src="/format05.webp"
                                alt="Modern Invoice Template"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center', flex: { xs: 1, sm: 0 }, minWidth: { xs: 'auto', sm: 300 } }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 1 }}>
                            Business Invoice Template
                        </Typography>
                        <Box sx={{ position: 'relative', height: 300, width: '100%' }}>
                            <Image
                                src="/format06.webp"
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
                    Use the Best Invoice Format to Create Invoice Now!
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
                    Create Invoice Now
                </Button>
            </Box>
        </>
    )
}