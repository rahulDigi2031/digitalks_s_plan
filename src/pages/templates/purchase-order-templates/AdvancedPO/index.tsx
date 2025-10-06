'use client'

import { Box, Container, Typography, Button, List, ListItem, ListItemText } from "@mui/material"

export default function AdvancedPO(){
    return(
        <>
            <Box sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
                        Advanced Purchase Order Features in Refrens
                    </Typography>

                    {/* Auto Vendor & Item Details Fetch */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 , color:"gray"}}>
                            Auto Vendor & Item Details Fetch
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                            When you select a vendor or product, Refrens auto-fills details like GSTIN, address, item description, rate, and tax. This reduces repetitive typing, saves time, and ensures every PO stays consistent with your accounting records.
                        </Typography>
                    </Box>

                    {/* Seamless Conversion to Bills & Invoices */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 , color:"gray"}}>
                            Seamless Conversion to Bills & Invoices
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                            No more manual duplication. Once a PO is approved, it can be directly converted into a purchase bill, linked to a vendor invoice, or integrated with your accounting records.
                        </Typography>
                    </Box>

                    {/* One-Click Document Conversions */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 , color:"gray" }}>
                            One-Click Document Conversions Refrens goes beyond just POs. With a single click, you can convert a Purchase Order into:
                        </Typography>
                        <List sx={{ mt: 2 }}>
                            <ListItem>
                                <ListItemText primary="Proforma Invoice (for expense recording)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Quotation" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Sales Invoice" />
                            </ListItem>
                        </List>
                    </Box>

                    {/* One-Click PO Acceptance */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 , color:"gray" }}>
                            One-Click PO Acceptance
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                            Enable your vendors to formally accept purchase orders online. This extra layer of confirmation eliminates confusion, secures commitments, and adds transparency to your transactions.
                        </Typography>
                    </Box>

                    {/* Budget & Expense Tracking */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 , color:"gray"}}>
                            Budget & Expense Tracking
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                            Each PO can be tagged to a project, department, or budget head. Refrens automatically tracks commitments against approved budgets, giving you visibility into expenses before they’re incurred.
                        </Typography>
                    </Box>

                    {/* Linked Expenditure */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2  , color:"gray"}}>
                            Linked Expenditure
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                            Every purchase order is directly linked to its related expenses. You can see how much has been billed, how much is pending, and track payments against each PO without manual reconciliation.
                        </Typography>
                    </Box>

                    {/* Multi-GSTIN & Multi-Business Support */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 , color:"gray"}}>
                            Multi-GSTIN & Multi-Business Support
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                            For multi-GSTIN & multi-business setups, you can issue POs under the correct GSTIN and business identity from a single account. This keeps compliance simple and avoids mix-ups.
                        </Typography>
                    </Box>

                    {/* Attachments & Terms of Purchase */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 , color:"gray" }}>
                            Attachments & Terms of Purchase
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                            Easily add supporting documents like quotations, contracts, or technical specifications to POs. You can also define payment terms, delivery timelines, and warranty conditions directly within the order.
                        </Typography>
                    </Box>

                    {/* Audit Trail & Edit History */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 , color:"gray"}}>
                            Audit Trail & Edit History
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                            Every edit, approval, or cancellation is recorded with user details and timestamps. This transparent audit log ensures accountability, making your procurement audit-ready at all times.
                        </Typography>
                    </Box>

                    {/* GST & Tax-Ready POs */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 , color:"gray"}}>
                            GST & Tax-Ready POs
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                            Refrens POs are fully GST-compliant, with auto-tax application and place-of-supply fields. This makes downstream billing and vendor reconciliation seamless and compliant.
                        </Typography>
                    </Box>

                    <Button variant="contained" sx={{ display: 'block', mx: 'auto', backgroundColor: '#E2007B', color: 'white', px: 4, py: 1.5 }}>
                        Generate Purchase Order
                    </Button>
                </Container>
            </Box>
        </>
    )
}