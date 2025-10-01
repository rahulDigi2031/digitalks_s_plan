"use client";

import React from "react";
import { Box, Container, Typography, Button, List, ListItem, ListItemIcon, TextField } from "@mui/material";
import Image from "next/image";
import InvoiceCreate from "../solutions/invoicing-software/InvoiceCreator";
import Footer from "../../../Components/footer";
// import CheckCircleIcon from "@mui/icons-material"


export default function AwardsAchievedPage() {
const featureImages: string[] = [
    "/inv01.webp",
    "/inv02.webp",
    "/inv03.webp",
    "/inv04.webp",
    "/inv05.webp",
    "/inv06.webp",
    "/inv07.webp",
    "/inv08.webp",
];
  
const features = [
        {
          title: "Create Invoices, Quotations & More",
          points: [
            "Make GST-compliant invoices, quotations, purchase orders, and bills",
            "Share invoices online, track payment status, send reminders, and get paid fast",
            "Customize invoice design, branding, numbering, and currency",
            "Add bank/payment details, terms, and notes on every invoice",
            "Print, download, email, and WhatsApp invoices instantly"
          ]
        },
        {
          title: "GST Compliance & Reports",
          points: [
            "Automatically track IGST, CGST, SGST, and CESS on invoices",
            "One-click download of GSTR-1, GSTR-2B, GSTR-3B data",
            "Avoid mismatches with automated reconciliation and smart summaries",
            "Stay compliant with timely alerts and scheduled reports"
          ]
        },
        {
          title: "Users Roles & Permissions",
          points: [
            "Secure your data with team access control and user activity logs",
            "Add unlimited users, set permissions by role, and track actions easily",
            "Control who can create, approve, view, and edit invoices, inventory, and compliance reports"
          ]
        },
        {
          title: "Inventory & Warehouse Management",
          points: [
            "Real-time stock level and batch tracking across multiple locations",
            "Prevent stock-outs and manage inventory transfers easily",
            "Accurate valuation on every sale/purchase across warehouses",
            "Search, filter, and organize inventory efficiently"
          ]
        },
        {
          title: "eWay Bill Generation",
          points: [
            "Auto-fetch invoice data and create eWay bills for GST shipments in seconds",
            "Download eWay bills and share with clients instantly",
            "Avoid fines with timely reminders and tracking",
            "Bulk import and export for faster processing"
          ]
        },
        {
          title: "e-Invoicing Software",
          points: [
            "Easily generate IRN and QR codes for GST e-invoices",
            "Upload, print, and share digitally signed e-invoices",
            "Automatic e-invoice validation and compliance checks",
            "Import/export invoice data for bulk GST compliance"
          ]
        },
        {
          title: "Expense Management",
          points: [
            "Record all expenses, receipts, and payments with expense categories",
            "Attach bills, approve requests, and generate expense reports",
            "Apply GST rules and keep books accurate for audits"
          ]
        },
        {
          title: "Client & Vendor Management",
          points: [
            "Manage GSTN, contact details, and segment clients/vendors",
            "Easy search, sorting, and grouping of contacts",
            "Download master lists or sync with billing easily"
          ]
        }
];

  return (
    <>
   
      <main>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.6rem", md: "2.6rem" },
              mb: { xs: 3, md: 6 },
            }}
          >
            Trusted & Awarded by GetApp, Capterra, and More
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-start", md: "center" },
              gap: { xs: 3, md: 5 },
              px: { xs: 2, md: 0 },
              overflowX: { xs: "auto", md: "visible" },
              flexWrap: { xs: "nowrap", md: "nowrap" },
              py: { xs: 2, md: 3 },
            }}
          >
            <Box sx={{ flex: "0 0 auto" }}>
              <Image
                src="/platformimage.webp"
                alt="Badge 1"
                width={1200}
                height={50}
                style={{ height: "auto", width: "auto" , objectFit:"contain"}}
                priority={true}
              />
            </Box>
          </Box>

          <Box sx={{ textAlign: "center", mt: { xs: 4, md: 6 } }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#E4007C",
                color: "#fff",
                px: 3,
                py: 1.2,
                fontWeight: 600,
                textTransform: "none",
                fontSize: { xs: "0.95rem", md: "1rem" },
                "&:hover": { bgcolor: "#c00067" },
              }}
            >
              Create Your FREE Invoice
            </Button>
          </Box>
        </Container>

        <Container maxWidth="lg">
    {/* Heading */}
    <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
        Billing & Compliance Features of Digitalks Invoicing Software
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Powerful tools to create, manage, and stay compliant — all in one place.
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
            mb: { xs: 6, md: 10 }
          }}
        >
          {/* Image */}
          <Box sx={{ flex: 1, order: { xs: 1, md: isAlt ? 2 : 1 } as any }}>
            <Box component="img" src={featureImages[idx] ?? `/feature-img-${idx+1}.webp`} alt={feature.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
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
                    {/* <CheckCircleIcon color="success" fontSize="small" /> */}
                  </ListItemIcon>
                  <Typography variant="body2" color="text.secondary">
                    {point}
                  </Typography>
                </ListItem>
              ))}
            </List>
            <Typography variant="body1" sx={{ textTransform: 'none', mt: 2 , cursor:"pointer",color:"#8A59F5"}}>
              Get Started — it's FREE
            </Typography>
          </Box>
        </Box>
      );
    })}
        </Container>

        {/* Invoice format */}
        <Box>
            <InvoiceCreate />
        </Box>

      </main>

    </>
  );
}
