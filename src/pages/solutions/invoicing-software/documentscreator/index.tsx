import { Typography, Box, Container, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function DocumentsCreator() {
    const router = useRouter();
    return (
        <>
        <Box sx={{ bgcolor: "#F8F9FA", py: 4 }}>
            <Container maxWidth="xl">
                <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                    Documents you can create using invoicing software
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Create Invoice
                </Typography>

                <Typography variant="body1" paragraph>
                    Invoices are one of the most important aspects of your business growth. Creating software business helps your regular customers, who pay on time
                </Typography>

                <Typography variant="body1" paragraph>
                    and select the invoice. PDF ensures due necessity and business. To simplify the invoice, download the invoice, and print
                </Typography>

                <Typography variant="body1" paragraph>
                    and enable free invoicing software, manage track downloads or cancel invoices without hassle. This is downloaded templates, and
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Easy-to-use proforma invoice status Refrens invoice generator
                </Typography>

                <Typography variant="body1" paragraph>
                    A proforma invoice is a document sent to the buyer showing the commitment to deliver the product or service at an estimated price. Many vendors accept advance
                </Typography>

                <Typography variant="body1" paragraph>
                    payment from clients by the proforma invoice as a confirmation document for the client. Well, once the client gives
                </Typography>

                <Typography variant="body1" paragraph>
                    Refrens proforma invoice with other to convert proforma invoice. You can use Refrens proforma to create invoice from scratch. Here, the proforma invoice and
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Create Quotation
                </Typography>

                <Typography variant="body1" paragraph>
                    Quotation is the first document in the business you send to your potential customer, and you know first impression is the last. So creating an attractive and
                </Typography>

                <Typography variant="body1" paragraph>
                    convert quotation necessary and send them to the client instantly. Once approved, you easily change the quotation status to Won, Lost, Rejected. This way
                </Typography>

                <Typography variant="body1" paragraph>
                    makes it easy to use quotation format for service pricing or need discounts. Direct manage your quotations from leads section using free quotation
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Create Purchase Order
                </Typography>

                <Typography variant="body1" paragraph>
                    Create Purchase Order is one of the best ways to maintain inventory. However, it shortens the cycle of an organization. Using Refrens purchase
                </Typography>

                <Typography variant="body1" paragraph>
                    order generator, create and manage you want to purchase and send it to the vendor. Once you receive the order, easily add it to stock and help manage the
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Create Sales PO
                </Typography>

                <Typography variant="body1" paragraph>
                    Upon receiving a Sales Order. The business checks the inventory and assures availability, the invoice is then picked based on the Sales Order. Customer per
                </Typography>

                <Typography variant="body1" paragraph>
                    Record Expenses
                </Typography>

                <Typography variant="body1" paragraph>
                    Business, this saves that needs to be delivered. The file, depending on offer, etc., monthly expenses.
                </Typography>

                <Typography variant="body1" paragraph>
                    Using Refrens free invoicing software, you manage your expenses to track monthly and you can manage vendor reports
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Create Delivery Challan
                </Typography>

                <Typography variant="body1" paragraph>
                    A delivery challan is a document created when transporting or moving goods from one place to another with the shipped goods. With Refrens online invoicing software,
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Create Credit Note
                </Typography>

                <Typography variant="body1" paragraph>
                    Credit Notes are more like the invoices for the business, but these are when the customer returns the goods or services for some reason. Like damaged
                </Typography>

                <Typography variant="body1" paragraph>
                    products, good practice, or other reasons. Here comes the use of credit notes, which help manage the amount if you create a credit note, creating a
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Create Debit Note
                </Typography>

                <Typography variant="body1" paragraph>
                    A debit note is essential for the business when purchasing goods or services. There are possibilities that your purchased goods are damaged or
                </Typography>

                <Typography variant="body1" paragraph>
                    overcharged by your vendor. In this situation, you can easily create a debit note against the invoice and send it to your vendor. Both debit and credit notes
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Inventory Management
                </Typography>

                <Typography variant="body1" paragraph>
                    The best way to maintain your stock is to use inventory management software. It stores, maintains, and uses the company's stock. Refrens invoicing
                </Typography>

                <Typography variant="body1" paragraph>
                    software provides inventory management. Check Refrens online accounting app where all accounting activities in one—no need to register additional
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Create Payment Receipts
                </Typography>

                <Typography variant="body1" paragraph>
                    When payment receipts, you probably sell the products or services to your client. But along with the product, you send a payment receipt to your customer as proof of
                </Typography>

                <Typography variant="body1" paragraph>
                    document. Payment receipts can be sent for partial or full payment of the invoice. This document is useful to both the seller and buyer as both have the same
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Manage Your Clients
                </Typography>

                <Typography variant="body1" paragraph>
                    Manage your clients under client management. Add multiple custom fields as much data you want. Upload bulk data, and you can export the
                </Typography>

                <Typography variant="body1" fontWeight="bold" paragraph>
                    Manage Leads
                </Typography>

                <Typography variant="body1" paragraph>
                    Whenever you get any leads or add the lead track status, you directly create the quotation from the leads. No need for quotation again from scratch. To know
                </Typography>

                <Typography variant="body1" paragraph>
                    more about Lead Management, you check Refrens Lead Quotation Software
                </Typography>

                <Button variant="contained" onClick={() => router.push("/contact")} sx={{ mt: 2, bgcolor: "#E2007B", color: "white", display: "block", margin: "auto", mb: 4 }}>
              Get Started - It's FREE
            </Button>
            </Container>
        </Box>
        </>
    )
}