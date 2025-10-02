'use client'
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  Add,
  Photo,
  Email,
  Phone,
  AttachMoney,
  Close
} from '@mui/icons-material';

export default function InvoiceCreate() {
  const [isStarted, setIsStarted] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);
  const [items, setItems] = useState<Array<{
    name: string;
    hsn: string;
    qty: string;
    rate: string;
    amount: string;
    cgst: string;
    sgst: string;
    total: string;
  }>>([
    { name: '', hsn: '', qty: '1', rate: '10', amount: '10', cgst: '0.90', sgst: '0.90', total: '11.80' }
  ]);

  const updateItem = (index: number, field: keyof (typeof items)[number], value: string) => {
    setItems(prev => prev.map((it, i) => i === index ? { ...it, [field]: value } : it));
  };

  const addItemRow = () => {
    const template = items[0] ?? { name: '', hsn: '', qty: '1', rate: '10', amount: '10', cgst: '0.90', sgst: '0.90', total: '11.80' };
    setItems(prev => [...prev, { ...template }]);
  };

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const steps = ['Add Invoice Details', 'Add Banking Details', 'Design & Share (optional)'];

  return (
    <Box sx={{ 
      bgcolor: '#FFFFFF',
      pb: 15,
      minHeight: '900px'
    }}>

      <Typography variant='h4' sx={{textAlign:"center" , fontWeight:"700"}}>Start Creating Your Invoice For FREE</Typography>

      {/* Header Stepper */}
      <Paper elevation={1} sx={{ p: 3, mb: 3, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Stepper activeStep={0} alternativeLabel sx={{ '& .MuiStepLabel-root .Mui-active .MuiStepLabel-label': { color: '#7B61FF' }, '& .MuiStepLabel-root .Mui-completed .MuiStepLabel-label': { color: '#7B61FF' } }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel sx={{ '& .MuiStepLabel-iconContainer': { display: 'none' } }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ transition: 'opacity 300ms ease' }}>
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          opacity: isStarted ? 1 : 0.4,
          position: 'relative'
        }}>
          {/* Left Side - Invoice Form */}
          <Box sx={{ 
            flex: { xs: 1, md: 2/3 }
          }}>
            <Paper elevation={2} sx={{ p: 3, backgroundColor: 'white' }}>
              {/* Invoice Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" fontWeight="bold" sx={{ color: '#000' }}>
                  Invoice *
                </Typography>
                <Button 
                  startIcon={<Photo />} 
                  variant="outlined"
                  sx={{ 
                    borderRadius: 2,
                    borderColor: '#7B61FF',
                    color: '#7B61FF',
                    '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' }
                  }}
                >
                  Add Business Logo
                </Button>
              </Box>

              {/* Invoice Details */}
              <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                mb: 3
              }}>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    label="Invoice No"
                    defaultValue="400001"
                    variant="outlined"
                    size="small"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    label="Invoice Date"
                    defaultValue="Oct 01, 2025"
                    variant="outlined"
                    size="small"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    label="Due Date"
                    defaultValue="Oct 18, 2025"
                    variant="outlined"
                    size="small"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                  />
                </Box>
              </Box>

              <Button 
                variant="outlined" 
                startIcon={<Add />} 
                sx={{ 
                  mb: 3,
                  borderColor: '#7B61FF',
                  color: '#7B61FF',
                  borderRadius: 1,
                  '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' }
                }}
              >
                Add More Fields
              </Button>

              <Divider sx={{ my: 3, borderColor: '#E0E0E0' }} />

              {/* Billed By and Billed To Sections */}
              <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3
              }}>
                {/* Billed By */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#000', fontWeight: 600 }}>
                    Billed By (Your Details)
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ color: '#666' }}>
                      India
                    </Typography>
                  </Box>
                  
                  <TextField
                    fullWidth
                    label="Your Business / Freelancer Name"
                    variant="outlined"
                    size="small"
                    sx={{ 
                      mb: 2,
                      '& .MuiOutlinedInput-root': { borderRadius: 1 }
                    }}
                  />
                  
                  <Box sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1,
                    mb: 2
                  }}>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="GSTIN"
                        placeholder="XXAAAAA0000X1Z5"
                        variant="outlined"
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="PAN"
                        placeholder="ABCDE1234F"
                        variant="outlined"
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                      />
                    </Box>
                  </Box>
                  
                  <TextField
                    fullWidth
                    label="Address (optional)"
                    variant="outlined"
                    size="small"
                    sx={{ 
                      mb: 2,
                      '& .MuiOutlinedInput-root': { borderRadius: 1 }
                    }}
                  />
                  
                  <Box sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1,
                    mb: 2
                  }}>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="City (optional)"
                        variant="outlined"
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="State (optional)"
                        variant="outlined"
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                      />
                    </Box>
                  </Box>

                  <TextField
                    fullWidth
                    label="Postal Code (optional)"
                    variant="outlined"
                    size="small"
                    sx={{ 
                      mb: 2,
                      '& .MuiOutlinedInput-root': { borderRadius: 1 }
                    }}
                  />

                  {/* Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    <Button startIcon={<Email />} variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                      Add Email
                    </Button>
                    <Button startIcon={<Phone />} variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                      Add Phone Number
                    </Button>
                    <Button variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                      Add GST
                    </Button>
                    <Button variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                      Add PAN
                    </Button>
                  </Box>

                  <Button variant="outlined" startIcon={<Add />} size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                    Add Custom Fields
                  </Button>
                </Box>

                {/* Billed To */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#000', fontWeight: 600 }}>
                    Billed To (Client Details)
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ color: '#666' }}>
                      India
                    </Typography>
                  </Box>
                  
                  <TextField
                    fullWidth
                    label="Client Business Name"
                    variant="outlined"
                    size="small"
                    sx={{ 
                      mb: 2,
                      '& .MuiOutlinedInput-root': { borderRadius: 1 }
                    }}
                  />
                  
                  <Box sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1,
                    mb: 2
                  }}>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="GSTIN"
                        placeholder="XXAAAAA0000X1Z5"
                        variant="outlined"
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="PAN"
                        placeholder="ABCDE1234F"
                        variant="outlined"
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                      />
                    </Box>
                  </Box>
                  
                  <TextField
                    fullWidth
                    label="Address (optional)"
                    variant="outlined"
                    size="small"
                    sx={{ 
                      mb: 2,
                      '& .MuiOutlinedInput-root': { borderRadius: 1 }
                    }}
                  />
                  
                  <Box sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1,
                    mb: 2
                  }}>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="City (optional)"
                        variant="outlined"
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        fullWidth
                        label="State (optional)"
                        variant="outlined"
                        size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                      />
                    </Box>
                  </Box>

                  <TextField
                    fullWidth
                    label="Postal Code (optional)"
                    variant="outlined"
                    size="small"
                    sx={{ 
                      mb: 2,
                      '& .MuiOutlinedInput-root': { borderRadius: 1 }
                    }}
                  />

                  {/* Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    <Button startIcon={<Email />} variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                      Add Email
                    </Button>
                    <Button startIcon={<Phone />} variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                      Add Phone Number
                    </Button>
                    <Button variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                      Add GST
                    </Button>
                    <Button variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                      Add PAN
                    </Button>
                  </Box>

                  <Button variant="outlined" startIcon={<Add />} size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                    Add Custom Fields
                  </Button>

                  <Button variant="outlined" startIcon={<Add />} size="small" sx={{ 
                    mt: 1, 
                    ml: 1,
                    borderRadius: 1, 
                    borderColor: '#7B61FF', 
                    color: '#7B61FF', 
                    '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } 
                  }}>
                    Add Shipping Details
                  </Button>
                </Box>
              </Box>

              <Divider sx={{ my: 3, borderColor: '#E0E0E0' }} />

              {/* Currency and Items Section */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ color: '#000', fontWeight: 600 }}>
                  Items
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button 
                    variant="outlined" 
                    size="small"
                    sx={{ 
                      borderRadius: 1,
                      borderColor: '#7B61FF',
                      color: '#7B61FF',
                      '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' }
                    }}
                  >
                    INR ₹
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="small"
                    sx={{ 
                      borderRadius: 1,
                      borderColor: '#7B61FF',
                      color: '#7B61FF',
                      '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' }
                    }}
                  >
                    Edit Columns
                  </Button>
                </Box>
              </Box>

              {/* Items Table */}
              <TableContainer component={Paper} sx={{ borderRadius: 1, border: '1px solid #E0E0E0' }}>
                <Table>
                  <TableHead sx={{ backgroundColor: '#7C3DDA' }}>
                    <TableRow sx={{ color: 'white' }}>
                      <TableCell sx={{ border: 'none', fontWeight: 600, color: 'white' }}>Item Name</TableCell>
                      <TableCell align="right" sx={{ border: 'none', fontWeight: 600, color: 'white' }}>HSN/SAC</TableCell>
                      <TableCell align="right" sx={{ border: 'none', fontWeight: 600, color: 'white' }}>Quantity</TableCell>
                      <TableCell align="right" sx={{ border: 'none', fontWeight: 600, color: 'white' }}>Rate</TableCell>
                      <TableCell align="right" sx={{ border: 'none', fontWeight: 600, color: 'white' }}>Amount</TableCell>
                      <TableCell align="right" sx={{ border: 'none', fontWeight: 600, color: 'white' }}>CGST</TableCell>
                      <TableCell align="right" sx={{ border: 'none', fontWeight: 600, color: 'white' }}>SGST</TableCell>
                      <TableCell align="right" sx={{ border: 'none', fontWeight: 600, color: 'white' }}>Total</TableCell>
                      <TableCell align="center" sx={{ border: 'none', width: 50 }}></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell sx={{ border: 'none', padding: '8px 16px' }}>
                          <TextField
                            placeholder="Enter Item Name"
                            variant="standard"
                            InputProps={{ disableUnderline: true }}
                            fullWidth
                            size="small"
                            value={row.name}
                            onChange={(e) => updateItem(idx, 'name', e.target.value)}
                            sx={{ '& input': { textAlign: 'left' } }}
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ border: 'none', padding: '8px 16px' }}>
                          <TextField
                            placeholder="Enter HSN/SAC"
                            variant="standard"
                            InputProps={{ 
                              disableUnderline: true
                            }}
                            size="small"
                            value={row.hsn}
                            onChange={(e) => updateItem(idx, 'hsn', e.target.value)}
                            sx={{ 
                              width: '100%',
                              '& input': { textAlign: 'right' }
                            }}
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ border: 'none', padding: '8px 16px' }}>
                          <TextField
                            variant="standard"
                            InputProps={{ 
                              disableUnderline: true
                            }}
                            size="small"
                            value={row.qty}
                            onChange={(e) => updateItem(idx, 'qty', e.target.value)}
                            sx={{ 
                              width: '100%',
                              '& input': { textAlign: 'right' }
                            }}
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ border: 'none', padding: '8px 16px' }}>
                          <TextField
                            variant="standard"
                            InputProps={{ 
                              disableUnderline: true
                            }}
                            size="small"
                            value={row.rate}
                            onChange={(e) => updateItem(idx, 'rate', e.target.value)}
                            sx={{ 
                              width: '100%',
                              '& input': { textAlign: 'right' }
                            }}
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ border: 'none', padding: '8px 16px' }}>
                          <TextField
                            variant="standard"
                            InputProps={{ 
                              disableUnderline: true
                            }}
                            size="small"
                            value={row.amount}
                            onChange={(e) => updateItem(idx, 'amount', e.target.value)}
                            sx={{ 
                              width: '100%',
                              '& input': { textAlign: 'right' }
                            }}
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ border: 'none', padding: '8px 16px' }}>
                          <TextField
                            variant="standard"
                            InputProps={{ 
                              disableUnderline: true
                            }}
                            size="small"
                            value={row.cgst}
                            onChange={(e) => updateItem(idx, 'cgst', e.target.value)}
                            sx={{ 
                              width: '100%',
                              '& input': { textAlign: 'right' }
                            }}
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ border: 'none', padding: '8px 16px' }}>
                          <TextField
                            variant="standard"
                            InputProps={{ 
                              disableUnderline: true
                            }}
                            size="small"
                            value={row.sgst}
                            onChange={(e) => updateItem(idx, 'sgst', e.target.value)}
                            sx={{ 
                              width: '100%',
                              '& input': { textAlign: 'right' }
                            }}
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ border: 'none', padding: '8px 16px' }}>
                          <TextField
                            variant="standard"
                            InputProps={{ 
                              disableUnderline: true
                            }}
                            size="small"
                            value={row.total}
                            onChange={(e) => updateItem(idx, 'total', e.target.value)}
                            sx={{ 
                              width: '100%',
                              '& input': { textAlign: 'right' }
                            }}
                          />
                        </TableCell>
                        <TableCell align="center" sx={{ border: 'none', padding: '8px' }}>
                          <IconButton 
                            onClick={() => removeItem(idx)} 
                            size="small"
                            sx={{ 
                              color: '#666',
                              '&:hover': { color: '#7B61FF' }
                            }}
                          >
                            <Close fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

               <Box sx={{ display: 'flex', gap: 2, mt: 2, mb: 3 }}>
                 <Button startIcon={<Add />} variant="text" size="small" sx={{ color: '#7B61FF', textTransform: 'none' }} onClick={addItemRow}>
                   + New Line
                </Button>
                <Button startIcon={<AttachMoney />} variant="text" size="small" sx={{ color: '#7B61FF', textTransform: 'none' }}>
                  Discounts/Additional Charges
                </Button>
              </Box>

              {/* Summary & Actions */}
              <Divider sx={{ my: 3, borderColor: '#E0E0E0' }} />
              <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                alignItems: 'flex-start'
              }}>
                {/* Left quick actions */}
                <Box sx={{ 
                  flex: { xs: 1, md: 7/12 }
                }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                    <Button 
                      variant="outlined" 
                      size="small"
                      sx={{ 
                        borderRadius: 1,
                        borderColor: '#7B61FF',
                        color: '#7B61FF',
                        textTransform: 'none',
                        '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' }
                      }}
                    >
                      Discounts/Additional Charges
                    </Button>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Button variant="text" size="small" sx={{ color: '#666', textTransform: 'none' }}>Hide Totals</Button>
                      <Button variant="text" size="small" sx={{ color: '#666', textTransform: 'none' }}>Round Up</Button>
                      <Button variant="text" size="small" sx={{ color: '#666', textTransform: 'none' }}>Round Down</Button>
                      <Button variant="text" size="small" sx={{ color: '#666', textTransform: 'none' }}>Summarise Total Quantity</Button>
                    </Box>
                  </Box>
                </Box>

                {/* Right totals */}
                <Box sx={{ 
                  flex: { xs: 1, md: 5/12 }
                }}>
                  <Paper variant="outlined" sx={{ p: 2, borderRadius: 1, borderColor: '#E0E0E0' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ color: '#666' }}>Amount</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>₹10.00</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ color: '#666' }}>CGST</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>₹0.90</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ color: '#666' }}>SGST</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>₹0.90</Typography>
                    </Box>
                    <Divider sx={{ my: 1, borderColor: '#E0E0E0' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#000' }}>Total (INR)</Typography>
                      <Typography variant="h6" fontWeight={700} sx={{ color: '#000' }}>₹11.80</Typography>
                    </Box>
                  </Paper>
                </Box>

              </Box>

              {/* Footer action buttons */}
              <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                flexWrap: 'wrap',
                gap: 2,
                mt: 3
              }}>
                <Box sx={{ flex: { xs: 1, md: 1/3 } }}>
                  <Button fullWidth variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', textTransform: 'none', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                    Add Terms & Conditions
                  </Button>
                </Box>
                <Box sx={{ flex: { xs: 1, md: 1/3 } }}>
                  <Button fullWidth variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', textTransform: 'none', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                    Add Notes
                  </Button>
                </Box>
                <Box sx={{ flex: { xs: 1, md: 1/3 } }}>
                  <Button fullWidth variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', textTransform: 'none', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                    Add Attachments
                  </Button>
                </Box>
                <Box sx={{ flex: { xs: 1, md: 1/3 } }}>
                  <Button fullWidth variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', textTransform: 'none', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                    Add Additional Info
                  </Button>
                </Box>
                <Box sx={{ flex: { xs: 1, md: 1/3 } }}>
                  <Button fullWidth variant="outlined" size="small" sx={{ borderRadius: 1, borderColor: '#7B61FF', color: '#7B61FF', textTransform: 'none', '&:hover': { borderColor: '#7B61FF', backgroundColor: 'rgba(123, 97, 255, 0.04)' } }}>
                    Add Contact Details
                  </Button>
                </Box>
                <Box sx={{ flex: { xs: 1, md: 1/3 } }}>
                  <Button fullWidth variant="contained" color="primary" size="small" sx={{ borderRadius: 1, backgroundColor: '#7B61FF', textTransform: 'none', '&:hover': { backgroundColor: '#7B61FF' } }}>
                    Save & Continue
                  </Button>
                </Box>
              </Box>

            </Paper>
          </Box>

          {/* Right Side - Preview/Additional Options */}
          <Box sx={{ 
            flex: { xs: 1, md: 1/3 }
          }}>
            <Paper elevation={2} sx={{ p: 3, backgroundColor: 'white', height: 'fit-content', position: 'sticky', top: 20 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#000', fontWeight: 600 }}>
                Invoice Preview
              </Typography>
              <Box sx={{ 
                border: '2px dashed #E0E0E0', 
                borderRadius: 1, 
                height: 400, 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                gap: 2,
                backgroundColor: '#FAFAFA',
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#F0F0F0' }
              }} onClick={() => setShowFileInput(true)}>
                {showFileInput ? (
                  <TextField
                    type="file"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{ 
                      '& .MuiOutlinedInput-root': { 
                        borderRadius: 1,
                        maxWidth: 300
                      }
                    }}
                    inputProps={{
                      accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png'
                    }}
                  />
                ) : (
                  <Typography variant="body2" color="text.secondary" sx={{ color: '#999', textAlign: 'center' }}>
                    Your invoice preview will appear here as you fill in the details above.
                  </Typography>
                )}
              </Box>
            </Paper>
          </Box>

          {/* Overlay for invoice form only */}
          {!isStarted && (
            <Box sx={{ 
              position: 'absolute', 
              inset: 0, 
              bgcolor: 'rgba(0,0,0,0.3)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              pb: 4,
              pointerEvents: 'auto'
            }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => setIsStarted(true)}
                sx={{
                  px: 6,
                  py: 1.6,
                  borderRadius: 3,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  boxShadow: 6,
                  backgroundColor: '#E2007B',
                  color: 'white',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#E2007B' },
                }}
              >
                Create your First invoice
              </Button>
            </Box>
          )}

        </Box>
      </Container>  
      
    </Box>
  );
};