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


export default function QuotationKeyFeature(){
    return(
        <>
        <Box sx={{bgcolor:"#161C26" , width:"100%" , height:{md:"1250px" , xs:"100%"}}}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
             <Box sx={{ 
                 borderRadius: 2, 
                 p: 4, 
                 textAlign: 'center' 
             }}>
                 <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 4 }}>
                     Features of Quotation Format
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
                         Customized Templates
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Easily customize templates with a single click. No need to enter details again and again.
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
                             Quotation to Invoice
                         </Typography> 
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}> 
                             Convert your quotations to invoices with one click. There is no need to search and create a new one from scratch.
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
                             Track Your Quotations
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Send your quotations and easily track whether your client has opened them. You can keep a track of your quotations.
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
                             Schedule Your Emails
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Schedule your emails so that they reach future clients at the right time. This feature allows you to communicate with your clients effortlessly.
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
                             Countries Supported
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Quotation templates supported in over 150 countries and currencies. You can cater to clients globally with ease.
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
                             Uptime Support
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Get upfront support from our experienced support team. We are here to answer your questions and assist you with any issues.
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
                             Logo Customization
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Our quotation templates allow you to add your business logo effortlessly. This creates a professional and branded look.
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
                             Custom Columns
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Tailor your quotations by adding custom columns to meet specific needs. Our quotation templates provide flexibility, enabling you to include all the details in your documents.
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
                             Hide Irrelevant Columns
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Hide irrelevant columns by any feature that your quotation doesn't require. This ensures your clients focus on the essential information.
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
                             Color Customization
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Change the color scheme of your quotations to match your brand. This feature allows you to adjust colors, ensuring your documents are visually consistent.
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
                             Letterhead
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Include a letterhead at the top of your quotations for a more formal touch. This feature enhances your quotation format, making your work stand out.
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
                             Quotation Creation
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Effortlessly create professional quotations with simple and user-friendly tools. The intuitive interface of our quotation format makes the process quick and easy.
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
                             Quotation Management
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Keep all your quotations organized in one place for easy access and management. Your platform allows you to manage your quotation format when needed.
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
                             Customization Options
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Tailor your quotations with a variety of customization options. Add logos, customize columns, colors, and more to match your quotation template.
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
                             Download and Print
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Easily download and print your quotations directly from the platform. This feature ensures copies of your quotations are readily available when needed.
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
                             Email Integration
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Send quotations directly to clients. This feature simplifies the delivery process, allowing you to communicate properly and professionally.
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
                             Client Management
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Effectively manage client information and history within the platform. This feature helps you keep track of all client interactions and provide personalized services.
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
                             Sales CRM Integration
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Enhance customer relationship management by integrating with sales processes more effectively.
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
                             Expense Reports
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Generate and manage expense reports for your business operations. With this feature, you can maintain accurate financial records.
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
                             Mobile App
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Use the Refers mobile app to create, manage, track quotations, and run your business operations from anywhere.
                         </Typography>
                     </Box>
                 </Box>
             </Box>
         </Container>
        </Box>
     </>
    )
}