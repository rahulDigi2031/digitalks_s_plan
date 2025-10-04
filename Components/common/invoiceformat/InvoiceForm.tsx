// 'use client'

// import { AppBar, Box, Container, Dialog, DialogContent, DialogTitle, Divider, Drawer, List, ListItemButton, Stack, Toolbar, Typography, TextField, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Tabs, Tab, IconButton, InputAdornment, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Paper } from "@mui/material"
// import { motion } from "framer-motion";
// import { Button as MuiButton } from "@mui/material";
// import { IconButton as MuiIconButton } from "@mui/material";
// import { Menu as MenuIcon, Close as CloseIcon, Add as AddIcon, AttachFile as AttachIcon, Note as NoteIcon, Description as DescriptionIcon, ContentCopy, Visibility, Phone, Image as ImageIcon, Business as BusinessIcon } from "@mui/icons-material";
// import { Avatar } from "@mui/material";
// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import Image from "next/image";

// export default function QuotationTemplates() {
//     const [productsOpen, setProductsOpen] = React.useState(false);
//     const [accountOpen, setAccountOpen] = React.useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
//     const [open, setOpen] = React.useState(false);
//     const [currentTab, setCurrentTab] = useState(0);
//     const [showNotes, setShowNotes] = useState(false);
//     const [showInWords, setShowInWords] = useState(false);
//     const router = useRouter()

//     const toSlug = (label: string) =>
//         label
//             .toLowerCase()
//             .replace(/[^a-z0-9]+/g, "-")
//             .replace(/(^-|-$)/g, "")
//             .replace(/-+/g, "-");

//     const [quotationNumber, setQuotationNumber] = useState('QUO-001');
//     const [quotationDate, setQuotationDate] = useState('04/10/2025');
//     const [subject, setSubject] = useState('');
//     const [dueDate, setDueDate] = useState('04/10/2025');

//     // From details
//     const [fromCompanyName, setFromCompanyName] = useState('');
//     const [fromGst, setFromGst] = useState('');
//     const [fromAddress, setFromAddress] = useState('');
//     const [fromCity, setFromCity] = useState('');
//     const [fromPin, setFromPin] = useState('');
//     const [fromState, setFromState] = useState('India');
//     const [fromPan, setFromPan] = useState('');

//     // Client details
//     const [clientCompanyName, setClientCompanyName] = useState('');
//     const [clientGst, setClientGst] = useState('');
//     const [clientAddress, setClientAddress] = useState('');
//     const [clientCity, setClientCity] = useState('');
//     const [clientPin, setClientPin] = useState('');
//     const [clientState, setClientState] = useState('India');
//     const [clientPan, setClientPan] = useState('');

//     // Shipping
//     const [shippingAddress, setShippingAddress] = useState('');
//     const [currency, setCurrency] = useState('INR');

//     // Products
//     const [products, setProducts] = useState([{ id: 1, description: 'Item Description', quantity: 1, rate: 1.00, amount: 1.00 }]);

//     // Totals
//     const [subtotal, setSubtotal] = useState(1.00);
//     const [discount, setDiscount] = useState(0);
//     const [additionalCharges, setAdditionalCharges] = useState(0);
//     const [total, setTotal] = useState(1.00);

//     // Notes
//     const [terms, setTerms] = useState('');
//     const [notes, setNotes] = useState('');

//     const handleAddProduct = () => {
//         const newId = products.length + 1;
//         setProducts([...products, { id: newId, description: '', quantity: 1, rate: 0, amount: 0 }]);
//     };

//     const handleProductChange = (index, field, value) => {
//         const updated = [...products];
//         updated[index] = { ...updated[index], [field]: value };
//         if (field === 'quantity' || field === 'rate') {
//             updated[index].amount = (parseFloat(updated[index].quantity) || 0) * (parseFloat(updated[index].rate) || 0);
//         }
//         setProducts(updated);
//         const newSubtotal = updated.reduce((sum, p) => sum + (p.amount || 0), 0);
//         setSubtotal(newSubtotal);
//         setTotal(newSubtotal + additionalCharges - discount);
//     };

//     const removeProduct = (index) => {
//         const updated = products.filter((_, i) => i !== index);
//         setProducts(updated);
//         const newSubtotal = updated.reduce((sum, p) => sum + (p.amount || 0), 0);
//         setSubtotal(newSubtotal);
//         setTotal(newSubtotal + additionalCharges - discount);
//     };

//     return (
//         <>
//             <Box>

//                 <main>
//                     {/* content section */}
//                    <Container maxWidth="lg">
                   

//                     {/* Quotation Form */}
//                     <Paper elevation={0} sx={{ mt: 4, p: 3, borderRadius: 2, bgcolor: '#fafafa' }}>
//                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap' }}>
//                             <Tabs value={currentTab} onChange={(e, newValue) => setCurrentTab(newValue)} sx={{ '& .MuiTabs-indicator': { bgcolor: '#7C3DDA' } }}>
//                                 <Tab label="Quotation Details" sx={{ textTransform: 'none', minWidth: 'auto', px: 2, ...(currentTab === 0 && { bgcolor: '#7C3DDA', color: 'white', borderRadius: 1 }) }} />
//                                 <Tab label="Design & Optional" sx={{ textTransform: 'none', minWidth: 'auto', px: 2, ...(currentTab === 1 && { bgcolor: '#7C3DDA', color: 'white', borderRadius: 1 }) }} />
//                             </Tabs>
//                             <Box sx={{ display: 'flex', gap: 1 }}>
//                                 <Button variant="outlined" size="small" sx={{ borderColor: '#7C3DDA', color: '#7C3DDA' }}>Add Logo</Button>
//                                 <Button variant="contained" size="small" sx={{ bgcolor: '#7C3DDA', '&:hover': { bgcolor: '#6B46C1' } }}>Add Business Logo</Button>
//                             </Box>
//                         </Box>

//                         {currentTab === 0 && (
//                             <Grid container spacing={3}>
//                                 {/* Quotation Header */}
//                                 <Grid item xs={12}>
//                                     <Paper sx={{ bgcolor: '#7C3DDA', color: 'white', p: 2, borderRadius: 1 }}>
//                                         <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>Quotation #</Typography>
//                                         <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
//                                             <TextField
//                                                 value={quotationNumber}
//                                                 onChange={(e) => setQuotationNumber(e.target.value)}
//                                                 size="small"
//                                                 sx={{ width: 120, '& .MuiInputBase-root': { bgcolor: 'white' }, '& .MuiInputBase-root .MuiInputBase-input': { color: 'black' } }}
//                                             />
//                                             <TextField
//                                                 label="Date"
//                                                 value={quotationDate}
//                                                 onChange={(e) => setQuotationDate(e.target.value)}
//                                                 size="small"
//                                                 sx={{ width: 120, '& .MuiInputBase-root': { bgcolor: 'white' }, '& .MuiInputBase-root .MuiInputBase-input': { color: 'black' } }}
//                                             />
//                                             <TextField
//                                                 label="Subject *"
//                                                 value={subject}
//                                                 onChange={(e) => setSubject(e.target.value)}
//                                                 size="small"
//                                                 sx={{ flex: 1, minWidth: 200, '& .MuiInputBase-root': { bgcolor: 'white' }, '& .MuiInputBase-root .MuiInputBase-input': { color: 'black' } }}
//                                             />
//                                         </Box>
//                                         <TextField
//                                             label="Due Date"
//                                             value={dueDate}
//                                             onChange={(e) => setDueDate(e.target.value)}
//                                             fullWidth
//                                             size="small"
//                                             sx={{ mt: 2, '& .MuiInputBase-root': { bgcolor: 'white' }, '& .MuiInputBase-root .MuiInputBase-input': { color: 'black' } }}
//                                         />
//                                         <Button variant="text" size="small" sx={{ mt: 1, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }} startIcon={<AddIcon />}>Add Fields</Button>
//                                     </Paper>
//                                 </Grid>

//                                 {/* From and Client Details */}
//                                 <Grid item xs={12} md={6}>
//                                     <Paper sx={{ p: 2, borderRadius: 1 }}>
//                                         <Typography variant="h6" sx={{ color: '#7C3DDA', mb: 2, fontWeight: 600 }}>From</Typography>
//                                         <TextField fullWidth label="Business Name (required)" value={fromCompanyName} onChange={(e) => setFromCompanyName(e.target.value)} size="small" sx={{ mb: 1.5 }} />
//                                         <TextField fullWidth label="Your GSTIN (optional)" value={fromGst} onChange={(e) => setFromGst(e.target.value)} size="small" sx={{ mb: 1.5 }} />
//                                         <TextField fullWidth label="Address (optional)" value={fromAddress} onChange={(e) => setFromAddress(e.target.value)} size="small" sx={{ mb: 1 }} />
//                                         <Grid container spacing={2} sx={{ mb: 1.5 }}>
//                                             <Grid item xs={6}>
//                                                 <TextField fullWidth label="City (optional)" value={fromCity} onChange={(e) => setFromCity(e.target.value)} size="small" />
//                                             </Grid>
//                                             <Grid item xs={6}>
//                                                 <TextField fullWidth label="Post Code / ZIP" value={fromPin} onChange={(e) => setFromPin(e.target.value)} size="small" />
//                                             </Grid>
//                                         </Grid>
//                                         <Grid container spacing={2} sx={{ mb: 1.5 }}>
//                                             <Grid item xs={6}>
//                                                 <FormControl fullWidth size="small">
//                                                     <InputLabel>State (options)</InputLabel>
//                                                     <Select value={fromState} label="State (options)" onChange={(e) => setFromState(e.target.value)}>
//                                                         <MenuItem value="India">India</MenuItem>
//                                                     </Select>
//                                                 </FormControl>
//                                             </Grid>
//                                             <Grid item xs={6}>
//                                                 <TextField fullWidth label="PAN (optional)" value={fromPan} onChange={(e) => setFromPan(e.target.value)} size="small" />
//                                             </Grid>
//                                         </Grid>
//                                         <Button variant="outlined" size="small" startIcon={<AddIcon />} sx={{ color: '#7C3DDA', borderColor: '#7C3DDA' }}>Add Field</Button>
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <Paper sx={{ p: 2, borderRadius: 1 }}>
//                                         <Typography variant="h6" sx={{ color: '#7C3DDA', mb: 2, fontWeight: 600 }}>To</Typography>
//                                         <TextField fullWidth label="Client's Business Name (required)" value={clientCompanyName} onChange={(e) => setClientCompanyName(e.target.value)} size="small" sx={{ mb: 1.5 }} />
//                                         <TextField fullWidth label="Client's GSTIN (optional)" value={clientGst} onChange={(e) => setClientGst(e.target.value)} size="small" sx={{ mb: 1.5 }} />
//                                         <TextField fullWidth label="Address (optional)" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} size="small" sx={{ mb: 1 }} />
//                                         <Grid container spacing={2} sx={{ mb: 1.5 }}>
//                                             <Grid item xs={6}>
//                                                 <TextField fullWidth label="City (optional)" value={clientCity} onChange={(e) => setClientCity(e.target.value)} size="small" />
//                                             </Grid>
//                                             <Grid item xs={6}>
//                                                 <TextField fullWidth label="Post Code / ZIP" value={clientPin} onChange={(e) => setClientPin(e.target.value)} size="small" />
//                                             </Grid>
//                                         </Grid>
//                                         <Grid container spacing={2} sx={{ mb: 1.5 }}>
//                                             <Grid item xs={6}>
//                                                 <FormControl fullWidth size="small">
//                                                     <InputLabel>State (options)</InputLabel>
//                                                     <Select value={clientState} label="State (options)" onChange={(e) => setClientState(e.target.value)}>
//                                                         <MenuItem value="India">India</MenuItem>
//                                                     </Select>
//                                                 </FormControl>
//                                             </Grid>
//                                             <Grid item xs={6}>
//                                                 <TextField fullWidth label="PAN (optional)" value={clientPan} onChange={(e) => setClientPan(e.target.value)} size="small" />
//                                             </Grid>
//                                         </Grid>
//                                         <Button variant="outlined" size="small" startIcon={<AddIcon />} sx={{ color: '#7C3DDA', borderColor: '#7C3DDA' }}>Add Field</Button>
//                                     </Paper>
//                                 </Grid>

//                                 {/* Shipping Details */}
//                                 <Grid item xs={12}>
//                                     <Paper sx={{ p: 2, borderRadius: 1 }}>
//                                         <Typography variant="h6" sx={{ color: '#7C3DDA', mb: 2, fontWeight: 600 }}>Shipping Details</Typography>
//                                         <TextField fullWidth label="Shipping Address" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} size="small" sx={{ mb: 2 }} />
//                                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
//                                             <FormControlLabel control={<Checkbox />} label="Enable GST" />
//                                             <FormControl size="small" sx={{ minWidth: 100 }}>
//                                                 <InputLabel>Currency</InputLabel>
//                                                 <Select value={currency} label="Currency" onChange={(e) => setCurrency(e.target.value)}>
//                                                     <MenuItem value="INR">₹ INR</MenuItem>
//                                                 </Select>
//                                             </FormControl>
//                                             <Button variant="outlined" size="small" sx={{ borderColor: '#7C3DDA', color: '#7C3DDA' }}>Edit Column Format</Button>
//                                         </Box>
//                                     </Paper>
//                                 </Grid>

//                                 {/* Products Table */}
//                                 <Grid item xs={12}>
//                                     <Paper sx={{ p: 2, borderRadius: 1 }}>
//                                         <Typography variant="h6" sx={{ color: '#7C3DDA', mb: 2, fontWeight: 600 }}>Products</Typography>
//                                         <TableContainer sx={{ border: '1px solid #e0e0e0', borderRadius: 1, overflow: 'hidden' }}>
//                                             <Table>
//                                                 <TableHead sx={{ bgcolor: '#7C3DDA' }}>
//                                                     <TableRow>
//                                                         <TableCell sx={{ color: 'white', fontWeight: 600 }}>Item Description</TableCell>
//                                                         <TableCell align="center" sx={{ color: 'white', width: 80, fontWeight: 600 }}>Image</TableCell>
//                                                         <TableCell align="center" sx={{ color: 'white', fontWeight: 600 }}>Quantity</TableCell>
//                                                         <TableCell align="center" sx={{ color: 'white', fontWeight: 600 }}>Rate</TableCell>
//                                                         <TableCell align="center" sx={{ color: 'white', fontWeight: 600 }}>Amount</TableCell>
//                                                         <TableCell align="center" sx={{ color: 'white', width: 60, fontWeight: 600 }}>Duplicate</TableCell>
//                                                     </TableRow>
//                                                 </TableHead>
//                                                 <TableBody>
//                                                     {products.map((product, index) => (
//                                                         <TableRow key={product.id}>
//                                                             <TableCell>
//                                                                 <TextField
//                                                                     fullWidth
//                                                                     size="small"
//                                                                     value={product.description}
//                                                                     onChange={(e) => handleProductChange(index, 'description', e.target.value)}
//                                                                 />
//                                                             </TableCell>
//                                                             <TableCell align="center">
//                                                                 <IconButton size="small" color="primary">
//                                                                     <AddIcon fontSize="small" />
//                                                                 </IconButton>
//                                                             </TableCell>
//                                                             <TableCell align="center">
//                                                                 <TextField
//                                                                     type="number"
//                                                                     size="small"
//                                                                     value={product.quantity}
//                                                                     onChange={(e) => handleProductChange(index, 'quantity', parseFloat(e.target.value) || 0)}
//                                                                     sx={{ width: 80 }}
//                                                                 />
//                                                             </TableCell>
//                                                             <TableCell align="center">
//                                                                 <TextField
//                                                                     type="number"
//                                                                     size="small"
//                                                                     value={product.rate}
//                                                                     onChange={(e) => handleProductChange(index, 'rate', parseFloat(e.target.value) || 0)}
//                                                                     sx={{ width: 80 }}
//                                                                     InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment> }}
//                                                                 />
//                                                             </TableCell>
//                                                             <TableCell align="center">₹{product.amount.toFixed(2)}</TableCell>
//                                                             <TableCell align="center">
//                                                                 <IconButton size="small" color="primary" onClick={() => removeProduct(index)}>
//                                                                     <CloseIcon fontSize="small" />
//                                                                 </IconButton>
//                                                             </TableCell>
//                                                         </TableRow>
//                                                     ))}
//                                                 </TableBody>
//                                             </Table>
//                                         </TableContainer>
//                                         <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//                                             <Button variant="text" startIcon={<AddIcon />} onClick={handleAddProduct} sx={{ color: '#7C3DDA' }}>Add New</Button>
//                                             <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
//                                                 <Button variant="text" sx={{ color: '#7C3DDA' }}>Add Link</Button>
//                                                 <TextField
//                                                     label="Discount"
//                                                     type="number"
//                                                     size="small"
//                                                     value={discount}
//                                                     onChange={(e) => {
//                                                         const val = parseFloat(e.target.value) || 0;
//                                                         setDiscount(val);
//                                                         setTotal(subtotal + additionalCharges - val);
//                                                     }}
//                                                     sx={{ width: 100 }}
//                                                     InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment> }}
//                                                 />
//                                                 <TextField
//                                                     label="Additional Charges"
//                                                     type="number"
//                                                     size="small"
//                                                     value={additionalCharges}
//                                                     onChange={(e) => {
//                                                         const val = parseFloat(e.target.value) || 0;
//                                                         setAdditionalCharges(val);
//                                                         setTotal(subtotal + val - discount);
//                                                     }}
//                                                     sx={{ width: 140 }}
//                                                     InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment> }}
//                                                 />
//                                             </Box>
//                                         </Box>
//                                     </Paper>
//                                 </Grid>

//                                 {/* Totals */}
//                                 <Grid item xs={12}>
//                                     <Paper sx={{ bgcolor: '#7C3DDA', color: 'white', p: 2, borderRadius: 1 }}>
//                                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                             <Typography>Subtotal (INR)</Typography>
//                                             <Typography>₹{subtotal.toFixed(2)}</Typography>
//                                         </Box>
//                                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
//                                             <Typography variant="h6" fontWeight={600}>Total (INR)</Typography>
//                                             <Typography variant="h5" fontWeight={600}>₹{total.toFixed(2)}</Typography>
//                                         </Box>
//                                         <FormControlLabel
//                                             control={<Checkbox checked={showInWords} onChange={(e) => setShowInWords(e.target.checked)} sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
//                                             label="Show in words"
//                                             sx={{ mt: 1, justifyContent: 'flex-start' }}
//                                         />
//                                     </Paper>
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <FormControlLabel
//                                         control={<Checkbox checked={showNotes} onChange={(e) => setShowNotes(e.target.checked)} />}
//                                         label="Show Notes"
//                                     />
//                                 </Grid>

//                                 {/* Terms & Notes */}
//                                 <Grid item xs={12} md={6}>
//                                     <Paper sx={{ p: 2, borderRadius: 1 }}>
//                                         <TextField
//                                             fullWidth
//                                             multiline
//                                             rows={4}
//                                             label="Terms & Conditions"
//                                             value={terms}
//                                             onChange={(e) => setTerms(e.target.value)}
//                                             sx={{ mb: 2 }}
//                                         />
//                                         <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
//                                             <Button variant="outlined" size="small" startIcon={<AddIcon />} sx={{ borderColor: '#7C3DDA', color: '#7C3DDA' }}>Add Fields</Button>
//                                             <Button variant="text" size="small" startIcon={<Phone fontSize="small" />} sx={{ color: '#7C3DDA' }}>Contact Details</Button>
//                                         </Box>
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <Paper sx={{ p: 2, borderRadius: 1 }}>
//                                         <TextField
//                                             fullWidth
//                                             multiline
//                                             rows={4}
//                                             label="Notes"
//                                             value={notes}
//                                             onChange={(e) => setNotes(e.target.value)}
//                                             sx={{ mb: 2 }}
//                                         />
//                                         <Paper elevation={1} sx={{ p: 2, textAlign: 'center', mb: 2, borderRadius: 1, border: '2px dashed #ccc' }}>
//                                             <Typography variant="body2" color="text.secondary">Signature</Typography>
//                                         </Paper>
//                                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                                             <IconButton size="small" color="primary">
//                                                 <AttachIcon />
//                                             </IconButton>
//                                             <Typography variant="body2" color="text.secondary">Add Attachments</Typography>
//                                         </Box>
//                                     </Paper>
//                                 </Grid>
//                             </Grid>
//                         )}

//                         {currentTab === 1 && (
//                             <Typography variant="body1">Design & Optional content here</Typography>
//                         )}
//                     </Paper>

//                     <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//                         <Button
//                             variant="contained"
//                             size="large"
//                             sx={{
//                                 px: 6,
//                                 py: 1.5,
//                                 bgcolor: '#7C3DDA',
//                                 color: 'white',
//                                 fontSize: '1.1rem',
//                                 fontWeight: 600,
//                                 borderRadius: 2,
//                                 '&:hover': { bgcolor: '#6B46C1' }
//                             }}
//                         >
//                             Save & Continue
//                         </Button>
//                     </Box>
//                    </Container>
//                 </main>

//                 {/* Mobile Drawer Menu */}
//                 <Drawer
//                     anchor="right"
//                     open={mobileMenuOpen}
//                     onClose={() => setMobileMenuOpen(false)}
//                     sx={{
//                         '& .MuiDrawer-paper': {
//                             width: 280,
//                             bgcolor: '#fff',
//                         },
//                     }}
//                 >
//                     <Box sx={{ p: 2 }}>
//                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//                             <Typography variant="h6" sx={{ fontWeight: 700, color: '#7C3DDA' }}>Menu</Typography>
//                             <IconButton onClick={() => setMobileMenuOpen(false)}>
//                                 <CloseIcon />
//                             </IconButton>
//                         </Box>

//                         <Divider sx={{ mb: 2 }} />

//                         <List>
//                             <ListItemButton
//                                 onClick={() => {
//                                     setProductsOpen(true);
//                                     setMobileMenuOpen(false);
//                                 }}
//                                 sx={{
//                                     borderRadius: 1,
//                                     mb: 1,
//                                     '&:hover': { bgcolor: 'rgba(124, 61, 218, 0.1)' }
//                                 }}
//                             >
//                                 <Typography sx={{ fontWeight: 500 }}>Products</Typography>
//                             </ListItemButton>

//                             <ListItemButton
//                                 component={Link}
//                                 href="/plans"
//                                 sx={{
//                                     borderRadius: 1,
//                                     mb: 1,
//                                     '&:hover': { bgcolor: 'rgba(124, 61, 218, 0.1)' }
//                                 }}
//                             >
//                                 <Typography sx={{ fontWeight: 500 }}>Pricing</Typography>
//                             </ListItemButton>
//                         </List>

//                         <Divider sx={{ my: 2 }} />

//                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                             <Button
//                                 variant="contained"
//                                 onClick={() => {
//                                     setAccountOpen(true);
//                                     setMobileMenuOpen(false);
//                                 }}
//                                 sx={{
//                                     textTransform: "none",
//                                     background: "#DF007A",
//                                     boxShadow: "none",
//                                     borderRadius: 2,
//                                     py: 1.5,
//                                     fontWeight: 600,
//                                     "&:hover": {
//                                         boxShadow: "none",
//                                         opacity: 0.95,
//                                         background: "#C7006B"
//                                     },
//                                 }}
//                             >
//                                 Register
//                             </Button>

//                             <Button
//                                 variant="outlined"
//                                 onClick={() => {
//                                     setAccountOpen(true);
//                                     setMobileMenuOpen(false);
//                                 }}
//                                 sx={{
//                                     textTransform: "none",
//                                     borderColor: "#7C3DDA",
//                                     color: "#7C3DDA",
//                                     py: 1.5,
//                                     fontWeight: 500,
//                                     "&:hover": {
//                                         borderColor: "#6B46C1",
//                                         backgroundColor: "rgba(124, 61, 218, 0.1)"
//                                     },
//                                 }}
//                             >
//                                 Login
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Drawer>

//                 {/* Products Dialog */}
//                 <Dialog open={productsOpen} onClose={() => setProductsOpen(false)} maxWidth="md" fullWidth>
//                     <DialogTitle sx={{ fontWeight: 700 }}>Products</DialogTitle>
//                     <DialogContent dividers>
//                         <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
//                             <Box>
//                                 <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
//                                     <Box sx={{ width: 34, height: 34, borderRadius: 1, bgcolor: "#EDE7FF", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #D7C9FF" }}>
//                                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M20.731 7.0043C20.907 7.30905 20.9998 7.65476 21 8.00672V16.0061C20.9988 16.3562 20.9055 16.6997 20.7295 17.0023C20.5534 17.3048 20.3009 17.5556 19.9971 17.7295L13.0029 21.7292C12.6984 21.9066 12.3523 22 12 22M20.731 7.0043C20.5549 6.69956 20.3019 6.44649 19.9971 6.27051L13.0029 2.2708C12.6984 2.09344 12.3523 2 12 2C11.6477 2 11.3016 2.09344 10.9971 2.2708L4.00286 6.27051C3.69814 6.44649 3.44506 6.69956 3.26904 7.0043M20.731 7.0043L11.9988 12.045M3.26904 7.0043C3.09301 7.30905 3.00023 7.65476 3 8.00672V16.0061C3.00118 16.3562 3.09448 16.6997 3.27053 17.0023C3.44657 17.3048 3.69915 17.5556 4.00286 17.7295L10.9971 21.7292C11.3016 21.9066 11.6477 22 12 22M3.26904 7.0043L11.9988 12.045M12 22L11.9988 12.045" stroke="#6B46C1" stroke-width="1.5" stroke-linecap="round" />
//                                         </svg>
//                                     </Box>
//                                     <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Solutions</Typography>
//                                 </Stack>
//                                 <List dense>
//                                     {["Cloud Accounting Software", "AI Accounting Agent", "GST Billing Software", "Invoicing Software", "Quotation Software", "e-Invoicing Software", "eWay Bill Software", "Inventory Software", "Invoicing API", "Sales CRM", "Lead Management Software", "Download Mobile App"].map((label) => (
//                                         <ListItemButton key={label} component={Link} href={`/solutions/${toSlug(label)}`}>
//                                             {label}
//                                         </ListItemButton>
//                                     ))}
//                                 </List>
//                             </Box>
//                             <Box>
//                                 <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
//                                     <Box sx={{ width: 34, height: 34, borderRadius: 1, bgcolor: "#E9F7EC", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #CBEBD3" }}>
//                                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <rect x="4" y="6" width="16" height="12" rx="2" stroke="#2E7D32" stroke-width="1.5" />
//                                             <rect x="8" y="10" width="8" height="4" rx="1" stroke="#2E7D32" stroke-width="1.5" />
//                                         </svg>
//                                     </Box>
//                                     <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Free Tools</Typography>
//                                 </Stack>
//                                 <List dense>
//                                     {["GST Invoice Maker", "Invoice Generator", "Quotation Generator", "Create Proforma Invoice", "Invoice Formats", "Create Purchase Order", "Create Delivery Challan", "Quotation Templates", "Commercial Invoice", "Consulting Invoice"].map((label) => (
//                                         <ListItemButton key={label} component={Link} href={`/tools/${toSlug(label)}`}>
//                                             {label}
//                                         </ListItemButton>
//                                     ))}
//                                 </List>
//                             </Box>
//                             <Box>
//                                 <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
//                                     <Box sx={{ width: 34, height: 34, borderRadius: 1, bgcolor: "#E7F0FF", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #C8DEFF" }}>
//                                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M6 10V6a2 2 0 0 1 2-2h8v6" stroke="#1E88E5" stroke-width="1.5" stroke-linecap="round" />
//                                             <rect x="4" y="10" width="16" height="10" rx="2" stroke="#1E88E5" stroke-width="1.5" />
//                                         </svg>
//                                     </Box>
//                                     <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Categories</Typography>
//                                 </Stack>
//                                 <List dense>
//                                     {["SMBs", "Consultants", "Startups", "Chartered Accountant", "Export/Import Business", "Professional Services", "Freelancers/Self-Employed"].map((label) => (
//                                         <ListItemButton key={label} component={Link} href={`/categories/${toSlug(label)}`}>
//                                             {label}
//                                         </ListItemButton>
//                                     ))}
//                                 </List>
//                             </Box>
//                         </Box>
//                     </DialogContent>
//                 </Dialog>

//                 {/* Account Dialog (Avatar/Register click) */}
//                 <Dialog open={accountOpen} onClose={() => setAccountOpen(false)} maxWidth="xs" fullWidth>
//                     <DialogContent sx={{ py: 3 }}>
//                         <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
//                             <Avatar sx={{ bgcolor: "#A78BFA" }} />
//                             <Box>
//                                 <Typography sx={{ fontWeight: 700 }}>Hi User</Typography>
//                                 <Typography variant="body2" color="text.secondary">Login/register to access your account</Typography>
//                             </Box>
//                         </Stack>
//                         <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                             <Button
//                                 variant="contained"
//                                 sx={{
//                                     flex: 1,
//                                     background: "linear-gradient(90deg,#FF0B7B,#F89B29)",
//                                     textTransform: "none",
//                                     boxShadow: "none",
//                                     "&:hover": { boxShadow: "none", opacity: 0.95 },
//                                 }}
//                                 onClick={() => router.push('/signup')}
//                             >
//                                 Register
//                             </Button>
//                             <Button variant="outlined" sx={{ flex: 1, textTransform: "none" }} onClick={() => router.push('/loginform')}>Login</Button>
//                         </Stack>
//                     </DialogContent>
//                 </Dialog>


//                 <footer>

//                 </footer>
//             </Box>
//         </>
//     )
// }