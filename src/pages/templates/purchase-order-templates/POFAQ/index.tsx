'use client'

import { 
  Box, 
  Container, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  Button, 
  Divider
} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PurchaseFaQ() {
  return (
    <>
      <Box sx={{ py: 4 , bgcolor:"#F7F9FA" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{fontWeight:"600"}}>
            Frequently Asked Questions (FAQ)
          </Typography>
          <Accordion defaultExpanded sx={{mb:2}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Is this Online Purchase Order Format really free?</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>
                Create up to 15 invoices and other documents in a year - completely free. Invoices, Quotations, Pro Forma, Expenses and more. No hidden charges.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded sx={{mb:2}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Can I customize the purchase order format?</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>
                Yes. You can customize your purchase order form by adding your logo, signature, and by adding multiple fields and columns on the purchase order form.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded sx={{mb:2}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Can I generate purchase orders with other format?</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>
                Yes. You can use multiple templates which also includes letterhead. You can also change the color and font of the purchase order form.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded sx={{mb:2}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">How is an online purchase order useful to me?</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>
                With Refrens online purchase order, you can create professional purchase orders online for free. Manage and save all your purchase orders in one place with detailed information about your vendors.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded sx={{mb:2}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Can I track my purchase order online?</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>
                Yes. You can track all your online purchase orders from the purchase order dashboard.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded sx={{mb:2}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Is my data safe with Refrens?</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>
                Yes. Your data is stored securely with encryption and cloud protection. We are ISO/IEC 27001:2022 certified. Your data stays private and is safely stored on the cloud.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                backgroundColor: '#E91E63', 
                '&:hover': { backgroundColor: '#C2185B' } 
              }}
            >
              Create Purchase Order
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}