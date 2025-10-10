'use client';

import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "What is CRM sales software?",
    answer: "CRM sales software, or Customer Relationship Management software, is a tool designed to help businesses manage their interactions with leads, prospects, and customers. It streamlines sales processes, tracks leads, monitors pipeline progress, and enhances communication for better sales performance."
  },
  {
    question: "What is the best CRM software for sales?",
    answer: "The best CRM software for sales depends on your business size, needs, and budget. Refrens Sales CRM and Pipeline Management Solution is a great option for growing sales teams, entrepreneurs, agencies, and freelancers looking for an easy-to-use, comprehensive, and affordable solution."
  },
  {
    question: "What is CRM with an example?",
    answer: "CRM, or Customer Relationship Management, refers to strategies and tools that help businesses manage interactions with customers and leads. An example is Refrens Sales CRM, which consolidates lead capture, communication, follow-ups, and sales pipeline management to improve sales performance and boost revenue."
  },
  {
    question: "Will my data be secure?",
    answer: "We are an ISO certified organisation. We take utmost care of data security & privacy. Our systems are frequently updated with the latest security updates to ensure that your data is safe and secure. Do check out our detailed privacy policy here."
  },
  {
    question: "Do you provide customer support?",
    answer: "Yes, we provide instant & reliable support over chat, email, and phone. We will also provide a dedicated account manager to help you out whenever required."
  },
  {
    question: "Can the software adapt and scale as my business grows?",
    answer: "Absolutely! Our software is designed to seamlessly adapt and scale alongside your business, ensuring that it meets your evolving needs at every stage of growth. We also continuously enhance the software by rigorously adding new features, functionality improvements, and industry best practices. As your business expands, our software can accommodate an increasing number of users, manage larger volumes of data, and handle more complex tasks without compromising on performance or customer feedback, ensuring that you have access to the latest and most innovative solutions-based infrastructure offers unparalleled scalability and reliability, with the ability to adjust resources on-demand to cater to your business's specific needs. This means that you can be confident that our software will support your growth without any disruption or downtime."
  }
];

export default function SalesFaq() {
  return (
    <Box sx={{ bgcolor: "white", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h4" sx={{ textAlign: "center", mb: 6, color: "#333", fontWeight: "bold" }}>
          Frequently Asked Questions (FAQ)
        </Typography>
        <Box sx={{ maxWidth: 1200, mx: "auto" }}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 2, boxShadow: "none", "&:before": { display: "none" }, border: "1px solid #e0e0e0", borderRadius: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 3,
                  py: 2,
                  backgroundColor: "white",
                  "& .MuiAccordionSummary-content": { fontSize: "1.1rem", fontWeight: "bold", color: "#333" },
                  "& .MuiAccordionSummary-expandIconWrapper": { color: "#7757FA" }
                }}
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, py: 2, bgcolor: "#f9f9f9" }}>
                <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.6 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7757FA",
              color: "white",
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: 2,
              textTransform: "none",
              ":hover": { backgroundColor: "#5e47e0" },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}