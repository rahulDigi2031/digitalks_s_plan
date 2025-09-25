import React from 'react';
import { Box, Container, Paper, Stack, Typography, Button, Chip } from '@mui/material';
import { useRouter } from 'next/router';

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
    period: 'per year',
    ctaPrimary: 'Continue with Basic',
    ctaSecondary: '',
    features: [
      'Customize Document Columns & Formulas',
      'Share Document via Email in 1-click',
      'Automated Payment Reminders',
      'Automatically Collect Client Testimonials',
      'Expense Tracking',
      'Embedded Forms',
      'Client Management',
      'Send Festive Greetings',
      'Secure All Your Data on Cloud',
      'Multi-device Support',
      '24x7 Human Support (Chat/Email/Phone)',
      'Create 15 Documents',
      'Create 1 Sales Pipeline',
      'Create 5 Lead Capture Forms',
      'Create 50 Custom Fields',
      '2 Users',
    ],
  },
  {
    id: 'inventory-starter',
    title: 'Inventory Starter',
    price: '₹ 20,900',
    period: 'per year, per business',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      'Unlimited Item Creation',
      'Real-Time Tracking',
      'Warehouse-wise Dashboards',
      'Order and Overstock Point',
      'Stock Value Report',
      'Warehouse-Exclusive Pricing',
      'Transfer Stock',
      'Packaged Items',
      'Partial Document Conversion (Additionally Chargeable)',
      'Bulk Document Conversion (Additionally Chargeable)',
      'Remove Referrers Branding',
      'Template Customization',
      'Create Unlimited Documents',
      '2 Users',
      'Create 1 Sales Pipeline',
      'Create 5 Lead Capture Forms',
      'Create 100 Custom Fields',
    ],
  },
  {
    id: 'inventory-lite',
    title: 'Inventory Lite',
    price: '₹ 34,900',
    period: 'per year, per business',
    badge: 'Most value for money',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      'Batch-wise Inventory Tracking',
      'Batch Summary in Documents',
      'Partial Document Conversion (Additionally Chargeable)',
      'Bulk Document Conversion (Additionally Chargeable)',
      'Remove Referrers Branding',
      'Template Customization',
      '1-click WhatsApp Sharing',
      'Email Tracking & Scheduling',
      'Recurring Invoices',
      'Actionable Insights & Reports',
      'Create Unlimited Documents',
      '2 Users',
      'Create 1 Sales Pipeline',
      'Create 5 Lead Capture Forms',
      'Create 100 Custom Fields',
      'Manage 3 Warehouses',
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory',
    price: '₹ 38,900',
    period: 'per year, per business',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      'Batch-wise Expiry Report',
      'Partial Document Conversion',
      'Bulk Document Conversion (Additionally Chargeable)',
      'Inventory Valuation Reports (Coming Soon)',
      'Low Stock Alerts (Coming Soon)',
      'Inventory Barcode Scanner (Coming Soon)',
      'Batch-wise Serial Wise Tracking (Coming Soon)',
      'Freya AI Accounting Assistant (Additionally Chargeable)',
      'Create Unlimited Documents',
      '5 Users',
      'Create 1 Sales Pipeline',
      'Create 5 Lead Capture Forms',
      'Manage 3 Warehouses',
      'Create 200 Custom Fields',
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
  'inventory-starter': {
    '3m': { price: '₹ 7,000', period: 'for 3 months, per business' },
    '1y': { price: '₹ 20,900', oldPrice: '₹ 28,000', period: 'for 1 year, per business' },
    '3y': { price: '₹ 42,000', oldPrice: '₹ 84,000', period: 'for 3 years, per business' }
  },
  'inventory-lite': {
    '3m': { price: '₹ 12,500', period: 'for 3 months, per business' },
    '1y': { price: '₹ 34,900', oldPrice: '₹ 50,000', period: 'for 1 year, per business' },
    '3y': { price: '₹ 75,000', oldPrice: '₹ 1,50,000', period: 'for 3 years, per business' }
  },
  'inventory': {
    '3m': { price: '₹ 13,000', period: 'for 3 months, per business' },
    '1y': { price: '₹ 38,900', oldPrice: '₹ 52,000', period: 'for 1 year, per business' },
    '3y': { price: '₹ 78,000', oldPrice: '₹ 1,56,000', period: 'for 3 years, per business' }
  }
};

type InventoryPlansProps = {
  duration: string;
};

export default function InventoryPlans({ duration }: InventoryPlansProps) {
  const [activeId, setActiveId] = React.useState<string>('basic');
  const router = useRouter()

  const getPlanPricing = (planId: string) => {
    return pricingData[planId]?.[duration] || pricingData[planId]?.['3m'];
  };

  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          gap={2}
          flexWrap={{ xs: 'wrap', lg: 'nowrap' }}
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
                  border: `1px solid ${isActive ? '#7C3DDA' : '#7C3DDA'}`,
                  p: 2,
                  width: { xs: '100%', lg: '22%' },
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
                    onClick={() => router.push('./contact')}
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
