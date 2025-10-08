"use client";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";

export default function TaxInvoiceCreateInExcel() {
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Box sx={{ p: 4, mx: "auto" }}>
            <Typography variant="h4" gutterBottom align="center">
              How do I create a tax invoice in Excel?
            </Typography>

            <Typography variant="h6" gutterBottom>
              Start to create a tax invoice in Excel:
            </Typography>

            <List>
              <ListItem>
                <ListItemText primary="• Start Microsoft Excel on your computer." />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Choose a template: Look for an invoice template that fits your needs. If there's one specifically designed for invoices, select that. Otherwise, explore simple business templates." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Customize the Template: Replace the details with your business information. This should include your business name, contact details, client name." />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Open the template and replace the default details with your business information. This should include your business name, contact details, client name." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Add Tax Columns: Include the tax rate, taxable amount, and any other tax details that apply to your business (e.g., GST, VAT, etc.)." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Apply Formulas: Make sure the template reflects the correct tax rate for your country/business type. Use formulas like =Amount*Tax% to calculate tax." />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Ensure the formulas are linked to calculate the taxes automatically. For example, you can use a formula like =Amount*Tax% to calculate tax." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Include Margins and Borders: Organize the layout and improve the visual appeal. A structured layout makes the invoice look more professional." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Verify Accuracy: Check calculations and details before finalizing. Ensure the tax amount and totals are correctly calculated to avoid mistakes." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Save the Template: Save this file so you can reuse it for future invoices. This saves time and maintains consistency across invoices." />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Print or Share: Once you’ve saved the file, you can either print it directly or save it as a PDF to email to your clients electronically." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Alternative method: If you prefer a quicker and more efficient method, consider using specialized tools like FreshBooks or other invoicing software. These tools can streamline the process, automate calculations, and provide specialized solutions for managing invoices." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Using Excel for a tax invoice provides flexibility, but using invoicing software can save you time and effort." />
              </ListItem>
            </List>
          </Box>
        </Container>
      </Box>
    </>
  );
}
