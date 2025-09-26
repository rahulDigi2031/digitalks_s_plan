import { Box, Button, Container, Paper, Typography } from "@mui/material";

type Props = { onOpenDialog: () => void };

export default function PartnerWithUS({ onOpenDialog }: Props){
    return(
        <Box sx={{ py: { xs: 6, md: 4 } , mb:{xs:2} }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                        Why Partner With Us?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Digitalks is growing super fast - so can you!
                    </Typography>
                </Box>

                {/* Row 1 */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center', mb: { xs: 6, md: 10 } }}>
                    <Box sx={{ flex: 1 }}>
                        {/* <Paper elevation={0} sx={{ bgcolor: "#F1ECFF", borderRadius: 3, p: 2, height: 240, display:'flex', alignItems:'center', justifyContent:'center' }}> */}
                            <Box component="img" src="/1st.webp" alt="analytics" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                        {/* </Paper> */}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                            Unlimited Lifetime Commissions
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Earn unlimited commissions & rewards for lifetime by onboarding your clients,
                            vendors, and other businesses on Refrens. The more you onboard, the more you
                            earn. There is no minimum or maximum limit.
                        </Typography>
                        <Button size="small" variant="contained" sx={{ textTransform: "none", background: "#7757FA" }} onClick={onOpenDialog}>
                            Get In touch
                        </Button>
                    </Box>
                </Box>

                {/* Row 2 */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center', mb: { xs: 6, md: 10 } }}>
                    <Box sx={{ flex: 1, order: { xs: 2, md: 1 } as any }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                            Quick & Transparent Payments
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Monthly settlements for all your earnings. Transparent reports to track all your
                            earnings.
                        </Typography>
                        <Button size="small" variant="contained" sx={{ textTransform: "none", background: "#7757FA" }} onClick={onOpenDialog}>
                            Get In touch
                        </Button>
                    </Box>
                    <Box sx={{ flex: 1, order: { xs: 1, md: 2 } as any }}>
                      <Box component="img" src="/2nd.webp" alt="analytics" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </Box>
                </Box>

                {/* Row 3 */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center', mb: { xs: 6, md: 10 } }}>
                    <Box sx={{ flex: 1 }}>
                      <Box component="img" src="/3rd.webp" alt="analytics" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                            Easy to Get Started
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Joining the Refrens Partner Program is a breeze. With a low learning barrier, you
                            can start earning today. We provide all the tools and support you need to succeed.
                        </Typography>
                        <Button size="small" variant="contained" sx={{ textTransform: "none", background: "#7757FA" }} onClick={onOpenDialog}>
                            Get In touch
                        </Button>
                    </Box>
                </Box>

                {/* Row 4 */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
                    <Box sx={{ flex: 1, order: { xs: 2, md: 1 } as any }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                            Dedicated Support & Training
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            We provide 100% assistance to our partners - From custom marketing materials to
                            in-depth product training sessions. Get complete assistance from a dedicated
                            account manager to maximize your revenue.
                        </Typography>
                        <Button size="small" variant="contained" sx={{ textTransform: "none", background: "#7757FA" }} onClick={onOpenDialog}>
                            Get In touch
                        </Button>
                    </Box>
                    <Box sx={{ flex: 1, order: { xs: 1, md: 2 } as any }}>
                       <Box component="img" src="/4th.webp" alt="analytics" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}