import { Box, Container, Typography, Button } from "@mui/material"
import Image from "next/image"

export default function POFeature(){
    return(
        <>
        <Box sx={{bgcolor:"#161C26" , width:"100%" , height:{md:"680px" , xs:"100%"}}}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
             <Box sx={{ 
                 borderRadius: 2, 
                 p: 4, 
                 textAlign: 'center' 
             }}>
                 <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 4 , fontSize:{xs:"26px"} }}>
                     Features of Purchase Order Format
                 </Typography>
                 
                 <Box sx={{ 
                     display: 'flex', 
                     flexWrap: 'wrap', 
                     justifyContent: 'center', 
                     gap: 4 
                 }}> 
                     {/* Row 1 */} 
                     <Box sx={{ 
                         flexBasis: { xs: '100%', sm: 'calc(50% - 1.8rem)', md: 'calc(25% - 2rem)' }, 
                         textAlign: 'center' 
                     }}> 
                         <Box sx={{ 
                             width: 60, 
                             height: 80, 
                             mx: 'auto', 
                             mb: 2, 
                             display: 'flex', 
                             alignItems: 'center', 
                             justifyContent: 'center' 
                         }}>
                             <Image src="/Purchase.svg" alt="" width={100} height={60}></Image>
                         </Box>
                         <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                         Manage Purchase Order
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Create, manage, and track purchase orders with user-friendly interface and PO templates. Streamline your procurement process hassle-free.
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
                             <Image src="/ptemplate.svg" alt="" width={100} height={60}></Image>
                         </Box>
                         <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                             Purchase Order Templates
                         </Typography> 
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}> 
                             Enhance your brand identity with professional purchase order templates. Add your company logo and customize colors with your brand’s aesthetic.
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
                             <Image src="/pemail.svg" alt="" width={100} height={60}></Image>
                         </Box>
                         <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                             Email, Share, and Print
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Send purchase orders via email, share them with stakeholders, or print them directly from our online purchase order format. Seamless communication made simple.
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
                             Customization
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Customize purchase orders easily by adding or hiding specific columns and fields. Tailor each purchase order to your unique requirements, ensuring precision in your records.
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
                             <Image src="/precord.svg" alt="" width={100} height={60}></Image>
                         </Box>
                         <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                             Record-Keeping
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Centralize your purchase orders in one place. Keep detailed customer information organized with our online purchase order template, simplifying record-keeping and client management.
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
                             Expense Conversion
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Convert purchase orders to expenses with single click. No need to create POs from scratch for accurate financial records without extra effort.
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
                             <Image src="/online.webp" alt="" width={100} height={60}></Image>
                         </Box>
                         <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                             Secure and Accessible
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Access online purchase orders securely from both mobile and desktop devices. Receive real-time email alerts for updates. Our SSL secured network guarantees your data’s safety.
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
                             Live Support
                         </Typography>
                         <Typography variant="body1" sx={{ color: 'white', mt:1, fontSize: '0.8rem', textAlign: 'center' }}>
                             Count on our dedicated support team, available via email and live chat. We’re here to assist you every step of the way, ensuring your experience is seamless and stress-free.
                         </Typography>
                     </Box>
                 </Box>

                 <Button variant="contained" sx={{ mt:6, backgroundColor: '#7C3DDA', color: 'white' }}>
                     Create Purchase Order
                 </Button>
             </Box>
         </Container>
        </Box>
     </>
    )
}