'use client'

import { Box, Container, Typography } from "@mui/material"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import LayersIcon from '@mui/icons-material/Layers';
import LabelIcon from '@mui/icons-material/Label';
import ChatIcon from '@mui/icons-material/Chat';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import NoteIcon from '@mui/icons-material/Note';
import ReceiptIcon from '@mui/icons-material/Receipt';

export default function SalesWorkFlow() {
    return (
        <>
            <Box>
                <Container maxWidth="lg">
                    <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' , mt:4 }}>
                        Optimize Your Sales Workflow With Refrens Sales CRM Solution
                    </Typography>
                   
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 4 }}>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <AttachMoneyIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Capture Leads
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Capture & add leads easily across all channels including your own business profile on Refrens
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <DescriptionIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Lead Capture Form
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                A fully customisable form that can be embedded into your website to capture leads directly.
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <WidgetsIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Add Custom Fields
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Capture more than just emails and phone numbers with unlimited Custom Fields for all your pipelines
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <ViewColumnIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Multiple Sales Pipelines
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Manage sales pipelines for different products and services. Move leads easily within pipelines
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <LayersIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Manage Unlimited Stages
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Customize lead stages according to different follow-up and manage them to never miss out on business
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <LabelIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Label Every Lead
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Label and tag every lead by source, persona, business type and more for 1-click filters and reports
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <ChatIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Send Emails/WhatsApp
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Send & manage all communication to your leads via email, chat or WhatsApp from within Refrens
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <BarChartIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Intelligent Insights & Reports
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Actionable turnaround time insights & weighted pipeline report to calculate sales & revenue probability
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <GroupsIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Multiple Team Members
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Add multiple team members, assign leads to sales reps and control their access levels
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <EventIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Automate Follow-ups
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Make your leads travel faster down the pipeline with personalized messaging and follow-ups
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <NoteIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Leave Internal Notes
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Capture every relevant interaction and add relevant context for your team with private internal notes
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 1 calc(33.333% - 24px)', p: 2, textAlign: 'center' }}>
                            <ReceiptIcon sx={{ fontSize: 48, mb: 2, display: 'block', mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                                Send Quotations/Invoices
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                With our Refrens accounting and inventory suite, drive conversions and revenue faster and easier
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}