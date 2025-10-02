'use client'

import { Box, Container, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export default function BusinessesSupports() {

    const featureImages: string[] = [
        "/reports.webp",
        "/gstinv.webp",
        "/invformat.webp",
        "/isocertified.webp",
        "/mobapp.webp",
    ];

    const features = [
        {
            title: "Advanced Accounting & Reporting",
            points: [
                "Manage your business finances with confidence using professional tools",
                "Create and send invoices, generate balance sheets, and track expenses",
                "Generate Income Statement, Balance Sheet, and Trial Balance",
                "Stay on top of your business and get insights to manage cash flow",
                "Avoid compliance with GST, TDS, and online accounting"
            ]
        },
        {
            title: "Fast, UI Friendly Software",
            points: [
                "Intuitive user experience for fast navigation",
                "Easy to learn and use, even for a business newbie",
                "No accounting background required to use our invoice software",
                "No accounting background required to get started"
            ]
        },
        {
            title: "Simple & Affordable",
            points: [
                "Everything you need, free of cost or a freemium. Starting from ₹499/month",
                "Simple and affordable plans for every need",
                "Start for free and upgrade only if needed",
                "Affordable pricing designed for small businesses"
            ]
        },
        {
            title: "Secure Data & Backup",
            points: [
                "Your financial data is online and secure from damage",
                "Automatic backups ensure your data is never lost",
                "Free limited backup and protected controls",
                "Regular software updates and security patches",
                "Data encryption to protect sensitive financial data"
            ]
        },
        {
            title: "Mobile App",
            points: [
                "Invoice on the go",
                "Available on both Play Store & App Store",
                "Create invoices, track payments and access reports from your phone"
            ]
        }
    ];

    return (
        <>
            <main>
                <Container maxWidth="lg">
                    {/* Heading */}
                    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 , mt:6 }}>
                           Why Businesses Love Using Refrens Invoicing Software?
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Powerful tools to create, manage, and stay compliant — all in one place.
                        </Typography> */}
                    </Box>

                    {/* Feature Rows */}
                    {features.map((feature, idx) => {
                        const isAlt = idx % 2 === 1;
                        return (
                            <Box
                                key={feature.title}
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    gap: 6,
                                    alignItems: 'center',
                                    mb: { xs: 6, md: 10 }
                                }}
                            >
                                {/* Image */}
                                <Box sx={{ flex: 1, order: { xs: 1, md: isAlt ? 2 : 1 } as any }}>
                                    <Box component="img" src={featureImages[idx] ?? `/feature-img-${idx + 1}.webp`} alt={feature.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </Box>
                                {/* Text */}
                                <Box sx={{ flex: 1, order: { xs: 2, md: isAlt ? 1 : 2 } as any }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                                        {feature.title}
                                    </Typography>
                                    <List dense>
                                        {feature.points.map((point, i) => (
                                            <ListItem key={i} sx={{ pl: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 32 }}>
                                                    <CheckCircle sx={{ color: '#4CAF50', fontSize: 20 }} />
                                                </ListItemIcon>
                                                <Typography variant="body2" color="text.secondary">
                                                    {point}
                                                </Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                    <Typography variant="body1" sx={{ textTransform: 'none', mt: 2, cursor: "pointer", color: "#8A59F5" }}>
                                        Get Started — it's FREE
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })}
                </Container>
            </main>
        </>
    )
}