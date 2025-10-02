"use client";

import { Container, Typography, List, ListItem, ListItemText, Box } from "@mui/material";

export default function IntroOFinvoice() {
  return (

    <Box sx={{bgcolor:"#F7FAFF" , width:"100%" , mt:3}}>
             <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Best Invoicing and Billing Software in India
      </Typography>

      {/* What is billing and invoicing software? */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        What is billing and invoicing software?
      </Typography>
      <Typography variant="body1" paragraph>
        Invoicing software, also known as billing software, is an online tool that helps businesses create, manage, and send invoices, track payments,
        manage taxes, and automate billing processes. Invoicing software helps you streamline financial operations, reduces manual errors, and makes
        it easier for businesses to get paid on time.
      </Typography>
      <Typography variant="body1" paragraph>
        Whether you’re a small business, startup, or growing enterprise, invoicing software plays a crucial role in managing your cash flow,
        maintaining professional records, and staying tax-compliant.
      </Typography>

      {/* What can invoicing software do? */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        What can invoicing software do for your business?
      </Typography>

      {/* 1. Professional Invoicing Capabilities */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        1. Professional Invoicing Capabilities
      </Typography>
      <List dense>
        {[
          "Create GST and non-GST invoices in seconds",
          "Use customizable templates that match your brand",
          "Add items, tax rates, terms, discounts, shipping, and more",
          "Send invoices via email, WhatsApp, PDF, or print directly",
          "Accept payments through UPI, QR code, net banking, credit card, etc.",
          "Schedule recurring invoices for repeat clients",
        ].map((text, i) => (
          <ListItem key={i} sx={{ pl: 2 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      {/* 2. GST Compliance & Tax Reporting */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        2. GST Compliance & Tax Reporting
      </Typography>
      <List dense>
        {[
          "Automatically applies correct CGST, SGST, IGST rates",
          "Instantly generates e-invoices with IRN & QR codes",
          "Integrated e-way bill creation for goods transport",
          "Generate ready-to-file GSTR-1, GSTR-2, GSTR-3B, GSTR-9 reports",
          "Avoid manual calculation errors and stay audit-ready",
        ].map((text, i) => (
          <ListItem key={i} sx={{ pl: 2 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      {/* 3. Inventory & Warehouse Management */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        3. Inventory & Warehouse Management
      </Typography>
      <List dense>
        {[
          "Real-time tracking of stock availability and movement",
          "Get alerts when stock is low or about to expire",
          "Track product-wise sales, returns, and warehouse transfers",
          "Automatically link inventory usage to invoices and delivery challans",
        ].map((text, i) => (
          <ListItem key={i} sx={{ pl: 2 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      {/* 4. Complete Accounting Capabilities */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        4. Complete Accounting Capabilities
      </Typography>
      <List dense>
        {[
          "Manage ledgers, account groups, and vouchers",
          "Record receivables, payables, expenses, and advances",
          "Automatically calculate taxes like GST and TDS",
          "Maintain cash flow visibility at all times",
          "Create debit/credit notes to fix invoice errors",
        ].map((text, i) => (
          <ListItem key={i} sx={{ pl: 2 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      {/* 5. Powerful Reports & Insights */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        5. Powerful Reports & Insights
      </Typography>
      <List dense>
        {[
          "Profit & Loss Statements, Balance Sheets, Trial Balance, Sales & Purchase Reports",
          "Tax Summary Reports (TDS, HSN/SAC, GST)",
          "Drill down to client-wise, item-wise, or date-wise analytics",
          "Identify cash flow gaps, top customers, best-selling products",
        ].map((text, i) => (
          <ListItem key={i} sx={{ pl: 2 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      {/* 6. CRM Integration & Client Management */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        6. CRM Integration & Client Management
      </Typography>
      <List dense>
        {[
          "Add and manage client and vendor details",
          "Maintain a full history of quotations, invoices, and payments",
          "Get alerts on payment due dates",
          "Assign team roles to sales, finance, or support",
          "Share documents or quotations with clients using in-app communication tools",
        ].map((text, i) => (
          <ListItem key={i} sx={{ pl: 2 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      {/* 7. Ease of Use & Accessibility */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        7. Ease of Use & Accessibility
      </Typography>
      <List dense>
        {[
          "Intuitive and beginner-friendly interface",
          "No steep learning curve or training needed",
          "Available on desktop, tablet, and mobile (Android & iOS apps)",
          "Cloud-based platform with auto backup and real-time sync",
          "Role-based access control for team security and privacy",
        ].map((text, i) => (
          <ListItem key={i} sx={{ pl: 2 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      {/* Why do businesses need invoicing software? */}
<Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
  Why do businesses need invoicing software?
</Typography>
<Typography variant="body1" paragraph>
  Every business, whether small, medium, or growing, deals with daily financial transactions. From{" "}
  <span style={{ color: "#9c27b0", fontWeight: "bold" }}>generating invoices</span> and recording expenses to tracking payments
  and calculating taxes, each transaction must be accurately recorded and managed. That’s where invoicing software becomes essential.
</Typography>

{/* 1. To Track Every Sale and Expense Accurately */}
<Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
  1. To Track Every Sale and Expense Accurately
</Typography>
<List dense>
  {[
    "Who bought what and when?",
    "At what rate was a product sold?",
    "How much was spent on raw materials, salaries, or machinery?",
  ].map((text, i) => (
    <ListItem key={i} sx={{ pl: 2 }}>
      <ListItemText primary={text} />
    </ListItem>
  ))}
</List>
<Typography variant="body2" paragraph>
  Without a system in place, answering these basic questions becomes time-consuming and error-prone.
</Typography>

{/* 2. To Know What’s Due and What’s Paid */}
<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  2. To Know What’s Due and What’s Paid
</Typography>
<List dense>
  {[
    "How much are your clients supposed to pay you?",
    "What are your pending payments to vendors or service providers?",
    "What is your cash flow situation right now?",
  ].map((text, i) => (
    <ListItem key={i} sx={{ pl: 2 }}>
      <ListItemText primary={text} />
    </ListItem>
  ))}
</List>
<Typography variant="body2" paragraph>
  Invoicing software gives you a real-time view of receivables and payables, helping you plan better and avoid delays.
</Typography>

{/* 3. To Improve Business Decisions */}
<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  3. To Improve Business Decisions
</Typography>
<Typography variant="body2" paragraph>
  By maintaining detailed transaction records, businesses can:
</Typography>
<List dense>
  {[
    "Analyze performance",
    "Identify top clients or products",
    "Spot unnecessary expenses",
    "Take corrective actions",
  ].map((text, i) => (
    <ListItem key={i} sx={{ pl: 2 }}>
      <ListItemText primary={text} />
    </ListItem>
  ))}
</List>
<Typography variant="body2" paragraph>
  With built-in reporting tools, invoicing software turns raw data into actionable insights.
</Typography>

    </Container>
        
    </Box>
   
  );
}
