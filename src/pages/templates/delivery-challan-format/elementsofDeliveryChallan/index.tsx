'use client'

import { Box, Container, Typography, Button } from "@mui/material"

export default function ElementsOFDeliveryChallan() {
  return (
    <Box sx={{ bgcolor: '', py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">

        {/* Main Title */}
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 600, 
            color: '#000', 
            mb: 2, 
            textAlign: { xs: 'center', md: 'left' } 
          }}
        >
          What are the Essential Elements of a Delivery Challan?
        </Typography>

        {/* Intro Paragraph */}
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#444', 
            lineHeight: 1.8, 
            mb: 4,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          When creating a delivery challan, certain elements are crucial to ensure clarity and accuracy in documenting the movement of goods.
          Missing any of these elements can lead to confusion or delays in the delivery process.
          Here’s a breakdown of the key elements to include when generating a goods delivery challan format:
        </Typography>

        {/* Sections */}
        {[
          {
            title: 'Delivery Challan Header',
            desc: `Every delivery challan should have a well-structured header. It should clearly state that the document is a "Delivery Challan" and include key details like the challan number, which must be unique for each document. A unique challan number helps in tracking and referencing the document easily.\n\nYou can format the number in various ways (e.g., DC/00001 or 2024/DC/001), and with Refrens’ online delivery challan generator, the system automatically generates the next unique number.\n\nThe issue date and delivery date are also essential. They help both the sender and recipient track when the goods were dispatched and when they are expected to be delivered.\n\nYou may also include a reference number related to the purchase order, job work order, or invoice to provide additional context for the delivery.`
          },
          {
            title: 'Sender’s Name and Details',
            desc: `It is important to include the company or sender’s name along with details such as the address, phone number, and email address. 
            This ensures that the recipient knows who sent the goods. Make sure these details are clear and different from the recipient’s information to avoid any confusion.`
          },
          {
            title: 'Client’s Name and Details',
            desc: `Add the client or recipient’s name, along with their complete address, phone number, and email address. 
            Using our free delivery challan format, once you add the client’s details, they are saved for future use, 
            making it easier to generate multiple challans without having to re-enter the information each time.`
          },
          {
            title: 'Shipping Details',
            desc: `For physical goods, it’s important to add the necessary shipping details. 
            This includes the name of the person to whom the goods are being delivered, the shipping address, city, state, transport method, and vehicle number. 
            You should also include the expected date of delivery and any relevant shipping instructions.`
          },
          {
            title: 'Product/Service Details',
            desc: `The core part of the goods delivery challan format is the product or service details. 
            For each item, you should include the product name, description, and quantity. Each product should be listed on a separate row for clarity.\n\n
            You can also add images of the products, making it easier for the recipient to identify them. 
            Our online delivery challan format allows you to add images, customize columns, and even hide unnecessary details based on your needs.`
          },
          {
            title: 'Purpose of Delivery',
            desc: `One essential element of a delivery challan in GST is specifying the purpose of delivery. 
            Whether it’s for job work, stock transfer, or sample approval, it’s important to mention why the goods are being delivered. 
            This ensures clarity, especially when no immediate payment is being made.`
          },
          {
            title: 'Tax and Additional Fees',
            desc: `Though delivery challans typically do not involve payment, you may still want to include details like taxes, packaging charges, 
            or freight charges for record-keeping purposes. With Refrens’ delivery challan generator, you can easily add these elements to ensure full transparency with your client.`
          },
          {
            title: 'Terms & Conditions',
            desc: `This section is often overlooked but critical. 
            The terms and conditions on a delivery challan should include any special conditions related to the goods’ delivery or handling, 
            such as return policies or penalties for damaged goods.`
          },
          {
            title: 'Delivery Challan Footer',
            desc: `The footer section is where you can add additional notes or special instructions related to the delivery, 
            such as handling guidelines or safety measures. 
            You can also include a signature section, which is important for documenting the acknowledgment of goods received.\n\n
            Using Refrens, you can add a digital signature or simply upload a signature image for both the sender and the recipient.`
          }
        ].map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 600, 
                color: '#000', 
                mb: 0.5 
              }}
            >
              {item.title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#444', 
                lineHeight: 1.7, 
                whiteSpace: 'pre-line' 
              }}
            >
              {item.desc}
            </Typography>
          </Box>
        ))}

        {/* CTA Button */}
        <Box textAlign="center" sx={{ mt: 5 }}>
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: '#e00087', 
              fontWeight: 600, 
              px: 4, 
              py: 1.2, 
              '&:hover': { bgcolor: '#c20072' } 
            }}
          >
            Create Delivery Challan NOW!
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
