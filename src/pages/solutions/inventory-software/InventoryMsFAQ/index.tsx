'use client'

import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "@mui/material/Link";

export default function InventoryManagementFaQ() {
    return (
       <>
          <Box>
              <Container maxWidth="lg">
                 <Box sx={{ mt: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="h4"
                        sx={{ textAlign: "center", fontWeight: 700, mb: { xs: 2, md: 3 } }}
                    >
                        Frequently Asked Questions (FAQ)
                    </Typography>

                    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>What is Refrens?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 }, mb: 1 }}>
                                    Refrens is one-stop platform for your accounting, admin, and sales team to manage invoicing, accounting, expenditures, inventory, sales, and other business processes.
                                </Typography>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    1.5M+ businesses across 178+ countries have simplified their day-to-day business operations with Refrens.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>Will my data be secure on Refrens?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Protecting your data is our top priority. Businesses worldwide trust Refrens to handle critical operations securely. For details on how we safeguard your information, refer to our privacy policy: <Link href="/privacy-policy" underline="hover">Privacy Policy</Link>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>How reliable is Refrens?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Refrens ensures 99% uptime, delivering a dependable platform for uninterrupted business operations. You can rely on Refrens to provide consistent and high-quality performance.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>Can Refrens grow with my business?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Absolutely. Refrens is built to scale alongside your business. Our cloud-based infrastructure allows for seamless scalability, with regular updates and new features to accommodate your growth without compromising performance.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>Is Refrens Free?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Refrens offers a free plan with essential features to help you get started with ease. For more advanced features and additional tools, we offer paid plans tailored to your specific business needs.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>I need More Help - How Can I Contact Refrens?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    For any assistance, you can reach out to us via live chat support, drop an email at care@refrens.com, or message us on WhatsApp at +9191043036.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Box sx={{display:"flex" , justifyContent:"center"}}> {/* button of Premium upgradation */}
                            <Button variant="contained" sx={{bgcolor:"#E2007B" , color:"white" , margin:"auto"}}>Get Started</Button>
                        </Box>
                    </Box>
                        
                </Box>  
              </Container>    
          </Box> 
       </> 
    )
}