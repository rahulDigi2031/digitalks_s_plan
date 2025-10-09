'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Button
} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const faqData = [
  {
    question: "What is delivery challan?",
    answer: "Delivery challans are essential documents in GST that are used when goods are transported from one location to another without issuance of a regular tax invoice. For example, a delivery challan in GST is commonly used when moving goods between warehouses."
  },
  {
    question: "Can we create challan online?",
    answer: "Yes, you can create a delivery challan online using various software tools. Platforms like Refrens allow you to easily generate delivery challans by entering your details and automating the process. This makes it convenient to manage your invoicing and documentation from anywhere with an internet connection."
  },
  {
    question: "How to make delivery challan?",
    answer: "Refrens helps you create delivery challan copies easily by turning your sales bills into delivery challans. With Refrens, you can make your invoicing quick and easy."
  },
  {
    question: "What is delivery challan in GST?",
    answer: "A delivery challan in GST is a document to acknowledge the movement of goods without using a formal tax invoice. It includes details such as the sender and receiver's information, goods description and quantity, and helps maintain compliance with GST regulations while facilitating logistics."
  },
  {
    question: "Do I need eway bill to issue delivery challan?",
    answer: "No, you do not need an e-way bill to issue a delivery challan. A delivery challan is a document used to acknowledge the transportation of goods without a tax invoice, and it can be issued independently."
  },
  {
    question: "Why Delivery Challan is required?",
    answer: "A delivery challan is required as proof of the movement of goods without a tax invoice, ensuring compliance with GST regulations. It helps maintain accurate internal records, facilitates returns and exchanges, and streamlines logistics operations by documenting details of the transported goods."
  },
  {
    question: "What should be written in delivery challan?",
    answer: (
      <Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Some Essentials Key Details to Include in Delivery Challan:
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '20px', color: 'rgba(0, 0, 0, 0.6)' }}>
          <li><Typography variant="body1" color="text.secondary">Title: Clearly label the document as "Delivery Challan."</Typography></li>
          <li><Typography variant="body1" color="text.secondary">Challan Number: A unique identifier for tracking.</Typography></li>
          <li><Typography variant="body1" color="text.secondary">Date: The date of issuance.</Typography></li>
          <li><Typography variant="body1" color="text.secondary">Sender's Details: Name, address, and contact information of the sender.</Typography></li>
          <li><Typography variant="body1" color="text.secondary">Receiver's Details: Name, address, and contact information of the recipient.</Typography></li>
          <li><Typography variant="body1" color="text.secondary">Description of Goods: A detailed list of items being delivered, including quantity, specifications, and any relevant codes.</Typography></li>
          <li><Typography variant="body1" color="text.secondary">Transportation Details: Information about the vehicle or transporter handling the delivery.</Typography></li>
          <li><Typography variant="body1" color="text.secondary">Signature: Signatures of authorized personnel from both the sender and receiver, if applicable.</Typography></li>
          <li><Typography variant="body1" color="text.secondary">Remarks: Any additional notes or instructions related to the delivery.</Typography></li>
        </ul>
      </Box>
    )
  },
  {
    question: "How many delivery challan should be prepared?",
    answer: (
      <Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Usually, at least three copies of a delivery challan should be prepared:
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '20px', color: 'rgba(0, 0, 0, 0.6)' }}>
          <li><Typography variant="body1" color="text.secondary">Original Copy: This copy is retained by the sender for their records.</Typography></li>
          <li><Typography variant="body1" color="text.secondary">Duplicate Copy: This copy is given to the transporter or driver accompanying the goods for their reference during transit.</Typography></li>
          <li><Typography variant="body1" color="text.secondary">Triplicate Copy: This copy is provided to the recipient upon delivery, who can keep it for their records.</Typography></li>
        </ul>
      </Box>
    )
  }
]

export default function DeliveryChallanFaQ() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 'bold', mb: 6 }}
        >
          Frequently Asked Questions (FAQ)
        </Typography>
        
        {faqData.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2, boxShadow: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {typeof faq.answer === 'string' ? (
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              ) : (
                faq.answer
              )}
            </AccordionDetails>
          </Accordion>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#e91e63',
              color: 'white',
              px: 2,
              py: 1.2,
              fontSize: '12px',
              fontWeight: 'bold',
              borderRadius: '4px',
              '&:hover': { backgroundColor: '#c2185b' },
            }}
          >
            Create Delivery Challan for Free
          </Button>
        </Box>
      </Container>
    </Box>
  )
}