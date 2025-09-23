import React from 'react';
import { Box, Container, Typography, Stack, Chip } from '@mui/material';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Lazy-load category components
const AccountingPlans = dynamic(() => import('./accounting'));
const CrmSales = dynamic(() => import('./sales'));
const InventoryPlans = dynamic(() => import('./inventory'));
const Premiumplan = dynamic(() => import('./premium'))

type Category = { key: string; label: string; desc: string };
type Duration = { key: string; label: string; discount?: string };

const categories: Category[] = [
    { key: 'accounting', label: 'Accounting', desc: 'Advanced Accounting Solutions' },
    {
        key: 'sales',
        label: 'Sales CRM',
        desc: 'Lead Management System',
    },
    {
        key: 'inventory',
        label: 'Inventory',
        desc: 'Inventory tracking and Management',
    },
    {
        key: 'premium',
        label: 'Premium Bundles',
        desc: 'Most Comprehensive Packages',
    },
];

const durations: Duration[] = [
    { key: '3m', label: '3 months' },
    { key: '1y', label: '1 year', discount: 'Save 12%' },
    { key: '3y', label: '3 years', discount: 'Save 27%' },
];

export default function PlansHeader() {
    const router = useRouter();

    const initialCat = (router.query.cat as string) || 'inventory';

    const [activeCat, setActiveCat] = React.useState<string>(initialCat);
    const [activeDuration, setActiveDuration] = React.useState<string>('3m');

    React.useEffect(() => {
        const keyFromQuery = (router.query.cat as string) || 'inventory';
        setActiveCat(keyFromQuery);
    }, [router.query.cat]);

    const onSelectCat = (cat: Category) => {
        setActiveCat(cat.key);
        router.push(
            { pathname: router.pathname, query: { ...router.query, cat: cat.key } },
            undefined,
            { shallow: true }
        );
    };

    const onSelectDuration = (key: string) => {
        setActiveDuration(key);
    };

    return (
        <Box sx={{ bgcolor: '#fff' }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* Heading */}
                <Typography
                    component="h1"
                    sx={{
                        fontSize: { xs: 24, md: 38 },
                        fontWeight: 700,
                        textAlign: 'center',
                        mb: 3,
                    }}
                >
                    Plans built for your needs
                </Typography>

                {/* Category Tabs */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }} // Change direction based on screen size
                    spacing={0}
                    justifyContent="center"
                    sx={{
                        mb: 3,
                        border: '1px solid #e5e7eb',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        mx: 'auto',
                        maxWidth: { xs: '100%', md: 960 },
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                        bgcolor: '#fff',
                    }}
                >
                    {categories.map((cat) => {
                        const isActive = activeCat === cat.key;
                        return (
                            <Box
                                key={cat.key}
                                onClick={() => onSelectCat(cat)}
                                sx={{
                                    px: 4,
                                    py: 2,
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    borderBottom: { xs: '1px solid #e5e7eb', sm: 'none' }, // Add a bottom border on mobile for separation
                                    bgcolor: isActive ? '#f9fafb' : '#ffffff',
                                    '&:last-of-type': { borderBottom: 'none' },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: isActive ? 500 : 300,
                                        fontSize: { xs: 16, sm: 17 }, // Adjust font size based on screen size
                                    }}
                                >
                                    {cat.label}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: 10, sm: 12 }, // Adjust font size for smaller screens
                                        color: '#6b7280',
                                    }}
                                >
                                    {cat.desc}
                                </Typography>
                            </Box>
                        );
                    })}
                </Stack>


                {/* Duration Tabs */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack
                        direction="row"
                        spacing={0}
                        justifyContent="center"
                        sx={{
                            border: '1px solid #e5e7eb',
                            borderRadius: '12px',
                            display: 'inline-flex',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                            bgcolor: '#fff',
                            overflow: 'hidden',
                        }}
                    >
                        {durations.map((dur, idx) => {
                            const isActive = activeDuration === dur.key;
                            return (
                                <Box
                                    key={dur.key}
                                    onClick={() => onSelectDuration(dur.key)}
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        cursor: 'pointer',
                                        textAlign: 'center',
                                        borderRight:
                                            idx !== durations.length - 1 ? '1px solid #e5e7eb' : 'none',
                                        bgcolor: isActive ? '#f9fafb' : '#ffffff',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: isActive ? 400 : 300,
                                            fontSize: 16,
                                        }}
                                    >
                                        {dur.label}
                                    </Typography>
                                    {dur.discount && (
                                        <Chip
                                            label={dur.discount}
                                            color="success"
                                            size="small"
                                            sx={{
                                                mt: 0.5,
                                                fontSize: 12,
                                                height: 18,
                                                borderRadius: '6px',
                                            }}/>
                                        )}
                                </Box>
                            );
                        })}
                    </Stack>
                </Box>
            </Container>

            {/* Category content area */}
            <Box sx={{ mt: 0 }}>
                {activeCat === 'accounting' && <AccountingPlans />}
                {activeCat === 'sales' && <CrmSales />}
                {activeCat === 'inventory' && <InventoryPlans />}
                {activeCat === 'premium' && <Premiumplan />}
            </Box>
        </Box>
    );
}
