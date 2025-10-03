'use client'

import { Box, Container, Typography } from "@mui/material"
import { 
  Settings, 
  Person, 
  Edit, 
  Download, 
  FormatListBulleted, 
  Palette, 
  Accessibility, 
  Calculate, 
  Share, 
  Receipt, 
  Language, 
  Cloud, 
  People, 
  History, 
  Backup 
} from "@mui/icons-material"
import Image from "next/image"

export default function KeyFeatures(){
    return(
        <>
           <Box sx={{bgcolor:"#161C26" , width:"100%" , height:{md:"1400px" , xs:"100%"}}}>
           <Container maxWidth="xl" sx={{ py: 4 }}>
                <Box sx={{ 
                    borderRadius: 2, 
                    p: 4, 
                    textAlign: 'center' 
                }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 4 }}>
                        Key Features of Free Invoice Templates
                    </Typography>
                    
                    <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center', 
                        gap: 3 
                    }}>
                        {/* Row 1 */}
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/customfield.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Custom Fields
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Customize invoice templates with additional fields for shipping details, discounts, extra charges for a more tailored invoice format.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/client.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Client and Product Details
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Add detailed fields or service line items, professionalize your invoice clearly.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/customization.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Easy Customization
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Effortlessly tailor your online invoice templates to fit your business needs without any hassle, ensuring a seamless workflow.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                               <Image src="/print.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Download and Print
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Easily download your invoice templates in PDF, Word, Excel formats for offline use and convenient printing.
                            </Typography>
                        </Box>

                        {/* Row 2 */}
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/mformats.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Multiple Formats
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Access professionally designed invoice templates in various formats, PDF, Word, Excel, for greater flexibility.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                 <Image src="/pdesign.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Professional Designs
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Professional designs templates designed to match your brand's look and feel.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/userfrindly.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                User-Friendly Interface
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                User-friendly interface with a simple and intuitive interface that makes the process efficient and smooth.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/autocalc.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Automated Calculations
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Save time with our free invoice templates that automatically calculate totals, taxes, and discounts for you.
                            </Typography>
                        </Box>

                        {/* Row 3 */}
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/save.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Save and Send
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Easily save your invoices and send them via email with our free invoicing tool.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{  
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/tax.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Tax Calculation
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Tax calculation templates, automatically apply your tax rates to simplify your invoice management.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/payment.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Payment Terms
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Clearly define payment terms and conditions so your clients understand their obligations.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/multicurrency.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Multi-Currency Support
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Multi-currency support create invoices with clients' currencies for international transactions, ensuring global reach.
                            </Typography>
                        </Box>

                        {/* Row 4 */}
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/brands.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Brand Customization
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Add your company logo and brand colors to personalize your invoices and reflect your unique identity.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/projectbase.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Project-Based Billing
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Include project names and descriptions on your invoices for easy reference and organization, ensuring clarity.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/expense.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Expense Tracking
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Itemize and track expenses related to specific projects or clients using our free billing templates, keeping your finances detailed.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/signature.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Signature Fields
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Add fields for signatures to authorize and validate your invoices, giving them a professional touch.
                            </Typography>
                        </Box>

                        {/* Row 5 */}
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/online.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Online Accessibility
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Manage and create invoices from anywhere with internet access, assuring you're organized and productive on the go.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/RLC.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Real-Time Collaboration
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Share and collaborate on invoices with team members in real-time using our free invoicing tool, enhancing efficiency.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/history.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Invoice History
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Maintain a history of all invoices sent, allowing you to track their status and manage your accounts effectively.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/backup.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Backup and Restore
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Easily backup and restore invoice data to prevent the loss of important information, ensuring data security.
                            </Typography>
                        </Box>

                        {/* Row 6 */}
                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{  
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/databse.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Client Database
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Keep a client database for quick access to client information, improving your workflow and efficiency.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/mobile.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Mobile Compatibility
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Create and manage invoices on-the-go with our mobile-friendly templates, ensuring you work from anywhere.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/notes.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                Custom Notes
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Add personalized notes and messages to communicate directly with clients, making each invoice tailored.
                            </Typography>
                        </Box>

                        <Box sx={{ 
                            flexBasis: { xs: '100%', sm: 'calc(50% - 1.5rem)', md: 'calc(25% - 2rem)' }, 
                            textAlign: 'center' 
                        }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                mx: 'auto', 
                                mb: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}>
                                <Image src="/chat.webp" alt="" width={100} height={60}></Image>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                                24/7 Live Assistance
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                                Always available, our email and live chat support ensures any issues with invoice templates are quickly addressed. Enjoy uninterrupted business operations with our dedicated round-the-clock assistance.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
           </Box>
        </>
    )
}
