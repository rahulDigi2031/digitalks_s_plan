'use client'

import { Box, Container, Typography, Link } from "@mui/material"
import React from "react"

const tools = [
  {
    title: 'Invoice Generator',
    description: 'The invoice generator helps you create GST-compliant invoices instantly. Add company branding, tax details, and payment instructions with ease.',
    linkText: 'invoice generator',
    link: '#'
  },
  {
    title: 'Quotation Maker',
    description: 'With our quotation maker, you can prepare customized quotations online. These can later be converted into invoices seamlessly once approved by clients.',
    linkText: 'quotation maker',
    link: '#'
  },
  {
    title: 'Proforma Invoice Format',
    description: 'Refrens provides a ready-to-use proforma invoice format for advance billing or international shipments. It’s easy to customize and download.',
    linkText: 'proforma invoice format',
    link: '#'
  },
  {
    title: 'Purchase Order Format',
    description: 'Our purchase order format helps you create standardized POs to improve vendor communication and streamline procurement.',
    linkText: 'purchase order format',
    link: '#'
  },
  {
    title: 'E-way Bill Generator',
    description: 'The e-way bill generator in Refrens helps create GST-compliant e-way bills with transport details. It ensures goods movement remains documented and legal.',
    linkText: 'e-way bill generator',
    link: '#'
  },
  {
    title: 'GST Estimate Format',
    description: 'Refrens GST estimate format lets you prepare professional estimates and quickly convert them into invoices once confirmed by clients.',
    linkText: 'GST estimate format',
    link: '#'
  },
  {
    title: 'GST Bill Format',
    description: 'With Refrens GST bill format, you can generate GST-compliant tax invoices that include HSN/SAC codes, tax breakdowns, and both CGST/SGST or IGST as applicable.',
    linkText: 'GST bill format',
    link: '#'
  }
]

export default function InvoiceGeneratorAutomate() {
  const highlightLink = (text: string, linkText: string, link: string) => {
    const parts = text.split(new RegExp(`(${linkText})`, 'i'))
    return parts.map((part, index) =>
      part.toLowerCase() === linkText.toLowerCase() ? (
        <Link 
          key={index} 
          href={link} 
          underline="hover" 
          sx={{ color: '#673ab7', fontWeight: 500 }}
        >
          {part}
        </Link>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      )
    )
  }

  return (
    <Box sx={{ py: 6, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 600, 
            mb: 3, 
            color: '#000' 
          }}
        >
          Generators & Formats from Refrens
        </Typography>

        {tools.map((tool, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 600, 
                color: '#000', 
                mb: 0.5 
              }}
            >
              {tool.title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#333', 
                lineHeight: 1.6 
              }}
            >
              {highlightLink(tool.description, tool.linkText, tool.link)}
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  )
}
