"use client";

import { Container, Typography, List, ListItem, ListItemText, Box, Button } from "@mui/material";
import { Close as CloseIcon, Check as CheckIcon } from '@mui/icons-material';
import InvSoftwareWorks from "../invSoftwareWorks";
import { useRouter } from "next/navigation";
import UsecaseOfInvSoftware from "../usecaseofInvSoftware";
import DocumentsCreator from "../documentscreator";

export default function IntroOFinvoice() {

  const router = useRouter();
  return (
    <>
      <Box>
        <Box sx={{ bgcolor: "#F7FAFF", width: "100%", mt: 3 }}>
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

            {/* 4. To Eliminate Manual Errors and Save Time */}
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              4. To Eliminate Manual Errors and Save Time
            </Typography>

            <Typography variant="body2" paragraph>
              In the past, businesses relied on manual bookkeeping, where transactions were handwritten by accountants in ledger books. This was known as the traditional accounting method.
            </Typography>

            <Typography variant="body2" paragraph>
              But this came with major drawbacks:
            </Typography>

            <List dense>
              {[
                "Time-consuming",
                "Prone to calculation errors",
                "Not scalable for growing businesses",
                "Reporting was difficult and slow"
              ].map((text, i) => (
                <ListItem key={i} sx={{ pl: 2 }}>
                  <CloseIcon sx={{ color: "red", mr: 1 }} fontSize="small" />
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

            <Typography variant="body2" paragraph>
              Most businesses have shifted to digital invoicing software because:
            </Typography>

            <List dense>
              {[
                "Automates invoice generation",
                "Calculates taxes instantly",
                "Stores data securely in the cloud",
                "Reduces human errors",
                "Saves hours of work"
              ].map((text, i) => (
                <ListItem key={i} sx={{ pl: 2 }}>
                  <CheckIcon sx={{ color: "green", mr: 1 }} fontSize="small" />
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

            {/* 5. To Centralize All Business Records in One Place */}
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              5. To Centralize All Business Records in One Place
            </Typography>

            <Typography variant="body2" paragraph>
              Modern invoicing software allows you to:
            </Typography>

            <List dense>
              {[
                "Create quotations, invoices, and credit notes",
                "Manage inventory and expenses",
                "Generate tax reports (like GST, TDS, and eWay bills)",
                "Accept payments online",
                "Track everything on a single dashboard"
              ].map((text, i) => (
                <ListItem key={i} sx={{ pl: 4 }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

            <Typography variant="body2" paragraph>
              No more juggling multiple spreadsheets, notes, or tools.
            </Typography>

            {/* 6. To Stay Compliant with Tax Regulations */}
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              6. To Stay Compliant with Tax Regulations
            </Typography>

            <Typography variant="body2" paragraph>
              Businesses need to stay aligned with evolving tax laws, especially in countries like India, where GST compliance invoicing, and eWay bills are mandatory.
            </Typography>

            <Typography variant="body2" paragraph>
              Invoicing software ensures you:
            </Typography>

            <List dense>
              {[
                "Apply the right GST rates",
                "Generate compliant tax invoices",
                "File returns (GSTR-1,3B,etc) accurately",
                "Avoid penalties or legal trouble"
              ].map((text, i) => (
                <ListItem key={i} sx={{ pl: 4 }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

            {/* 7. To Be Accessible Anytime, Anywhere */}
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              7. To Be Accessible Anytime, Anywhere
            </Typography>

            <Typography variant="body2" paragraph>
              Cloud-based invoicing tools like Refrens are accessible.
            </Typography>

            <List dense>
              {[
                "From desktops, tablets, or mobile apps",
                "Anytime, from anywhere",
                "With data backed up automatically"
              ].map((text, i) => (
                <ListItem key={i} sx={{ pl: 4 }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

            <Typography variant="body2" paragraph>
              Whether you're at the office, home, or traveling, your business data is always at your fingertips.
            </Typography>

            {/* 8. Why Even Small Businesses Need It */}
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              8. Why Even Small Businesses Need It
            </Typography>

            <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
              The smaller the business, the greater the need for efficiency.
            </Typography>

            <List dense>
              {[
                "You don't need to be a large company to benefit. The smaller the business, the greater the need for efficiency",
                "Small businesses can't afford delays in payments.",
                "Manual errors hurt small operations more.",
                "Owners often handle multiple roles, so automation helps them focus on growth."
              ].map((text, i) => (
                <ListItem key={i} sx={{ pl: 4 }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

            <Typography variant="body2" paragraph>
              With invoicing software, even a solo entrepreneur or small shop owner can:
            </Typography>

            <List dense>
              {[
                "Send GST invoices in seconds",
                "Track who has paid and who hasn't",
                "See real-time reports and summaries",
                "Stay compliant without needing a full-time accountant"
              ].map((text, i) => (
                <ListItem key={i} sx={{ pl: 4 }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

            <Button variant="contained" onClick={() => router.push("/contact")} sx={{ mt: 2, bgcolor: "#E2007B", color: "white", display: "block", margin: "auto", mb: 4 }}>
              Get Started - It's FREE
            </Button>

            {/* how invoicing software works */}
            <InvSoftwareWorks />

          </Container>

        </Box>

        <UsecaseOfInvSoftware />

        <DocumentsCreator />
      </Box>

    </>

  );
}
