import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function StoryNews() {
    const logos = [
        { src: "/yourstory.webp", alt: "YourStory", href: "https://yourstory.com/2020/05/funding-alert-refrens-vijay-shekhar-sharma-anupam-mittal" },
        { src: "/vcc.webp", alt: "VCCircle", href: "https://www.vccircle.com/refrens-raises-funding-from-paytm-founder-others" },
        { src: "/et.webp", alt: "Economic Times", href: "https://economictimes.indiatimes.com/startups/refrens-raises-funds-from-a-clutch-of-investors-including-vijay-shekhar-sharma/articleshow/75690333.cms" },
        { src: "/indexpress.webp", alt: "Indian Express", href: "https://www.newindianexpress.com/business/2019/Nov/14/refrens-banking-on-freelancer-friendly-offerings-to-drive-growth-2061596.html" },
    ];

    return (
        <Box sx={{ bgcolor: "#FBFCFD", py:{xs:3, md:5}, mb:{md:5} }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    sx={{ textAlign: "center", fontWeight: 600, mb: { xs: 3, md:3 } }}>Refrens In News</Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: { xs: 2, sm: 3, md: 4 },
                    }}
                >
                    {logos.map((logo) => (
                        <Link key={logo.alt} href={logo.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <Box
                                sx={{
                                    bgcolor: "#EFF3F7",
                                    borderRadius: 2,
                                    px: { xs: 2, md: 3 },
                                    py: { xs: 1, md: 1.5 },
                                    minWidth: { xs: 130, md: 180 },
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "transform 0.15s ease",
                                    "&:hover": { transform: "translateY(-2px)" },
                                }}
                            >
                                <Image src={logo.src} alt={logo.alt} width={120} height={30} style={{ objectFit: "contain", width: "120px", height: "30px" }} />
                            </Box>
                        </Link>
                    ))}
                </Box>

                {/* faq section*/}
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
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>Is the subscription fee refundable?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 }, mb: 1 }}>
                                    Yes, we offer a 100% refund on annual plans if requested for cancellation within the first 7 days.
                                </Typography>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    For longer plans, 100% refunds are available if canceled within 30 days.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>Can I transfer my subscription to another business?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    You can transfer your Premium subscription to any other business you own or start. Only valid for 3-years or longer plans.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>How many users can I add as managers to my business?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Different plans have different limits on the number of users you can add. However, if you want to add more users than your plan permits, please reach out to your account manager OR drop a message on chat support.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>Will the prices be increased in the future?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Yes. Incase prices increase, your current plan will be carried forward for you.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>What happens to my data when I want to leave?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    When you decide to leave Refrens, you have the option to download all your customer data, invoices, quotations, and other documents at any time. This ensures that you have access to your important business information even after discontinuing your use of the platform.
                                </Typography>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 }, mt: 1 }}>
                                    Refrens prioritizes data security and allows users to retain their data for their records or for transitioning to another platform if needed.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb:2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>What happens if I want to downgrade to the free plan later?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    You can continue using Refrens as per the features of the free plan. We will refund your fees on a Pro-rata basis.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>Is this subscription for all my business?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    No. You are upgrading only 1 business. If you need a bulk plan for multiple businesses please reach out to us at care@refrens.com.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2 , mb:2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>I need more help.</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Please ping us on chat support with your email and phone number details, we will get back to you. Or email us at care@refrens.com.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Box sx={{display:"flex" , justifyContent:"center"}}> {/* button of Premium upgradation */}
                            <Button variant="contained" sx={{bgcolor:"#E2007B" , color:"white" , margin:"auto"}}>Upgrade to Premium</Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

