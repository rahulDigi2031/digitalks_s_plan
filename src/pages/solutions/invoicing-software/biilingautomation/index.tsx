import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Receipt,
  AutoAwesome,
  Palette,
  WhatsApp,
  Payment,
  SwapHoriz,
  Schedule,
  Repeat,
  CurrencyExchange,
  CloudUpload,
  Api,
  Support,
} from '@mui/icons-material';

const features = [
    {
      icon: <img src="/GST.webp" alt="Error-Free Invoicing" style={{ width: 48, height: 48 }} />,
      title: 'Error-Free Invoicing',
      description: 'Create invoices in seconds. No manual work, no errors. Whether GST or non-GST, automation ensures every invoice is accurate, professional and ready to send instantly. Helping you get paid faster.'
    },
    {
      icon: <img src="/AI.webp" alt="Auto-Assistance for Faster Invoicing" style={{ width: 48, height: 48 }} />,
      title: 'Auto-Assistance for Faster Invoicing',
      description: 'Refrens automatically pre-fills up to 80% of invoice details using past data, cutting manual work and reducing errors.'
    },
    {
      icon: <img src="/Setting.webp" alt="Custom Branding & Invoice Design" style={{ width: 48, height: 48 }} />,
      title: 'Custom Branding & Invoice Design',
      description: 'Make your documents reflect your brand. Customize invoice templates with your logo, fonts, and colors to create a consistent professional identity.'
    },
    {
      icon: <img src="/wp.webp" alt="One-Click WhatsApp & Email Sharing" style={{ width: 48, height: 48 }} />,
      title: 'One-Click WhatsApp & Email Sharing',
      description: 'Send invoices & quotes instantly. Share documents via WhatsApp or email with one click, or schedule them for later, ensuring faster communication and quicker client responses.'
    },
    {
      icon: <img src="/autopay.webp" alt="Automated Payment Reminders" style={{ width: 48, height: 48 }} />,
      title: 'Automated Payment Reminders',
      description: 'Get paid faster without the awkward follow-ups. Set auto-reminders to nudge clients about pending dues and improve cash flow.'
    },
    {
      icon: <img src="/oneclick.webp" alt="One-Click Conversion Between Documents" style={{ width: 48, height: 48 }} />,
      title: 'One-Click Conversion Between Documents',
      description: 'No retyping. Instantly convert quotes to invoices, invoices to debit notes, and more, saving time and reducing manual errors.'
    },
    {
      icon: <img src="/autopay.webp" alt="Real-Time Invoice Tracking" style={{ width: 48, height: 48 }} />,
      title: 'Real-Time Invoice Tracking',
      description: 'Know exactly when clients open invoices. Get instant notifications and follow up at the right moment to improve payment timelines.'
    },
    {
      icon: <img src="/invoicedemo.webp" alt="Recurring Invoices for Regular Clients" style={{ width: 48, height: 48 }} />,
      title: 'Recurring Invoices for Regular Clients',
      description: 'Automatically generate invoices at fixed intervals. Ideal for subscription services, retainers, or ongoing projects, save time and never miss a billing cycle.'
    },
    {
      icon: <img src="/dollar.svg" alt="Multi-Currency Invoicing" style={{ width: 48, height: 48 }} />,
      title: 'Multi-Currency Invoicing',
      description: 'Invoice clients globally without hassle. Create invoices in any currency and track forex gains or losses, making international business seamless.'
    },
    {
      icon: <img src="/bulkupload.webp" alt="Bulk Upload Invoices & Clients Data" style={{ width: 48, height: 48 }} />,
      title: 'Bulk Upload Invoices & Clients Data',
      description: 'Save hours of manual data entry. Import past invoices and client details in bulk, reducing effort and keeping records up to date effortlessly.'
    },
    {
      icon: <img src="/Setting.webp" alt="Automated Invoicing via API Integrations" style={{ width: 48, height: 48 }} />,
      title: 'Automated Invoicing via API Integrations',
      description: 'Streamline your workflows. Connect Refrens with your existing tools to generate invoices automatically without manual intervention.'
    },
    {
      icon: <img src="/chatsupport.webp" alt="24/7 Live Support When You Need It" style={{ width: 48, height: 48 }} />,
      title: '24/7 Live Support When You Need It',
      description: 'Get expert help anytime anywhere. Live chat email WhatsApp and phone support are available 24/7. So you are never stuck with an issue.'
    }
  ];

export default function BillingAutomation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 'bold',
              color: '#2c3e50',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '2.5rem' },
              lineHeight: 1.2,
              mb: 2
            }}
          >
            Billing & Automation Features in Refrens Invoice Software
          </Typography>
        </Box>

        {/* Features Grid using CSS Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: { xs: 2, sm: 3, md: 4 },
            alignItems: 'stretch'
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
                p: { xs: 2, md: 3 },
                backgroundColor: 'white',
                boxShadow: 'none',
              }}
            >
              {/* Icon */}
              <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                {feature.icon}
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 'bold',
                  color: '#2c3e50',
                  mb: 2,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.3,
                  textAlign: 'center'
                }}
              >
                {feature.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: '#5a6c7d',
                  lineHeight: 1.6,
                  fontSize: { xs: '0.875rem', md: '0.9rem' },
                  flexGrow: 1,
                  textAlign: 'left'
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}