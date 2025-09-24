import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ClearIcon from '@mui/icons-material/Clear';

// const plans = [
//   {
//     name: "Accounts Lite",
//     desc: "Unlimited customizable documents with essential reports.",
//     features: [
//       false, true, true, true, true, true,
//       true, true, 2, 1, 5, 100, true, true,
//       true, true, true, true, true, true, true, true,
//       true, true, true, false, true, true, true, true,
//       false, false, false, false // Added for new features
//     ],
//     unlimited: true,
//   },
//   {
//     name: "Accounts GST",
//     desc: "Perfect for GST businesses to maintain compliance.",
//     features: [
//       true, true, true, true, true, true,
//       true, true, 3, 1, 5, 100, true, true,
//       true, true, true, true, true, true, true, true,
//       true, true, true, true, true, true, true, true,
//       false, false, false, false // Added for new features
//     ],
//     unlimited: true,
//   },
//   {
//     name: "Accounts",
//     desc: "For full-fledged accounting features.",
//     features: [
//       true, true, true, true, true, true,
//       true, true, 5, 1, 5, 150, true, true,
//       true, true, true, true, true, true, true, true,
//       true, true, true, true, true, true, true, true,
//       true, false, false, false // Added for new features
//     ],
//     unlimited: true,
//   },
//   {
//     name: "CRM Essential",
//     desc: "For smaller sales teams with limited usage.",
//     features: [
//       true, true, true, true, true, true,
//       true, true, 3, 2, 5, 100, true, true,
//       true, true, true, true, true, true, true, true,
//       true, true, true, true, true, true, true, true,
//       false, false, false, false // Added for new features
//     ],
//     unlimited: true,
//   },
//   {
//     name: "CRM Pro",
//     desc: "Unlimited sales features & 3rd party integration capabilities.",
//     features: [
//       true, true, true, true, true, true,
//       true, true, 5, "Unlimited", "Unlimited", 150, true, true,
//       true, true, true, true, true, true, true, true,
//       true, true, true, true, true, true, true, true,
//       true, true, true, true // Added for new features
//     ],
//     unlimited: true,
//   },
// ];

const plans = [
    {
      name: "Accounts Lite",
      desc: "Unlimited customizable documents with essential reports.",
      features: [
        "Unlimited", // Unlimited
        true, true, true, true, true, true,
        true, 2, 1, 5, 100, true, true,
        true, true, true, true, true, true, true, true,
        true, true, true, false, false, false, false, false,
        false, false, false, false // Added for new features
      ],
      unlimited: true,
    },
    {
      name: "Accounts GST",
      desc: "Perfect for GST businesses to maintain compliance.",
      features: [
        "Unlimited", // Unlimited
        true, true, true, true, true, true,
        true, 3, 1, 5, 100, true, true,
        true, true, true, true, true, true, true, true,
        true, true, true, true, false, false, false, false,
        false, false, false, false // Added for new features
      ],
      unlimited: true,
    },
    {
      name: "Accounts",
      desc: "For full-fledged accounting features.",
      features: [
        "Unlimited", // Unlimited
        true, true, true, true, true, true,
        true, 5, 1, 5, 150, true, true,
        true, true, true, true, true, true, true, true,
        true, true, true, true, false, false, false, false,
        true, false, false, false // Added for new features
      ],
      unlimited: true,
    },
    {
      name: "CRM Essential",
      desc: "For smaller sales teams with limited usage.",
      features: [
        "Unlimited", // Unlimited
        true, true, true, true, true, true,
        true, 3, 2, 5, 100, true, true,
        true, true, true, true, true, true, true, true,
        true, true, true, true, true, true, true, true,
        false, false, false, false // Added for new features
      ],
      unlimited: true,
    },
    {
      name: "CRM Pro",
      desc: "Unlimited sales features & 3rd party integration capabilities.",
      features: [
        "Unlimited", // Unlimited
        true, true, true, true, true, true,
        true,  5, "Unlimited", "Unlimited", 150, true, true,
        true, true, true, true, true, true, true, true,
        true, true, true, true, true, true, true, true,
        true, true, true, true // Added for new features
      ],
      unlimited: true,
    },
  ];

const features = [
  "Create Documents",
  "Customise Document Columns & Formulas",
  "Share Document via Email in 1-click",
  "Automated Payment Reminders",
  "Automatically Collect Client Testimonials",
  "Expense Tracking",
  "Embedded Forms",
  "Client Management",
  "Total Users",
  "Sales Pipelines",
  "Lead Capture Forms",
  "Custom Fields",
  "Sales Orders",
  "Purchase Orders",
  "Delivery Challans",
  "Credit and Debit Notes",
  "Send Festive Greetings",
  "Secure All Your Data on Cloud",
  "Multi-device Support",
  "24x7 Human Support (Chat/Email/Phone)",
  "Remove Refrens Branding",
  "Template Customization",
  "1-click WhatsApp Sharing",
  "Email Tracking & Scheduling",
  "Recurring Invoices",
  "Emails From Your Own Domains",
  "Actionable Sales Reports",
  "Bulk Upload Leads",
  "Remove Branding on Forms",
  "Bulk Upload Clients",
  "Customised User Roles & Permissions", // Existing feature
  "IndiaMart Integration", // New features from image
  "Facebook & Instagram Integration",
  "Customizable Email Templates"
];

export default function PricingTable() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#FBFCFD",
        py: { xs: 2, md: 8 },
        px: { xs: 1, md: 3 },
        mt:{ md: 10, xs: 6 }
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          textAlign: "center",
          mb: 6,
          fontSize: { xs: 24, sm: 32, md: 40 },
        }}
      >
        Select the right plan for your business
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ borderRadius: 2, overflowX: "auto" }}
      >
        <Table sx={{ minWidth: 900 }} aria-label="Pricing Table">

<TableHead>
  <TableRow>
    <TableCell
      sx={{
        bgcolor: "white",
        fontWeight: 700,
        fontSize: { xs: 14, md: 18 },
        width: 220,
        borderRight: "1px solid #e0e0e0",
      }}
    >
      Features & Plans
    </TableCell>
    {plans.map((plan) => (
      <TableCell
        key={plan.name}
        align="center"
        sx={{
          bgcolor: "white",
          fontWeight: 700,
          borderLeft: "1px solid #e0e0e0",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant="body1"
            sx={{ mb: 0.5, fontWeight: 600 }}
          >
            {plan.name}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 1.5, textAlign: "center" }}
          >
            {plan.desc}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{
              mb: 1,
              border:"1px solid #7A40D1",
              borderRadius:3,
              textTransform: "none",
              fontWeight: 600,
              color:"#7A40D1",
              ":hover":{backgroundColor:"#7A40D1" , color:"white"}
            }}
          >
            Upgrade
          </Button>
        </Box>
      </TableCell>
    ))}
  </TableRow>
</TableHead>


<TableBody>
  {features.map((feature, i) => (
    <TableRow key={feature}>
      <TableCell
        sx={{
          fontWeight: 400,
          fontSize: "16px",
          borderRight: "1px solid #e0e0e0",
          bgcolor: "white",
        }}
      >
        {feature}
      </TableCell>
      {plans.map((plan, idx) => {
        const value = plan.features[i];
        return (
          <TableCell
            key={idx}
            align="center"
            sx={{
              fontWeight: 400,
              borderLeft: "1px solid #e0e0e0",
              borderRight: "1px solid #e0e0e0",
              bgcolor: "white",
            }}
          >
            {typeof value === "boolean" ? (
              value ? (
                <CheckIcon sx={{ color: "#7A40D1" }} />
              ) : (
                <ClearIcon sx={{color:"#7A40D1"}} />
              )
            ) : (
              value
            )}
          </TableCell>
        );
      })}
    </TableRow>
  ))}
</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}