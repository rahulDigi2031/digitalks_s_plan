import React from 'react';
import { Box, Container, Paper, Stack, Typography, Button, Chip } from '@mui/material';

type Plan = {
  id: string;
  title: string;
  oldPrice?: string;
  priceLabelTop?: string;
  price: string;
  period: string;
  badge?: string;
  popular?: boolean;
  ctaPrimary: string;
  ctaSecondary?: string;
  features: string[];
};

const plans: Plan[] = [
  {
    id: 'basic',
    title: 'Basic',
    priceLabelTop: 'Free',
    price: '₹ 0',
    period: 'per year',
    ctaPrimary: 'Continue with Basic',
    features: [
      'Customize Document Columns & Formulas',
      'Share Documents via Email in 1‑click',
      'Automatic Payment Reminders',
      'Automatically Collect Client Testimonials',
      'Expense Tracking',
      'Embedded Forms',
      'Client Management',
      'Secure All Your Data on Cloud',
      'Multi‑device Support',
      '24x7 Human Support (Chat/Email/Phone)',
      '2 Users',
      'Create 15 Documents',
      'Create 1 Sales Pipeline',
      'Create 5 Lead Capture Forms',
      'Create 50 Custom Fields',
    ],
  },
  {
    id: 'crm-essential',
    title: 'CRM Essential',
    oldPrice: '₹ 12,400',
    price: '₹ 10,500',
    period: 'per year, per business',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      'Actionable Sales Reports',
      'Bulk Upload Leads',
      'Remove Refrens Branding',
      'Template Customization',
      'Payment Gateway Integration',
      '1‑click WhatsApp Sharing',
      'Email Tracking & Scheduling',
      'Recurring Invoices',
      'Working Integrations',
      'Bulk Upload Clients',
      'Create Unlimited Documents',
      '3 Users',
      'Create 2 Sales Pipelines',
      'Create 5 Lead Capture Forms',
      'Create 100 Custom Fields',
    ],
  },
  {
    id: 'crm-pro',
    title: 'CRM Pro',
    oldPrice: '₹ 14,400',
    price: '₹ 12,000',
    period: 'per year, per business',
    badge: 'Most value for money',
    popular: true,
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      'Customised User Roles & Permissions',
      'Nidhi Integration',
      'Facebook & Instagram Integration',
      'Variable Email Pricing',
      'Create Unlimited Documents',
      '5 Users',
      'Create Unlimited Sale Pipelines',
      'Create Unlimited Lead Capture Forms',
      'Create 150 Custom Fields',
    ],
  },
];

type PricingData = {
  [key: string]: {
    [duration: string]: {
      price: string;
      oldPrice?: string;
      period: string;
    };
  };
};

const pricingData: PricingData = {
  'basic': {
    '3m': { price: '₹ 0', period: 'for 3 months' },
    '1y': { price: '₹ 0', period: 'for 1 year' },
    '3y': { price: '₹ 0', period: 'for 3 years' }
  },
  'crm-essential': {
    '3m': { price: '₹ 3,100', period: 'for 3 months, per business' },
    '1y': { price: '₹ 10,500', oldPrice: '₹ 12,400', period: 'for 1 year, per business' },
    '3y': { price: '₹ 25,200', oldPrice: '₹ 37,200', period: 'for 3 years, per business' }
  },
  'crm-pro': {
    '3m': { price: '₹ 3,500', period: 'for 3 months, per business' },
    '1y': { price: '₹ 12,000', oldPrice: '₹ 14,400', period: 'for 1 year, per business' },
    '3y': { price: '₹ 30,000', oldPrice: '₹ 43,200', period: 'for 3 years, per business' }
  }
};

type SalesPlansProps = {
  duration: string;
};

export default function SalesPlans({ duration }: SalesPlansProps) {
  const [activeId, setActiveId] = React.useState<string>('basic');

  const getPlanPricing = (planId: string) => {
    return pricingData[planId]?.[duration] || pricingData[planId]?.['3m'];
  };

  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          gap={2}
          flexWrap={{ xs: 'wrap', lg: 'wrap' }}
          justifyContent={{ xs: 'center', lg: 'space-evenly' }}
          alignItems="stretch"
        >
          {plans.map((plan) => {
            const isActive = activeId === plan.id;
            const currentPricing = getPlanPricing(plan.id);
            return (
              <Paper
                key={plan.id}
                elevation={isActive ? 6 : 1}
                sx={{
                  borderRadius: 2,
                  border: '1px solid #7C3DDA',
                  p: 2,
                  width: { xs: '100%', lg: '30%' },
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
                  {currentPricing?.oldPrice && (
                    <Typography sx={{ color: '#9ca3af', textDecoration: 'line-through', fontSize: 12 }}>
                      {currentPricing.oldPrice}
                    </Typography>
                  )}
                  <Typography sx={{ fontSize: 28, fontWeight: 800 }}>{currentPricing?.price || plan.price}</Typography>
                  <Typography sx={{ color: '#6b7280', fontSize: 12 }}>{currentPricing?.period || plan.period}</Typography>

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
                  {plan.ctaSecondary && (
                    <Button variant="text" fullWidth className="!normal-case">
                      {plan.ctaSecondary}
                    </Button>
                  )}

                  <Typography sx={{ mt: 1, fontWeight: 600, fontSize: 12, color: '#64748b' }}>
                    Includes everything in Basic, plus
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


