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
    id: 'accounts-crm-pro',
    title: 'Accounts & CRM Pro',
    priceLabelTop: '₹ 34,900',
    price: '₹ 29,000',
    period: 'per year, per business',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      '✓ Bank Reconciliation',
      '✓ Chart of Accounts',
      '✓ Manual Journals',
      '✓ Balance Sheet and Trial Balance',
      '✓ P&L and Income Statement',
      '✓ Cashflow Statement',
      '✓ Daybook Report',
      '✓ Auto-sync Ledgers & Vouchers',
      '✓ Personalized Onboarding',
      '✓ Create Unlimited Documents',
      '✓ 5 Users',
      '✓ Create Unlimited Sale Pipelines',
      '✓ Create Unlimited Lead Capture Forms',
      '✓ Create 150 Custom Fields',
    ],
  },
  {
    id: 'accounts-inventory-starter',
    title: 'Accounts & Inventory Starter',
    priceLabelTop: '₹ 38,000',
    price: '₹ 38,000',
    period: 'per year, per business',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      '✓ Customized User Roles & Permissions',
      '✓ Bank Reconciliation',
      '✓ Chart of Accounts',
      '✓ Manual Journals',
      '✓ Balance Sheet and Trial Balance',
      '✓ P&L and Income Statement',
      '✓ Cashflow Statement',
      '✓ Daybook Report',
      '✓ Auto-sync Ledgers & Vouchers',
      '✓ Unlimited Item Creation',
      '✓ Real-time Inventory Tracking',
      '✓ Transfer Stock',
      '✓ Packaged Items',
      '✓ Actionable Sales Reports',
      '✓ Bulk Upload Leads',
      '✓ Create Unlimited Documents',
      '✓ 5 Users',
      '✓ Create 1 Sales Pipeline',
      '✓ Create 5 Lead Capture Forms',
      '✓ Create 150 Custom Fields',
    ],
  },
  {
    id: 'accounts-inventory',
    title: 'Accounts & Inventory',
    priceLabelTop: '₹ 59,000',
    price: '₹ 59,000',
    period: 'per year, per business',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      '✓ Customized User Roles & Permissions',
      '✓ Bank Reconciliation',
      '✓ Chart of Accounts',
      '✓ Manual Journals',
      '✓ Balance Sheet and Trial Balance',
      '✓ P&L and Income Statement',
      '✓ Cashflow Statement',
      '✓ Daybook Report',
      '✓ Auto-sync Ledgers & Vouchers',
      '✓ Unlimited Item Creation',
      '✓ Real-time Inventory Tracking',
      '✓ Transfer Stock',
      '✓ Packaged Items',
      '✓ Actionable Sales Reports',
      '✓ Bulk Upload Leads',
      '✓ Inventory Valuation Reports',
      '✓ Inventory Barcode Scanner (Coming Soon)',
      '✓ Batch + Serial Wise Tracking (Coming Soon)',
      '✓ Create Unlimited Documents',
      '✓ 5 Users',
      '✓ Create 1 Sales Pipeline',
      '✓ Create 5 Lead Capture Forms',
      '✓ Create 150 Custom Fields',
    ],
  },
  {
    id: 'inventory-starter-crm-pro',
    title: 'Inventory Starter & CRM Pro',
    priceLabelTop: '₹ 28,000',
    price: '₹ 28,000',
    period: 'per year, per business',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      '✓ Customized User Roles & Permissions',
      '✓ Unlimited Item Creation',
      '✓ Real-time Inventory Tracking',
      '✓ Transfer Stock',
      '✓ Packaged Items',
      '✓ Actionable Sales Reports',
      '✓ Bulk Upload Leads',
      '✓ Facebook & Instagram Integration',
      '✓ Customizable Email Templates',
      '✓ Create Unlimited Documents',
      '✓ 5 Users',
      '✓ Create Unlimited Sale Pipelines',
      '✓ Create Unlimited Lead Capture Forms',
      '✓ Create 150 Custom Fields',
    ],
  },
  {
    id: 'inventory-crm-pro',
    title: 'Inventory & CRM Pro',
    priceLabelTop: '₹ 45,000',
    price: '₹ 45,000',
    period: 'per year, per business',
    badge: 'Most value for money',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      '✓ Customized User Roles & Permissions',
      '✓ Unlimited Item Creation',
      '✓ Real-time Inventory Tracking',
      '✓ Transfer Stock',
      '✓ Packaged Items',
      '✓ Batch-wise Inventory Tracking',
      '✓ Batch + Serial Wise Tracking (Coming Soon)',
      '✓ Actionable Sales Reports',
      '✓ Bulk Upload Leads',
      '✓ Inventory Valuation Reports',
      '✓ Inventory Barcode Scanner (Coming Soon)',
      '✓ Low Stock Alerts (Coming Soon)',
      '✓ Warehouse-wise Dashboards',
      '✓ Facebook & Instagram Integration',
      '✓ Customizable Email Templates',
      '✓ Create Unlimited Documents',
      '✓ 5 Users',
      '✓ Create Unlimited Sale Pipelines',
      '✓ Create Unlimited Lead Capture Forms',
      '✓ Create 200 Custom Fields',
    ],
  },
  {
    id: 'accounts-inventory-crm-pro',
    title: 'Accounts, Inventory & CRM Pro',
    priceLabelTop: '₹ 65,000',
    price: '₹ 65,000',
    period: 'per year, per business',
    ctaPrimary: 'Upgrade Now',
    ctaSecondary: 'Contact Sales',
    features: [
      '✓ Customized User Roles & Permissions',
      '✓ Bank Reconciliation',
      '✓ Chart of Accounts',
      '✓ Manual Journals',
      '✓ Comprehensive Financial Reports',
      '✓ Auto-sync Ledgers & Vouchers',
      '✓ Unlimited Item Creation',
      '✓ Real-time Inventory Tracking',
      '✓ Transfer Stock',
      '✓ Packaged Items',
      '✓ Batch-wise Inventory Tracking',
      '✓ Batch + Serial Wise Tracking (Coming Soon)',
      '✓ Actionable Sales Reports',
      '✓ Stock Value Report',
      '✓ Warehouse-wise Dashboards',
      '✓ Facebook & Instagram Integration',
      '✓ Customizable Email Templates',
      '✓ Create Unlimited Documents',
      '✓ 5 Users',
      '✓ Create Unlimited Sale Pipelines',
      '✓ Create Unlimited Lead Capture Forms',
      '✓ Create 200 Custom Fields',
    ],
  },
];

export default function Premiumplan() {
  const [activeId, setActiveId] = React.useState<string>('accounts-crm-pro');

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
                        <Typography sx={{ fontSize: 14 }}>{feature.replace('✓ ', '')}</Typography>
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