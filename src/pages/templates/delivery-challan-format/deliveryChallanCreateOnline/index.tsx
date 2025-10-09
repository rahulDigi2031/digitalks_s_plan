'use client'

import { Box, Container, Typography, Button } from "@mui/material"
import Image from 'next/image'
import React from 'react'

export default function OnlineDeliveryChallanCreate() {
  return (
    <Box sx={{ py: 6, bgcolor: '#F7F9FA' }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <Typography 
          variant="h5" 
          sx={{ fontWeight: 600, mb: 2, color: '#000' }}
        >
          How to create a delivery challan format online?
        </Typography>

        {/* Subheading */}
        <Typography 
          variant="body1" 
          sx={{ color: '#444', mb: 3, lineHeight: 1.8 }}
        >
          Creating a delivery challan has never been easier, and in this guide, I’m going to show you how you can do it for free using Refrens. All you need is a mobile, laptop, or desktop with an internet connection, and you’re ready to go.
          <br /><br />
          Let’s get started with the step-by-step process of how create a delivery challan:
        </Typography>

        {/* Delivery Challan Image */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Image 
            src="/sampleDeliveryChallan.webp"
            alt="Delivery Challan Format"
            width={600}
            height={800}
            style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc' }}
          />
        </Box>

        {/* Sections */}
        {[
          {
            title: 'Delivery Challan Header',
            desc: 'The first step is to add the header of the delivery challan, which includes the challan number, issue date, and delivery date. You can also add your company logo to give it a professional touch. With Refrens, you can include additional fields like Transporter Name, Vehicle Number, or Job Work Details, depending on your business requirements.'
          },
          {
            title: 'Billed By (Sender’s Details)',
            desc: 'Next, add your company details, including the company name, address, phone number, and email address. If your business is registered under GST, you can use Refrens’ integrated GST-enabled challan format for seamless management of GST compliance.'
          },
          {
            title: 'Billed To (Receiver’s Details)',
            desc: 'In this section, fill in the business details of the recipient, just as you would in an invoice. Ensure the name, address, and contact information of the recipient are included.'
          },
          {
            title: 'Product/Service Details',
            desc: 'Now, add the product or service details that are being delivered, including the item description, quantity, and unit of measurement. You can add multiple items as needed and customize the columns to match your delivery challan requirements.'
          },
          {
            title: 'Purpose of Delivery',
            desc: 'It’s important to mention the reason for delivery, whether it’s job work, goods return, stock transfer, or sample. Refrens allows you to select the purpose from the dropdown to ensure proper documentation.'
          },
          {
            title: 'Transport Details',
            desc: 'Here, you can specify the details of the transport, such as the mode of transport, vehicle number, and driver’s name. These fields are essential for tracking goods in transit.'
          },
          {
            title: 'Terms & Conditions',
            desc: 'Adding terms and conditions is essential for maintaining clarity between the sender and receiver. It also ensures both parties understand the terms of goods delivery, return, or receipt acknowledgment.'
          },
          {
            title: 'Additional Notes',
            desc: 'This section is where you can provide any extra information related to the delivery, such as special instructions for handling goods, delivery timeframes, or packaging details. You can also attach additional documents such as purchase orders, job work orders, or delivery schedules.'
          },
          {
            title: 'How to Customize Your Delivery Challan for Free with Refrens',
            desc: 'Customizing your delivery challan with Refrens is simple and intuitive. You can add your business logo, change the layout, and include custom fields like Transporter GSTIN or Recipient GSTIN. You can also enable additional features, such as automatic updates for job work tracking or stock transfers.\n\nWe offer four different online delivery challan templates, each designed to meet specific business needs:\n\n• Basic Challan Template: Ideal for small businesses that need simple, clean challans.\n• Job Work Challan Template: Tailored for businesses that frequently send materials for job work.\n• Stock Transfer Challan Template: Perfect for businesses managing stock transfers between warehouses or locations.\n• Returnable Goods Challan Template: Designed for managing goods sent out on a returnable basis, such as tools or equipment.'
          },
          {
            title: 'Common Mistakes to Avoid When Creating a Delivery Challan',
            desc: 'To ensure smooth delivery and receipt of goods, avoid these common mistakes:\n\n• Missing Challan Number: Always include a unique challan number.\n• Incorrect Product/Quantity Details: Ensure all details and quantities match.\n• Missing Transport Information: Fill in vehicle and transport details.\n• Inconsistent Terms & Conditions: Always mention them clearly.'
          },
          {
            title: 'How to Send a Delivery Challan with Refrens',
            desc: 'Once your delivery challan is created, you can send it to your client through email, WhatsApp, or generate a shareable link. Refrens also allows you to download a PDF copy for easy printing or attachment.'
          }
        ].map((section, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ fontWeight: 600, color: '#000', mb: 0.5 }}
            >
              {section.title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ color: '#444', lineHeight: 1.7, whiteSpace: 'pre-line' }}
            >
              {section.desc}
            </Typography>
          </Box>
        ))}

        {/* Button */}
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button 
            variant="contained" 
            sx={{ bgcolor: '#e00087', '&:hover': { bgcolor: '#c20072' } }}
          >
            Create & Download Delivery Challan
          </Button>
        </Box>

      </Container>
    </Box>
  )
}
