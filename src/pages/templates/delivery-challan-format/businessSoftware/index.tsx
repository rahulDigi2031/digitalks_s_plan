'use client'

import { Box, Container, Typography, Link } from "@mui/material"
import React from 'react';

const sections = [
  {
    title: 'Accounting Software',
    text: 'Refrens accounting software helps you record sales, purchases, expenses, and taxes seamlessly. Generate profit & loss statements, balance sheets, and manage GST compliance without extra effort.',
    linkText: 'accounting software',
    link: '#'
  },
  {
    title: 'Accounting Software for Small Business',
    text: 'Refrens accounting software for small business is designed for SMEs who need simple financial control. Track inventory, manage payments, and handle GST filings quickly.',
    linkText: 'accounting software for small business',
    link: '#'
  },
  {
    title: 'Invoicing Software',
    text: 'Refrens invoicing software helps to create professional invoices online with branding, GST, discounts, and payment terms. It also supports recurring billing and automated reminders.',
    linkText: 'invoicing software',
    link: '/templates/invoice-templates'
  },
  {
    title: 'Quotation Software',
    text: 'Quotation software enables you to send accurate, professional quotations in minutes. Once approved, they can be converted into invoices instantly, saving time in your business cycle.',
    linkText: 'Quotation software',
    link: '/templates/quotation-templates'
  },
  {
    title: 'Sales CRM Software',
    text: 'The sales CRM software from Refrens helps capture leads, track conversations, and manage your entire pipeline — ensuring no opportunity slips through.',
    linkText: 'sales CRM software',
    link: '#'
  },
  {
    title: 'E-Invoicing Software',
    text: 'Refrens e-invoicing software connects directly with GST portals to generate compliant e-invoices. It ensures error-free reporting and saves hours of manual work.',
    linkText: 'e-invoicing software',
    link: '#'
  },
  {
    title: 'Inventory Management Software',
    text: 'Refrens inventory management software keeps track of your stock levels in real time. It updates quantities automatically with each sale or purchase, prevents stockouts, and helps you analyze product performance.',
    linkText: 'inventory management software',
    link: '#'
  }
]

export default function BusinessSoftware() {
  const highlightLinkInText = (text: string, linkText: string, href: string) => {
    const parts = text.split(new RegExp(`(${linkText})`, 'i'));
    return parts.map((part, index) =>
      part.toLowerCase() === linkText.toLowerCase() ? (
        <Link 
          key={index} 
          href={href} 
          underline="hover" 
          sx={{ color: '#673ab7', fontWeight: 500 }}
        >
          {part}
        </Link>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      )
    );
  };

  return (
    <Box sx={{ py: 6, bgcolor: '#F7F9FA' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 600, 
            mb: 3, 
            color: '#000' 
          }}
        >
          Business Software's by Refrens
        </Typography>

        {sections.map((section, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 600, 
                color: '#000', 
                mb: 0.5 
              }}
            >
              {section.title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#333', 
                lineHeight: 1.6 
              }}
            >
              {highlightLinkInText(section.text, section.linkText, section.link)}
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
