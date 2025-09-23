import React from 'react';
import { Box, Container, Paper, Stack, Typography, Button, Chip } from '@mui/material';

type Plan = {
  id: string;
  title: string;
  priceLabelTop?: string;
  price: string;
  period: string;
  badge?: string;
  popular?: boolean;
  ctaPrimary: string;
  ctaSecondary: string;
  features: string[];
};

const plans: Plan[] = [
  {
    id: 'basic',
    title: 'Basic',
    priceLabelTop: 'Free',
    price: '₹ 0',
    period: 'for 3 months',
    ctaPrimary: 'Continue with Basic',
    ctaSecondary: '',
    features: [
      'Customize Document Columns & Formulas',
      'Share Document via Email in 1-click',
      'Automatic Payment Reminders',
      'Automatically Collect Client Testimonials',
      'Experience Tracking',
      'Embedded Forms',
      'Client Management',
      'Send Festive Greetings',
      'Secure All Your Data on Cloud',
      'Multi-device Support',
      '24x7 Human Support (Chat/Email/Phone)',
      '2 Users',
      'Create 15 Documents',
      'Create 1 Sales Pipeline',
      'Create 5 Lead Capture Forms',
      'Create 50 Custom Fields',
    ],
  },
  {
    id: 'accounts-lite',
    title: 'Accounts Lite',
    price: '₹ 1,600',
    period: 'for 3 months, per business',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      'Freya AI Accounting Assistant (Additionally Chargeable)',
      'Remove Refrens Branding',
      'Template Customization',
      'Payment Gateway Integration',
      '1-click WhatsApp Sharing',
      'Email Tracking & Scheduling',
      'Recurring Invoices',
      'Actionable Insights & Reports',
      'Create Unlimited Documents',
      '2 Users',
      'Create 1 Sales Pipeline',
      'Create 5 Lead Capture Forms',
      'Create 100 Custom Fields',
    ],
  },
  {
    id: 'accounts-gst',
    title: 'Accounts GST',
    price: '₹ 4,900',
    period: 'for 3 months, per business',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      'Freya AI Accounting Assistant (Additionally Chargeable)',
      'Automated GSTR-1 Reports',
      'Generate E-Way Bills',
      'E-invoices & Bulk IRN Generation',
      'E-way Bills with IRN',
      "Verify & Auto-fill Client's GST Details",
      'Emails From Your Own Domains',
      'Download GSTR-2B Reports',
      'GSTR-2B Auto-Reconciliation',
      'GSTR-3B Filing (Coming Soon)',
      'Create Unlimited Documents',
      '3 Users',
      'Create 1 Sales Pipeline',
      'Create 5 Lead Capture Forms',
      'Create 100 Custom Fields',
    ],
  },
  {
    id: 'accounts',
    title: 'Accounts',
    price: '₹ 6,300',
    period: 'for 3 months, per business',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      'Freya AI Accounting Assistant (Additionally Chargeable)',
      'Customised User Roles & Permissions',
      'Bank Reconciliation',
      'Chart of Accounts',
      'Multi Journals',
      'Auto-sync Ledgers & Vouchers',
      'Schedule Balance Sheet & Trial Balance',
      'P&L and Income Statement',
      'Cashflow Statement',
      'Day Book Report',
      'Create Unlimited Documents',
      '3 Users',
      'Create 1 Sales Pipeline',
      'Create 5 Lead Capture Forms',
      'Create 150 Custom Fields',
    ],
  },
  {
    id: 'books-ultimate',
    title: 'Books Ultimate',
    price: '₹ 36,000',
    period: 'for 3 months, per business',
    badge: 'Most value for money',
    popular: true,
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      'Dedicated Accountant',
      'Complete Accounting and Bookkeeping',
      'GSTR-3B Reconciliation and Filing',
      'GSTR-9 and 9C Audit Reports',
      'TDS/TCS Reconciliation and Filing',
      'FEMA/SEBI/ROC Compliance Services',
      'Strategic Tax Planning',
      'Professional Tax Registrations',
      'Expert assistance on compliance and taxation issues',
      'Up to 8 hours of consultation with dedicated audit support',
      'Create Unlimited Sale Pipelines',
      'Unlimited Lead Capture Forms',
      'Manage 5 Warehouses',
      'Create 215 Custom Fields',
    ],
  },
];

export default function AccountingPlans() {
  const [activeId, setActiveId] = React.useState<string>('basic');

  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          gap={2}
          flexWrap={{ xs: 'wrap', lg: 'nowrap' }}
          justifyContent={{ xs: 'center', lg: 'space-between' }}
          alignItems="stretch"
        >
          {plans.map((plan) => {
            const isActive = activeId === plan.id;
            return (
            <Paper
              key={plan.id}
              elevation={isActive ? 6 : 1}
              sx={{
                borderRadius: 2,
                border: `1px solid ${isActive ? '#7C3DDA' : '#7C3DDA'}`,
                p: 2,
                width: { xs: '100%', lg: '19%' },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 520,
              }}
              onClick={() => setActiveId(plan.id)}
            >
              {plan.badge && (
                <Chip
                  size="small"
                  label={plan.badge}
                  color="warning"
                  sx={{ position: 'absolute', top: -10, right: 12 }}
                />
              )}

              <Stack spacing={1} sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700 }}>{plan.title}</Typography>
                {plan.priceLabelTop && (
                  <Typography sx={{ color: '#6b7280', fontWeight: 500 }}>
                    {plan.priceLabelTop}
                  </Typography>
                )}
                <Typography sx={{ fontSize: 28, fontWeight: 800 }}>{plan.price}</Typography>
                <Typography sx={{ color: '#6b7280', fontSize: 12 }}>{plan.period}</Typography>

                <Button
                  fullWidth
                  className="!normal-case"
                  sx={{
                    mt: 1,
                    bgcolor: isActive ? '#7C3DDA' : 'transparent',
                    color: isActive ? '#ffffff' : '#7C3DDA',
                    border: `1px solid #7C3DDA`,
                    '&:hover': {
                      bgcolor: isActive ? '#6b2fd4' : 'rgba(124,61,218,0.06)',
                      borderColor: '#7C3DDA',
                    },
                  }}
                >
                  {plan.ctaPrimary}
                </Button>
                <Button variant="text" fullWidth className="!normal-case">
                  {plan.ctaSecondary}
                </Button>

                <Typography sx={{ mt: 1, fontWeight: 600, fontSize: 12, color: '#64748b' }}>
                  Features
                </Typography>
                <Stack spacing={0.75} sx={{ pr: 1 }}>
                  {plan.features.map((feature) => (
                    <Stack key={feature} direction="row" spacing={1} alignItems="flex-start">
                      <span className="text-green-600">✓</span>
                      <Typography sx={{ fontSize: 14 }}>{feature}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Paper>
            );
          })}
        </Stack>

        <Typography sx={{ mt: 2, color: '#6b7280', fontSize: 12, textAlign: 'center' }}>
          *All prices are exclusive of GST
        </Typography>
      </Container>
    </Box>
  );
}


