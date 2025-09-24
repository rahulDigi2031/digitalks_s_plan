"use client";

import { Box, Container, Typography, Card, CardContent } from "@mui/material";

export default function TestimonialFeedbacks() {
    const testimonials = [
        {
            id: 1,
            quote:
                "Tally was too complicated for me. Zoho? too expensive. Refrens just hits that right sweet spot - It's simple, it's feature-rich, and it's value for money.",
            author: "Aniket",
            title: "Owner, Spaceplex, Coworking Space",
            img: "/user.png",
        },
        {
            id: 2,
            quote:
                "Refrens has automated a large chunk of our accounting process - from Invoicing and bookkeeping to creating GST reports and P&L statements. Would definitely recommend it.",
            author: "Anjani",
            title: "Founder, Brown Mocha",
            img: "/user.png",
        },
        {
            id: 3,
            quote:
                "Refrens has increased our operational efficiency and reduced the need for human resources. It's so easy yet so powerful!",
            author: "Nayan",
            title: "Founder, Sugoi Labs, Software Services Agency",
            img: "/user.png",
        },
        {
            id: 4,
            quote:
                "I have tried 4 different software before Refrens, So trust me when I say this - no one does it better.",
            author: "Snehal Bhatt",
            title: "Owner, Nexati LLC, Agency",
            img: "/user.png",
        },
        {
            id: 5,
            quote:
                "One thing I like the most about Refrens is its ease of use. Any team member can just log in and get started in minutes, without any training.",
            author: "Shivansh Tulsyan",
            title: "CEO, Binny Textiles",
            img: "/user.png",
        },
        {
            id: 6,
            quote: "Refrens has made invoicing so simple for freelancers like me. Kudos to the team!",
            author: "Linkee",
            title: "Freelancer, Content Writer",
            img: "/user.png",
        },
    ];

    return (
        <Box sx={{ bgcolor: "#fff", py: 6 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    sx={{ textAlign: "center", fontWeight: "bold", mb: 8 }}
                >
                    What people say about us
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap:7,
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <Box
                            key={testimonial.id}
                            sx={{
                                flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%" },
                                maxWidth: { xs: "100%", sm: "45%", md: "30%" },
                                display: "flex",
                            }}
                        >
                            <Card
                                sx={{
                                    borderRadius: 2,
                                    pt: 6, // extra padding top for image overlap
                                    px: 3,
                                    pb: 3,
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    position: "relative",
                                    boxShadow: "none",
                                    border: "1px solid #e0e0e0",
                                    overflow: "visible", // allow image to go outside
                                }}
                            >
                                {/* Custom Image instead of Avatar */}
                                <Box
                                    component="img"
                                    src={testimonial.img}
                                    alt={testimonial.author}
                                    sx={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: "50%", // round like avatar
                                        objectFit: "cover",
                                        position: "absolute",
                                        top: -40, // half outside
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        // border: "1px solid #fff",
                                        boxShadow: "0 2px 5px rgba(0,0,0,0.30)",
                                    }}
                                />

                                <CardContent sx={{ flexGrow: 1, mt: 3 }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontStyle: "italic",
                                            mb: 2,
                                            color: "text.secondary",
                                        }}
                                    >
                                        "{testimonial.quote}"
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                        {testimonial.author}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "text.secondary", mt: 0.5 }}
                                    >
                                        {testimonial.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
