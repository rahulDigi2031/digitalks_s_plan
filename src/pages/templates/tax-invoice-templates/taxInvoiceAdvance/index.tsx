'use client'

import { Box, Container, Typography, Button, List, ListItem } from "@mui/material";

export default function TaxInvoiceAdvance() {

  return (
    <>
      <Box sx={{ bgcolor: "#F7F9FA", width: "100%", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Heading */}
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            textAlign="center" 
            mb={3} 
            sx={{ color: "#222" }}
          >
            How do I make a tax invoice?
          </Typography>

          {/* Intro paragraph */}
          <Typography sx={{ color: "#555", mb: 3, textAlign: "center" }}>
            Creating a tax invoice can be done in several ways, ranging from basic templates 
            to advanced software solutions. Here’s how you can create a tax invoice using 
            different methods, from the simplest to the most advanced.
          </Typography>

          {/* Section 1 */}
          <Typography variant="h6" fontWeight="600" mt={5} mb={1}>
            1. Creating a Tax Invoice Template in Excel
          </Typography>
          <Typography sx={{ color: "#555", mb: 1 }}>
            Excel is an excellent tool for creating a tax invoice template because it allows 
            for easy mathematical calculations and customization. Here’s a step-by-step guide:
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 4 }}>
            {[
              "Open Excel or Google Sheets: Start the software or spreadsheet of your choice.",
              "Create a New Sheet: Either select an available template or start from scratch.",
              "Set Up Headers: Include essential fields such as company details, contact information, invoice number, and date.",
              "Product/Service Information: Add columns for product/service details, including descriptions, quantities, rates, and subtotals.",
              "Tax Calculation: Add a column for tax calculation. Use a formula like =Amount * TaxRate to calculate tax automatically.",
              "Total Calculation: Include a column for the total amount, including taxes.",
              "Additional Fields: If needed, add fields for payment terms or other business-specific details.",
              "Formatting: Make the layout clear and professional, adjusting fonts, colors, and borders as necessary.",
              "Formulas and Testing: Test the template by entering sample data to ensure calculations are correct.",
              "Save and Reuse: Save the template for future invoices. Duplicate it and update the details for each new invoice."
            ].map((item, index) => (
              <ListItem key={index} sx={{ display: 'list-item', color: "#555", py: 0 }}>
                {item}
              </ListItem>
            ))}
          </List>

          {/* Section 2 */}
          <Typography variant="h6" fontWeight="600" mt={5} mb={1}>
            2. Using Downloadable Tax Invoice Templates
          </Typography>
          <Typography sx={{ color: "#555", mb: 1 }}>
            If you want a quicker solution, you can download a ready-made tax invoice template. 
            Platforms like Refrens offer templates that you can customize and use. Here’s how:
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 4 }}>
            {[
              "Visit Refrens: Go to Refrens or another platform offering downloadable templates.",
              "Choose a Template: Pick a template that fits your business needs.",
              "Download the Template: Download the template in your preferred format (Excel, Word, or PDF).",
              "Customize the Template: Open it in Excel or Word and fill in the required details like your business and client information.",
              "Save and Convert to PDF: Save the template and convert to PDF if needed for easy sharing and archiving.",
              "Design Considerations: Keep the design simple and print-friendly, ensuring clarity.",
              "Use Consistently: After customization, consistently use the template for all your invoices."
            ].map((item, index) => (
              <ListItem key={index} sx={{ display: 'list-item', color: "#555", py: 0 }}>
                {item}
              </ListItem>
            ))}
          </List>

          {/* Section 3 */}
          <Typography variant="h6" fontWeight="600" mt={5} mb={1}>
            3. Using Specialized Invoice Tools
          </Typography>
          <Typography sx={{ color: "#555", mb: 1 }}>
            For an even faster approach, consider using specialized invoice tools like the Refrens invoice template. 
            These tools make creating and managing invoices seamless.
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 4 }}>
            {[
              "Choose a Tool: Select a reliable tool, like Refrens’ invoice generator, for creating your tax invoices.",
              "Sign In or Register: Create an account or log in to your existing account.",
              "Select Tax Invoice: Choose the tax invoice template from the tool’s options.",
              "Fill in Details: Enter your business name, contact details, tax rate, and any applicable discounts.",
              "Review and Edit: Make sure the invoice details are accurate before finalizing.",
              "Save and Share: Save the invoice and choose how to share it, whether by email or downloading it as a PDF.",
              "Explore Additional Features: Some tools also offer features for managing quotes, purchase orders, and inventory, streamlining your business processes."
            ].map((item, index) => (
              <ListItem key={index} sx={{ display: 'list-item', color: "#555", py: 0 }}>
                {item}
              </ListItem>
            ))}
          </List>

          {/* Final Paragraph */}
          <Typography sx={{ color: "#555", mt: 3 }}>
            Using an invoice generator simplifies the invoicing process, saving you time and ensuring 
            professional-looking invoices every time.
          </Typography>

          <Typography sx={{ color: "#555", mt: 2, mb: 5 }}>
            Each of these methods provides a different level of customization and convenience. 
            Whether you prefer creating a tax invoice template from scratch in Excel, 
            downloading a ready-made template, or using specialized invoicing software, 
            you can find a solution that best fits your business needs.
          </Typography>

          {/* Button */}
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#E40980",
                color: "#fff",
                fontWeight: 600,
                borderRadius: "10px",
                px: 2,
                py: 1.5,
                "&:hover": { bgcolor: "#c1076c" }
              }}
            >
              Create Free Invoice
            </Button>
          </Box>

        </Container>
      </Box>
    </>
  );
}
