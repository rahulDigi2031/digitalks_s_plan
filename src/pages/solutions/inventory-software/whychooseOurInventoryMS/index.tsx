'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

export default function WhyChooseOurInventoryMS() {
  const theme = useTheme();

  const features = [
    {
      title: 'Automatic Stock Updates',
      description:
        'Seamlessly update stock levels every time an invoice is created or a purchase is recorded, ensuring your inventory is always accurate and up-to-date.',
      imageUrl: '/automateReport.webp',
    },
    {
      title: 'Multi-Location Stock Management',
      description:
        'Effortlessly manage inventory across multiple branches and warehouses, providing a centralized view of stock levels and facilitating smooth operations.',
      imageUrl: '/warehouseimg.webp',
    },
    {
      title: 'Batch-wise and Serial No. wise Tracking',
      description:
        'Track inventory by batch or serial number to manage expiry dates, warranties, and product history.',
      imageUrl: '/binventoryTrack.webp',
    },
    {
      title: 'Automated Bookkeeping',
      description:
        'Automatically record and post sales in the respective ledgers whenever an invoice is made. In just a few seconds, simplify your accounting processes.',
      imageUrl: '/ledger.webp',
    },
    {
      title: 'Track Product-wise Profitability',
      description:
        'Track average buying price, average selling price, and product-wise profitability with our data-packed reports.',
      imageUrl: '/profitTrack.webp',
    },
    {
      title: 'Barcode-Enabled Transactions',
      description:
        'Streamline warehouse operations by adding or scanning barcodes before sales or purchase. Save time, avoid stock confusion, and speed up processes.',
      imageUrl: '/scanner.webp',
    },
  ];

  
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, py: 5 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}
        >
          Why Choose Our Inventory Management Software?
        </Typography>

        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: { md: 'flex', xs: 'block' },
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              mb: 6,
              gap: 4,
            }}
          >
            {/* Image */}
            <Image
              src={feature.imageUrl}
              alt={feature.title}
              width={500}
              height={300}
              style={{ borderRadius: 8 }}
            />

            {/* Content */}
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {feature.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#E2007B',
                  color: 'white',
                  textTransform: 'none',
                  display: 'block',
                }}
              >
                Get Started - It's FREE
              </Button>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
