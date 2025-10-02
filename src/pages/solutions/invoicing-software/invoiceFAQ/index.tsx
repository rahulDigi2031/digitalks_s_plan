'use client'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function InvoiceFaQ() {
    return (
        <>
            <Container maxWidth="lg">
                {/* faq section*/}
                <Box sx={{ mt: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="h4"
                        sx={{ textAlign: "center", fontWeight: 700, mb: { xs: 2, md: 3 } }}
                    >  
                        Frequently Asked Questions (FAQ)
                    </Typography>

                    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
                        {/* 1 */}
                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>
                                    Which is the best invoicing software in India?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Refrens is the best billing and invoicing software for startups, small businesses, and SMEs in India.
                                    Trusted by over 3 lakh users and rated 4.8 out of 5. Built by Indian entrepreneurs for Indian
                                    businesses, Refrens helps you create and send professional invoices, track payments in real-time.
                                    Refrens invoicing software simplifies complex financial operations like GST billing, GST filing, and
                                    other accounting operations with a user-friendly interface.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* 2 */}
                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>
                                    Is Refrens free for invoicing?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Yes, basic plan is Free. Refrens provides a free basic plan with no hidden charges or time limits.
                                    You can create up to 15 business documents per year, which includes invoices, quotations, proforma
                                    invoices, purchase orders, credit or debit notes, delivery challans, and expense records — all without
                                    paying a penny. The free plan also includes automated payment reminders, client management, multi-device
                                    support, add 2 team members, expense tracking. If you need more flexibility or advanced features, Refrens
                                    offers affordable paid subscriptions starting at just ₹400 per month.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* 3 */}
                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>
                                    Does Refrens invoicing software support recurring invoices?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Yes, Refrens Online Invoice Software supports recurring invoices. Users can easily set up recurring
                                    invoices for clients who need to be billed on a regular basis. This feature allows businesses and
                                    freelancers to automate the invoicing process for services or products provided on a recurring schedule,
                                    such as monthly retainers, subscription services, or ongoing projects. Recurring invoices help save time
                                    and ensure consistent and timely payments from clients.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* 4 */}
                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>
                                    Is my data safe with Refrens?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Yes. Your data is stored securely with encryption and cloud protection. We are ISO/IEC 27001:2022
                                    certified. Your data stays private and is safely stored on the cloud.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* 5 */}
                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>
                                    Can I manage TDS and GST related reports and data?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Yes, Refrens Online Invoice Software allows you to manage TDS (Tax Deducted at Source) and GST (Goods and
                                    Services Tax) related reports and data. The software provides essential reports like TDS reports, GST
                                    reports, and HSN (Harmonized System of Nomenclature) reports, ensuring that businesses and freelancers can
                                    easily handle tax-related documentation and compliance. Managing TDS and GST data efficiently is crucial
                                    for businesses to stay compliant with tax regulations, and Refrens offers the necessary tools to streamline
                                    this process.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        
                        {/* 6 */}
                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>
                                    How long will my invoices be with Refrens?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    For as long as you want. We will not remove or delete any data or invoice that belongs to you, unless specifically instructed by you to do
                                    so.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* 7 */}
                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>
                                    Can I add multiple users to a single business account?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Yes, Refrens allows you to add and manage multiple users under a single business account. This feature is beneficial for businesses that
                                    require collaboration among team members or have multiple staff members handling different aspects of invoicing and project
                                    management. Each user can have designated roles and permissions, ensuring secure and efficient management of your business
                                    processes.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* 8 */}
                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>
                                    Do Refrens provide support?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Refrens is always available to support our customers via email support(care@refrens.com), live chat support, and also over phone call
                                    and WhatsApp (+91 9104043036).
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* 9 */}
                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>
                                    Is Refrens invoice software suitable for small businesses?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 } }}>
                                    Yes, Refrens is suitable as a small business invoice software. It offers a range of features tailored to meet the invoicing needs of small
                                    businesses, consultants, and entrepreneurs. With Refrens, you can create professional invoices, manage expenses, generate reports, and
                                    track payments. Refrens user-friendly interface and customizable templates make it convenient for small businesses to streamline their
                                    invoicing processes. Additionally, Refrens provides essential features such as client management, payment tracking, and the ability to
                                    generate various types of documents like quotations and purchase orders, making it a comprehensive solution for small businesses.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* 10 */}
                        <Accordion sx={{ boxShadow: "none", border: "1px solid #eee", borderRadius: 2, mb: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>
                                    What happens to my data when I want to leave?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{mb:5}}>
                                <Typography color="text.secondary" sx={{ fontSize: { xs: 13, md: 14 }  }}>
                                    When you decide to leave Refrens, you have the option to download all your customer data, invoices, quotations, and other documents at
                                    any time. This ensures that you have access to your important business information even after discontinuing your use of the platform.
                                    Refrens prioritizes data security and allows users to retain their data for their records or for transitioning to another platform if needed.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>

                <Button variant="contained" sx={{bgcolor:"#E2007B" , mt:2 , display:"block" , margin:"auto"}}>Create Your FREE Account</Button>
            </Container>
        </>
    )
}