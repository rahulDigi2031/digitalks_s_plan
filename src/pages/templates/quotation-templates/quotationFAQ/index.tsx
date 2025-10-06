'use client'

import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Link } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function QuotationFAQ() {
  const faqs = [
    {
      question: "What is a quotation format?",
      answer:
        "A quotation format is a document that contains all the information that includes product name, amount, quantity, and other essential details. You can easily edit this document and can customize it as per your requirement.",
    },
    {
      question: "What are the different quotation formats?",
      answer: `You can create a quotation in Word, Excel, or PDF format, depending on what works best for you.

1. **Word Quote Template:**
Word is easy to use and available on most systems. You can type your details into a simple document and share it quickly.
Pros:
• Familiar and simple
• Easy to edit or print
Cons:
• Needs manual formatting
• No automatic calculation
• Errors are easy to miss

2. **Excel Quote Template:**
Excel gives more flexibility with numbers. You can add formulas for totals and tax.
Pros:
• Built-in calculations
• Good for price breakdowns
Cons:
• Needs spreadsheet skills
• Not very visually appealing
• Easy to change by mistake

3. **PDF Quote Template:**
PDF is great for sharing. Once saved, no one can edit the file.
Pros:
• Secure and fixed layout
• Looks professional
Cons:
• Hard to edit
• Needs extra tools to create

**Why Refrens is Better**
Refrens gives you the best of all three without the extra work. You get free quote templates that are easy to fill, auto-calculate totals and tax, and can be downloaded in PDF format. No need to design, format, or fix errors. Just enter your details, pick your style, and send it.`,
    },
    {
      question: "How to make a quotation using quotation template?",
      answer: `You can easily create a quotation using Refrens quotation template. You just have to add some details on the template:
1. The name, address, logo, and other vendor details.
2. Same as vendor details add buyers’ information.
3. Fill out the product or service name with a description.
4. Add quantity or hours worked with your price or hourly rate.
5. Clearly define the terms & conditions on the quotation.
6. Sign of an authorized person.`,
    },
    {
      question: "Can I customize the quotation format?",
      answer:
        "Yes, you can customize Refrens quotation template by adding the logo, custom fields and columns, or by hiding the irrelevant columns. You can also change the color of the quotation, add letterhead at the top of the quotation.",
    },
    {
      question: "What must be included in a quotation template?",
      answer: `Quotation template must include:
1. Quotation at the top of the document.
2. Quotation number and date.
3. Logo of the company.
4. Seller details with all relevant information.
5. Buyer details with name and address, contact number.
6. Product name, quantity, and rate.
7. Terms and conditions.
8. Accepted mode of payments.
9. Signature.`,
    },
    {
      question: "What are the other free products provided by Refrens?",
      answer: `Refrens provides 
        [Invoice generator], 
        [GST invoice format], 
        [Proforma invoice templates], 
        [Purchase order templates], 
        [Quotation generator], 
        [Freelance invoice templates], 
        [Invoice templates], 
        [Quotation templates].`,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Frequently Asked Questions (FAQ)
      </Typography>

      {/* Accordion List */}
      <Box className="mt-6 space-y-3">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            defaultExpanded={index === 1}
            sx={{
              borderRadius: "8px",
              "&:before": { display: "none" },
              boxShadow: "0 0 4px rgba(0,0,0,0.1)",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>{faq.question}</Typography>
            </AccordionSummary>
            {faq.answer && (
              <AccordionDetails>
                <Typography
                  whiteSpace="pre-line"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            )}
          </Accordion>
        ))}
      </Box>

      {/* CTA Button */}
      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E90074",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#c8005f" },
          }}
        >
          Create Free Quotation
        </Button>
      </Box>
    </Container>
  );
}
