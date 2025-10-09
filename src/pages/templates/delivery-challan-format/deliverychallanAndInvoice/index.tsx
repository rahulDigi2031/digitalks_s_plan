'use client'

import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material"

export default function DiffChallanVSinvoice() {
    return (
        <>
            <Box sx={{ maxWidth: 1100, mx: "auto", mt: 3, mb: 3, p: 2 }}>
                <Typography variant="h4" fontWeight={500} align="center" mb={3}>
                    Difference Between Delivery Challan and Invoice
                </Typography>
                <TableContainer component={Paper} sx={{ borderRadius: 2, background: "#faf8ff" }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ background: "linear-gradient(90deg,#b095f6,#b094ee)" }}>
                                <TableCell sx={{ fontWeight: 700, color: "#390a64", fontSize: 18 }}>Basis</TableCell>
                                <TableCell sx={{ fontWeight: 700, color: "#390a64", fontSize: 18 }}>Delivery Challan</TableCell>
                                <TableCell sx={{ fontWeight: 700, color: "#390a64", fontSize: 18 }}>Invoice</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Main Use</TableCell>
                                <TableCell>Used mainly to record transport and inventory movement of goods.</TableCell>
                                <TableCell>Used as a tax document to record sales and claim/set-off GST.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Purpose</TableCell>
                                <TableCell>Proof that goods have been dispatched, even if not sold yet.</TableCell>
                                <TableCell>Proof that a sale has happened and payment is due.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Tax Details</TableCell>
                                <TableCell>Usually no GST/tax shown. Issued only for movement purposes.</TableCell>
                                <TableCell>Must show GST/VAT details, HSN/SAC codes, taxable value, and total.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Value</TableCell>
                                <TableCell>Amount is optional – may be provisional or even left blank.</TableCell>
                                <TableCell>Full value of goods/services with unit price, discounts, and taxes is compulsory.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>When Issued</TableCell>
                                <TableCell>When goods are moved without raising an invoice – job work, stock transfer, approval, samples, exhibition, or returnable goods.</TableCell>
                                <TableCell>At the time of sale, when ownership is transferred to the buyer.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display="flex" justifyContent="center" mt={4}>
                    <Button 
                        variant="contained" 
                        sx={{
                            background: "#6E3BCF",
                            fontWeight: 700,
                            mt: 1,
                            borderRadius: 2,
                            fontSize: 16,
                            textTransform: "none",
                            px: 4,
                            py: 1.5,
                            "&:hover": {
                                background: "#E2007B"
                            }
                        }}
                    >
                        Create Delivery Challan
                    </Button>
                </Box>
            </Box>
        </>
    )
}
