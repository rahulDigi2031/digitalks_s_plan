'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import Image from 'next/image';

export default function SalesCRMdesigning() {
  const featureImages: string[] = [
    '/sales01.webp',
    '/sales02.webp',
    '/sales03.webp',
    '/sales04.webp',
    '/sales05.webp',
  ];

  const features = [
    {
      title: 'Automated Lead Capture',
      points: [
        'Let us do the heavy lifting with lead capture.',
        'Integrate web forms to capture leads directly into your CRM.',
        'Watch leads seamlessly flow into your CRM with ease.',
      ],
    },
    {
      title: 'Centralized Communication for Seamless Collaboration',
      points: [
        'Eliminate the need for multiple apps and inboxes.',
        'Keep all your essential messages organized and easily accessible.',
        'Enable better team collaboration in one unified platform.',
      ],
    },
    {
      title: 'Stress-Free Follow-Ups',
      points: [
        'Stay on track with automated follow-up reminders.',
        'Never miss a lead with your personal follow-up guardian angel.',
        'Ensure consistent communication with your prospects.',
      ],
    },
    {
      title: 'Sales Management Simplified',
      points: [
        'Handle leads, communicate with prospects, and manage payments.',
        'Send quotations, create invoices, and collect payments all in one place.',
        'Simplify your sales process and boost efficiency.',
      ],
    },
    {
      title: 'Capture Indiamart Leads into Refrens Automatically',
      points: [
        'Automatically connect your Indiamart account to capture all inquiries.',
        'Integrate WhatsApp messages, emails, quotations, and payments effortlessly.',
        'Save time and streamline your lead management process.',
      ],
    },
  ];

  return (
    <>
      <main>
        <Container maxWidth="lg">
          {/* Heading */}
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
              Sales CRM Designed to Help You Close Deals Faster
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Consolidate your sales process with Refrens
            </Typography>
          </Box>

          {/* Feature Rows */}
          {features.map((feature, idx) => {
            const isAlt = idx % 2 === 1;
            return (
              <Box
                key={feature.title}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 6,
                  alignItems: 'center',
                  mb: { xs: 6, md: 10 },
                }}
              >
                {/* Image */}
                <Box sx={{ flex: 1, order: { xs: 1, md: isAlt ? 2 : 1 } as any }}>
                  <Box
                    component="img"
                    src={featureImages[idx] ?? `/feature-img-${idx + 1}.webp`}
                    alt={feature.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                {/* Text */}
                <Box sx={{ flex: 1, order: { xs: 2, md: isAlt ? 1 : 2 } as any }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                    {feature.title}
                  </Typography>
                  <List dense>
                    {feature.points.map((point, i) => (
                      <ListItem key={i} sx={{ pl: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          {/* Optionally use an icon like CheckCircleIcon */}
                        </ListItemIcon>
                        <Typography variant="body2" color="text.secondary">
                          {point}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: 'none',
                      mt: 2,
                      cursor: 'pointer',
                      color: '#8A59F5',
                      fontWeight:800,
                    }}
                  >
                    Get Started 
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Container>
      </main>
    </>
  );
}
