
'use client'
import { Box, Button, Container, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export default function BenefitsOFinvoiceSoftware(){
    
    const featureImages: string[] = [
        "/01.webp",
        "/02.webp", 
        "/03.webp",
        "/04.webp",
        "/05.webp",
        "/06.webp",
        "/07.webp",
        "/08.webp",
        "/09.webp"
    ];

    const features = [
        {
            title: "Invoicing Software for Small Businesses",
            points: [
                "Create professional invoices in minutes",
                "Send invoices via email or WhatsApp",
                "Track payment status and send reminders",
                "Manage client information and payment history",
                "Starting at ₹499/month"
            ]
        },
        {
            title: "Invoicing Software for Consultants",
            points: [
                "Invoice clients for your consulting services and track time",
                "Create professional proposals and estimates",
                "Set up recurring invoices for retainer clients",
                "Track project expenses and profitability",
                "Starting at ₹499/month"
            ]
        },
        {
            title: "Invoicing Software for Startups",
            points: [
                "Get started with free invoicing templates",
                "Scale your billing as your business grows",
                "Integrate with popular payment gateways",
                "Generate financial reports for investors",
                "Starting at ₹499/month"
            ]
        },
        {
            title: "Invoicing Software for Service Companies",
            points: [
                "Bill clients for services rendered with detailed line items",
                "Set up recurring billing for ongoing services",
                "Track service delivery and client satisfaction",
                "Manage multiple service offerings and pricing tiers",
                "Starting at ₹499/month"
            ]
        },
        {
            title: "Import/Export Businesses",
            points: [
                "Handle complex international invoicing requirements",
                "Manage multiple currencies and exchange rates",
                "Generate export documentation and shipping invoices",
                "Comply with international trade regulations",
                "Starting at ₹499/month"
            ]
        },
        {
            title: "Invoicing Software for Contractors",
            points: [
                "Bill clients for project milestones and deliverables",
                "Track project progress and expenses",
                "Set up progress billing and retainer invoices",
                "Manage subcontractor payments and expenses",
                "Starting at ₹499/month"
            ]
        },
        {
            title: "Invoicing Software for CAs",
            points: [
                "Manage client billing for accounting services",
                "Track billable hours and expenses",
                "Generate professional service invoices",
                "Integrate with accounting software and tax tools",
                "Starting at ₹499/month"
            ]
        },
        {
            title: "Invoicing Software for Salespersons",
            points: [
                "Create quotes and convert them to invoices",
                "Track sales performance and commission",
                "Manage customer relationships and follow-ups",
                "Generate sales reports and analytics",
                "Starting at ₹499/month"
            ]
        },
        {
            title: "Invoicing Software for Retailers",
            points: [
                "Manage inventory and create sales invoices",
                "Track product sales and inventory levels",
                "Set up barcode scanning and POS integration",
                "Generate inventory reports and reorder alerts",
                "Starting at ₹499/month"
            ]
        }
    ];
    return(
        <>
            <main>
                <Container maxWidth="lg">
                    {/* Heading */}
                    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 , mt:6 }}>
                        Who can benefit from Refrens free billing software?
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

                <Box sx={{ width: "100%", height: "120px", bgcolor: "#7C3DDA", display: "flex", alignItems: "center" }}>
                    <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "white", height: "100%" }}>
                        <Typography variant="h6" sx={{ color: "white", fontWeight: 500 }}>
                            Simplify your invoicing with Refrens invoicing software app. Try it for free!
                        </Typography> 
                        <Button 
                            variant="contained" 
                            sx={{ 
                                bgcolor: "#E2007B", 
                                color: "white",
                                // px: 3,
                                // py: 1.5,
                                fontWeight: "bold",
                                textTransform: "none",
                                "&:hover": {
                                    bgcolor: "#C2185B"
                                }
                            }}
                        >
                            Create Your FREE Account
                        </Button>
                    </Container>
                </Box>

            </main>
        </>
    )
}