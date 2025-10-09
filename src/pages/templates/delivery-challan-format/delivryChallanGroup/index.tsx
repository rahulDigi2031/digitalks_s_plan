'use client'

import { Box, Container, Typography, Button, List, ListItem, ListItemText } from "@mui/material"

export default function DeliveryChallanGroup() {
  const sections = [
    {
      title: "Delivery Challan Format in Word",
      desc: `Creating a delivery challan in Word is easy with Refrens. Use customizable templates to draft a professional delivery challan format:`,
      points: [
        "Choose a Template: Browse through our delivery challan templates designed for various business needs.",
        "Customize Details: Add your business name, goods description, client information, challan number, date, total amount, and contact details.",
        "Personalize Appearance: Modify fonts, colors, and logos to match your brand identity.",
        "Save for Future Use: Keep a Word copy for reference or reuse. Now, you can seamlessly create a challan, invoice, quotation, eway bill which you can download and share it with clients or transporters."
      ],
      button: "Register Now!"
    },
    {
      title: "Delivery Challan Format in Excel",
      desc: `Many businesses prefer Excel for its simplicity and efficiency. Refrens allows you to generate delivery challans in Excel for detailed data management.`,
      points: [
        "Download The Template: Use our pre-designed Excel templates.",
        "Enter Details: Add specifics like business name, client details, item descriptions, and amounts.",
        "Save The File: Keep a copy for future use or updates.",
        "Share with Clients: Open the Excel file, verify details, and email it directly."
      ],
      button: "Register Now!"
    },
    {
      title: "Delivery Challan Format PDF",
      desc: `Refrens makes it simple to generate and share delivery challans in PDF format.`,
      points: [
        "Register yourself in Refrens.com",
        "Add Necessary details in Delivery challan Form",
        "Simply Download it or Share it via email or Whatsapp. Its as simple you can seamlessly create Invoices and Quotation similarly"
      ],
      button: "Create & Download Delivery Challan"
    }
  ]

  return (
    <Box sx={{ bgcolor: '#F7F9FA', py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {sections.map((item, index) => (
          <Box 
            key={index} 
            sx={{ 
              mb: 6, 
              pb: 3, 
              borderBottom: index !== sections.length - 1 ? '1px solid #ddd' : 'none' 
            }}
          >
            {/* Title */}
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                color: '#000', 
                mb: 1.5 
              }}
            >
              {item.title}
            </Typography>

            {/* Description */}
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#444', 
                lineHeight: 1.8, 
                mb: 2 
              }}
            >
              {item.desc}
            </Typography>

            {/* Bullet Points */}
            <List sx={{ listStyleType: 'disc', pl: 3 }}>
              {item.points.map((point, i) => (
                <ListItem 
                  key={i} 
                  sx={{ display: 'list-item', py: 0.3 }}
                >
                  <ListItemText 
                    primary={
                      <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.6 }}>
                        {point}
                      </Typography>
                    } 
                  />
                </ListItem>
              ))}
            </List>

            {/* Button */}
            <Box sx={{ mt: 2 }}>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#e00087', 
                  px: 3, 
                  py: 1, 
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#c20072' }
                }}
              >
                {item.button}
              </Button>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  )
}
