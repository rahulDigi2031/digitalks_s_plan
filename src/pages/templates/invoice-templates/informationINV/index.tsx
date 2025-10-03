'use client'

import { Box, Typography, List, ListItem, ListItemText, Button } from "@mui/material"

export default function InformationInvoice(){
    return(
        <>
            <Box sx={{ bgcolor: 'white', p: 4, maxWidth: 1200, mx: 'auto' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#333' }}>
                    How to Make an Invoice Using Invoice Template?
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: '#666', lineHeight: 1.6 }}>
                    Using the Refers platform is easy to create invoices instantly. When creating an invoice you must add these crucial elements, without these elements no invoice can be completed. Following are the simple and easiest way to create an invoice using the free invoice template.
                </Typography>

                {/* Step 1 */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                        Step 1: Add Information
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#666', lineHeight: 1.6 }}>
                        Invoice Header: Add the word "INVOICE" at the top of the invoice as invoice title. In the header section where you add the invoice number, invoice date, and due date. In addition, "INVOICE" at the top of other reference numbers like the PO number, quote number. In this section, you also get the option of adding the business logo which is a good way to promote your brand.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#666', lineHeight: 1.6 }}>
                        If you are a freelancer, you can use your name in this section, you add all the information about your business or freelancer. Moreover, about your business email, mobile number, address, city.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#666', lineHeight: 1.6 }}>
                        Billed To Section: Same as bill by section, you need to add the information about the buyer or client who is buying or paying for the products or services from you.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#666', lineHeight: 1.6 }}>
                        Shipping Details: This section is only useful for those who sell tangible products. You need to add shipping details like address, city, state, Pincode, channel number, date, and transaction. If you are offering any service or digital products, you can avoid this shipping.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#666', lineHeight: 1.6 }}>
                        Item Section: Here you add the product or service name, description, images, quantity, rate, discount, and GST. You can also add custom columns to add more information.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#666', lineHeight: 1.6 }}>
                        Terms & Conditions: You need to add terms and conditions of invoice and payments.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#666', lineHeight: 1.6 }}>
                        Bottom Section: At the bottom of the invoice, you can add notes, attachments, and signatures as well.
                    </Typography>
                </Box>

                <Typography variant="body1" sx={{ mb: 4, color: '#4CAF50', fontWeight: 500 }}>
                    Congrats your invoice is created. The next step helps you get paid faster.
                </Typography>

                {/* Step 2 */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                        Step 2: Add Bank Details
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#666', lineHeight: 1.6 }}>
                        Add your bank details like bank name, bank account number, IFSC Code, account type, account holder name. You can also add more details by adding custom fields.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#666', lineHeight: 1.6 }}>
                        Next, enable online payment options like debit/credit card, net banking, wallets, etc. Refers has the most competitive rates when it comes to accepting international payments. We charge around 4.9% + GST (Total is 5.78%).
                    </Typography>
                </Box>

                {/* Step 3 */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                        Step 3: Customize Invoice Using Invoice Templates
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6 }}>
                        You can easily customize invoice using invoice templates as per your business requirements and change the color of the invoice template. You can choose the best invoice color templates that fits your business. By choosing the best Magic colors that helps you select the best color from your business logo. In addition, you can change the fonts of the invoice header and the best part is all features are completely free. FREE INVOICE TEMPLATE WITH NO COST. you can also customize invoice templates with logo and signature.
                    </Typography>
                </Box>

                {/* Features */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
                        Features of Free Invoice Templates
                    </Typography>
                    <List sx={{ color: '#666' }}>
                        <ListItem>
                            <ListItemText primary="1. Customizable Invoice: Add and edit multiple fields and columns such as address, contact information, product description." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="2. Logo and Signature Template: Select an invoice template that suits your business nature and stands out from your competitors. Customize your invoice format by adding a logo and signature." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="3. Magic Color: Choose the most suitable color from your logo and make the invoice look professional. Multiple fonts are supported." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="4. Special Purpose Templates: Invoice templates like professional invoice template, letterhead format, business invoice format, print-friendly templates. All for free." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="5. Manage and Send Invoices: Manage all your invoices in one place. Download as PDF, Print, Email, or share via WhatsApp." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="6. Easy Access Anywhere: Easy to use dashboard for mobile and desktop. Get email alerts in real-time." />
                        </ListItem>
                    </List>
                </Box>

                {/* Button */}
                <Box sx={{ textAlign: 'center' }}>
                    <Button variant="contained" sx={{ bgcolor: '#E91E63', color: 'white', px: 4, py: 1.5, fontSize: '1rem', fontWeight: 600 }}>
                        Create Invoice for Free
                    </Button>
                </Box>
            </Box>
        </>
    )
}