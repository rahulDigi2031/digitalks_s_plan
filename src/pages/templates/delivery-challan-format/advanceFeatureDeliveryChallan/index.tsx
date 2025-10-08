'use client'

import { Box, Container, Typography, Button } from "@mui/material"

export default function AdvanceFeatureDeliveryChallan() {
    return (
        <>
            <Box sx={{ bgcolor: "white", width: "100%", py: 6 }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" gutterBottom align="center" >
                        Advance Features Offered in Referns Delivery Challan
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Auto-Fetch Challan Number: Every new challan gets a unique, sequential number automatically. This eliminates manual errors and keeps your GST records clean.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Auto-Fetch Date: The challan date is filled in by default at the time of creation. This ensures accuracy and saves time in preparing documents.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        PAN-Auto-Fetch via GSTIN: Once you enter GSTIN, the system instantly fetches the linked PAN. This reduces manual typing and avoids mismatch.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Auto GST Type Detection: Based on the customer state, the system decides the correct tax type. It applies IGST for interstate movement and CGST/SGST for within state deliveries.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        HSN/SAC Code Support: Add standardized codes for goods and services in your challan. This ensures proper classification and GST compliance.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Place of Supply Detection: The software automatically detects and displays the place of supply. This ensures the challan reflects the right tax treatment without extra effort.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Reverse Charge Mechanism: Enable RCM with a single click when tax liability shifts to the buyer. The challan clearly shows the right GST rules without extra steps.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Reverse Fields: Manage eRC with PO number or invoice number for reference. This helps link the challan with other documents as per GST rules.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Custom Item Columns: Choose which details to show for items—like batch number, expiry date, or SKU. Hide the rest to keep the challan short and clear.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Hide/Show Fields: Turn off optional sections like discounts or totals when they are not needed. This makes the challan clean and easy to read.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Define Item Units: Use standard units like Kg, Ltr, Dozen or create custom unit labels. This keeps quantities accurate and avoids mistakes.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Item Description: Pick Images: Add clear descriptions, road, rail, air or ship. Referns helps you know for clarity, pick the right items and avoids mistakes.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Mode of Transport: Pick the way goods are moving—road, rail, air, or ship. Referns helps you know for clarity.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Distance Calculator: Record the distance between start and end points. Useful for GST e-way bills and freight planning.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Transport Document No. & Date: Add Goods invoice number, railway receipt, airway bill or bill of lading with its date. These details help track goods in transit.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Vehicle Details: Enter the vehicle number and type, like regular or over-dimensional cargo. This makes tracing easier and meets compliance needs.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Transaction Type: Select why goods are moving—regular supply, job work, or use, line sales, semi-knocked down (SKD), completely knocked down (CKD), or lot. This explains the purpose of the movement.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Shipping & Delivery Info: Add delivery address, delivery notes, timing, and contact person. Clear info reduces delivery mistakes.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Generate E-way Bill: Make an e-way bill directly from the challan without re-entering details. Saves time and prevents errors.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        One-Click Duplicate (Triplicate) Challan: Quickly create three copies—one for receiver, one for transporter, and one for records. Saves effort and avoids confusion.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                        Convert to Invoice: Once goods are accepted or sold, change the challan into an invoice with one click. No need to re-enter the same data.
                    </Typography>
                    
                    <Box sx={{ mt: 6, textAlign: "center" }}>
                        <Button 
                            variant="contained" 
                            size="large" 
                            sx={{ 
                                backgroundColor: "#E91E63", 
                                color: "white", 
                                px: 2, 
                                py: 1.2,
                                borderRadius: 2,
                                fontSize: "14px",
                                "&:hover": { backgroundColor: "#C2185B" }
                            }}
                        >
                            Create Delivery Challan
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}