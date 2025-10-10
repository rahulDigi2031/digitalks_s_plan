'use client';

import { Box, Container, Typography, Button, Divider } from "@mui/material";

export default function BasicSalesCRM() {
  return (
    <>
      <Box sx={{ bgcolor: "white", py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" sx={{ textAlign: "center", mb: 4, color: "#333", fontWeight: "bold" }}>
            Basics of Sales CRM Software Explained
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#666", lineHeight: 1.7, textAlign: "center" }}>
            What is CRM Software in Sales? CRM software helps businesses create and manage business leads and maintain a healthy relationship between the present customer and
            prospects. It helps sales reps in the process of lead nurturing all the follow-up activities so that sales reps can easily decide which prospects to target. Sales
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#666", lineHeight: 1.7, textAlign: "center" }}>
            CRM focuses on building and managing the leads, set follow-up time, reminder, assign source of the lead, lead stages, thus helping sales
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "#666", lineHeight: 1.7, textAlign: "center" }}>
            A point of contact can be anything from the leads sales between prospects and sales reps, and sales CRM simplifies the process and automates the manual work of
            data entries.
          </Typography>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E91E63",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: 2,
                textTransform: "none",
                ":hover": { backgroundColor: "#C2185B" },
              }}
            >
              Get Started
            </Button>
          </Box>

          <Divider sx={{ my: 4, borderColor: "lightgray" }} />

          <Typography variant="h5" component="h3" sx={{ mb: 4, color: "#333", fontWeight: "bold" }}>
            Why do businesses need a Sales CRM?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#666", lineHeight: 1.7 }}>
            As the name suggests, sales CRM helps simplify your business sales process. No matter if it's a small business or a large enterprise, every business has to manage
            its customer data so that can serve its customers, in better way. And for any communication is the key. Successful growth. Sales CRM helps you know your
          </Typography>

          <Divider sx={{ my: 4, borderColor: "lightgray" }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h4" sx={{ mb: 2, color: "#333", fontWeight: "bold" }}>
              Centralized Customer Data
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.7 }}>
              Sales CRM software uses CRM software to manage centralized data of your past and future customers, It becomes easy to access all the
              and purchase details at every pipeline stage. It helps the sales rep to know more about the customer's purchase style, preferences, and specific requirements.
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.7 }}>
              In Sales CRM software, for example, even if one of your sales reps leaves, the data will be at your place managers can easily assign sales person lead to
              tailor the pitch during the sales call. Also, the new executive will be able to check all the information about the customer so that manager can easily assign sales person lead to
            </Typography>
          </Box>

          <Divider sx={{ my: 4, borderColor: "lightgray" }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h4" sx={{ mb: 2, color: "#333", fontWeight: "bold" }}>
              Improved Lead Management
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.7 }}>
              A sales CRM helps you track all of the leads right from the open stage till closing the deal, thus helping you to manage the leads
              effectively. You can easily capture the leads with form your website, email enquires, etc., to the Sales CRM software, then assign and distribute the
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.7 }}>
              For example, a B2B software company can capture leads from its website and instantly assign them to the sales team, who can follow up quickly with potential buyers.
            </Typography>
          </Box>

          <Divider sx={{ my: 4, borderColor: "lightgray" }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h4" sx={{ mb: 2, color: "#333", fontWeight: "bold" }}>
              Streamlined Sales Processes
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.7 }}>
              A sales CRM helps streamline the sales process by automating repetitive tasks. It leads in qualification, follow-up reminders,
              lead assignment, etc., which makes the sales process more straightforward and can focus on closing the deals. For example, Based on lead, prospect details, and
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.7 }}>
              requirements, sales reps can create quotes directly from the lead segment saving time and effort.
            </Typography>
          </Box>

          <Divider sx={{ my: 4, borderColor: "lightgray" }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h4" sx={{ mb: 2, color: "#333", fontWeight: "bold" }}>
              Enhanced Communication
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.7 }}>
              - Sales CRM always helps the team to communicate reduces redundant CRM stores improved customer information sales managers
              to communicate with each other, CRM thus improves customer service. For
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.7 }}>
              example, a B2B sales team can use CRM to share important details about ongoing deals, enabling different team members to provide seamless support to the
              prospects, including purchase - Sales notes, helps the sales team, which reduces redundant work, thus improving customer service. For
            </Typography>
          </Box>

          <Divider sx={{ my: 4, borderColor: "lightgray" }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h4" sx={{ mb: 2, color: "#333", fontWeight: "bold" }}>
              Data Analysis and Reporting
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.7 }}>
              A CRM provides valuable insights through data and reporting. It helps you know the lead conversion rate, customer behavior
              sales performance, individual sales team performance, etc. These insights help businesses make informed decisions, refine sales strategies, and identify areas for
            </Typography>
          </Box>

          <Divider sx={{ my: 4, borderColor: "lightgray" }} />

          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E91E63",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: 2,
                textTransform: "none",
                ":hover": { backgroundColor: "#C2185B" },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}