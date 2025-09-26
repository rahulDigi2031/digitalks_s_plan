import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ(){
    const faqs = [
        {
            q: "What is the Refrens Partner Program?",
            a: [
                "The Refrens Partner Program is a unique opportunity to earn lifetime commissions and unlimited rewards by referring your network to Refrens.",
            ],
        },
        {
            q: "What are my responsibilities as a partner?",
            a: [
                "As a partner, you're expected to refer your network to Refrens, assist them in onboarding, and encourage them to make a premium purchase.",
            ],
        },
        {
            q: "Do I get to earn commissions if a referral renews their Premium?",
            a: [
                "Yes, you'll continue to earn commission on payments (minus taxes) made by your Referral towards renewing their subscription - for lifetime.",
            ],
        },
        {
            q: "Is there any fee to join the partner program?",
            a: [
                "No - the Refrens Partner Program is completely free. There is no joining fee or other hidden charges.",
            ],
        },
        {
            q: "When will my earnings be credited?",
            a: [
                "All your earnings will be credited after the first week of the following month.",
            ],
        },
        {
            q: "Will I get any promotional materials?",
            a: [
                "Yes, you will get all the marketing material required to help you promote the product & convert leads. We will provide you with demo videos, social media posters, and a pitch deck. You can also request for more materials as and when needed.",
            ],
        },
        {
            q: "How do I track my Referrals?",
            a: [
                "You can track the status of your referrals on your dashboard on the Rewards page in your Refrens account. You can track whether they've signed up, verified their email, created their business, or upgraded to Premium. It's completely transparent.",
            ],
        },
        {
            q: "Where do I get more details?",
            a: [
                "Fill out the form above OR WhatsApp us at +91 9104043608 OR drop an email at partners@refrens.com for more inquiries.",
            ],
        },
        {
            q: "Will my client get any additional benefits by purchasing through my affiliate link?",
            a: [
                "Yes, when your clients make a purchase, both of you will get 300 Refrens credits each. These can be used to avail discounts at the time of renewals.",
            ],
        },
    ];

    return(
        <Box>
            <Container maxWidth="lg">
                <Box sx={{ mt: { xs: 4, md: 6 }, mb: { md: 5 , xs:5 } }}>
                    <Typography
                        variant="h4"
                        sx={{ textAlign: "center", fontWeight: 700, mb: { xs: 2, md: 3 } }}
                    >
                        Frequently Asked Questions (FAQ)
                    </Typography>

                    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
                        {faqs.map((item, idx) => (
                            <Accordion key={idx} sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>{item.q}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {item.a.map((p, i) => (
                                        <Typography key={i} color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 }, mb: i === item.a.length - 1 ? 0 : 1 }}>
                                            {p}
                                        </Typography>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                        ))}

                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Button variant="contained" sx={{ bgcolor: "#7C3DDA", color: "white", margin: "auto" }}>Get in Touch</Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}