import { Box, Container, Typography } from "@mui/material";

export default function IdealPartner(){
    const cards = [
        {
            src: "/1s.webp",
            titleLine1: "Accountants &",
            titleLine2: "Financial Advisors",
        },
        {
            src: "/2n.webp",
            titleLine1: "Marketing Agency",
            titleLine2: "Operators",
        },
        {
            src: "/3r.webp",
            titleLine1: "Business Consultants &",
            titleLine2: "Content Creators",
        },
        {
            src: "/4t.webp",
            titleLine1: "IT Consultants &",
            titleLine2: "Software Distributors",
        },
    ];

    return(
        <>
            <Container maxWidth="lg">
            <Box component="section" sx={{ px: { xs: 2, sm: 4 }, py: { xs: 6, sm: 8 } }}>
            <Typography
                component="h2"
                sx={{
                    fontWeight: 700,
                    textAlign: "center",
                    mb: { xs: 4, sm: 6 },
                    fontSize: { xs: 22, sm: 28, md: 34 },
                    lineHeight: 1.3
                }}
            >
                Who Can Be An Ideal Refrens Partner?
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: 2, sm: 3, md: 4 },
                    justifyContent: "center",
                }}
            >
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "relative",
                            width: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(25% - 24px)" },
                            maxWidth: 360,
                            aspectRatio: "4 / 5",
                            borderRadius: 2,
                            overflow: "hidden",
                            boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
                            flex: "1 1 240px",
                        }}
                    >
                        <Box
                            component="img"
                            src={card.src}
                            alt={`${card.titleLine1} ${card.titleLine2}`}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />

                        {/* gradient overlay */}
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                pt: { xs: 1.5, sm: 2 },
                                pb: { xs: 2, sm: 2.5 },
                                px: { xs: 2, sm: 2.5 },
                                background:
                                    "linear-gradient(0deg, rgba(112,51,255,0.95) 0%, rgba(112,51,255,0.86) 45%, rgba(112,51,255,0.00) 100%)",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#ffffff",
                                    fontWeight: 700,
                                    fontSize: { xs: 14, sm: 16 },
                                    lineHeight: 1.4,
                                    textShadow: "0 2px 8px rgba(0,0,0,0.25)",
                                }}
                            >
                                {card.titleLine1}
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#ffffff",
                                    fontWeight: 700,
                                    fontSize: { xs: 14, sm: 16 },
                                    lineHeight: 1.4,
                                    textShadow: "0 2px 8px rgba(0,0,0,0.25)",
                                }}
                            >
                                {card.titleLine2}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Typography
                sx={{
                    textAlign: "center",
                    mt: { xs: 4, sm: 5 },
                    color: "text.secondary",
                    fontSize: { xs: 14, sm: 16 },
                }}
            >
                Have a great network of businesses? That's all you need to get started!
            </Typography>
        </Box>
            </Container>
        </>
    )
}