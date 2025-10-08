'use client';

import { Box, Container, Typography, Button } from "@mui/material";

export default function TaxInvoiceIntroduction() {
  return (
    <Box sx={{ bgcolor: "#fff", py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Main Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: "#111",
            textAlign: "left",
          }}
        >
          Free Tax Invoice Templates (Word, Excel, PDF)
        </Typography>

        {/* PDF Section */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, color: "#DF007A", mb: 1 }}
        >
          Tax Invoice Template in PDF (Add invoice details and download it in PDF format.)
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#333" }}>
          A Tax Invoice Template in PDF is a simple, effective way to generate professional invoices that can be easily
          shared and stored. PDFs ensure the format remains intact across devices, making them ideal for official
          documentation. The key benefit of using a PDF template is that it preserves the layout and design, ensuring
          clarity in the details, such as tax rates, amounts, and totals. This format is especially useful for businesses
          that need to email invoices directly to clients without worrying about compatibility or accidental alterations.
        </Typography>

        {/* Word Section */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, color: "#DF007A", mb: 1 }}
        >
          Tax Invoice Template in Word
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#333" }}>
          A Tax Invoice Template in Word offers flexibility in editing while maintaining a clean, professional look. Word
          templates allow businesses to quickly adjust or customize the document according to specific requirements. You
          can easily modify tax rates, product/service details, and payment terms. This format is often preferred when
          you want to maintain the convenience of editing text, adding custom fields, or adjusting layout elements
          without complex software.
        </Typography>

        {/* Excel Section */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, color: "#DF007A", mb: 1 }}
        >
          Tax Invoice Template Excel
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#333" }}>
          A Tax Invoice Template in Excel is ideal for businesses that need automatic calculations for tax amounts,
          subtotals, and totals. Excel templates allow you to input data like quantities, rates, and tax percentages, and
          the formulas automatically calculate the totals. This format is especially beneficial for businesses with
          frequent invoicing needs, as it reduces manual calculation errors and offers a slimmed-down approach to invoice
          management. The built-in flexibility of Excel allows for seamless modifications, making it a versatile tool for
          both small and large businesses.
        </Typography>

        {/* What is a tax invoice? */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 2, mt: 4, color: "#111" }}
        >
          What is a tax invoice?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#333" }}>
          A tax invoice is a standard invoice issued by a seller to a client, containing all the details found in a
          regular invoice. What sets it apart is the inclusion of tax-related information, such as the tax rate and
          taxable amount for the products or services. The tax rate is usually expressed as a percentage, and the invoice
          clearly shows the tax applied to the taxable amount, ensuring both the seller and client can easily track the
          taxes associated with the transaction.
        </Typography>

        {/* Example Section */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, mb: 1, color: "#DF007A" }}
        >
          Example:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#333" }}>
          Imagine you’re running a business registered for tax and selling a product. In such cases, you must issue a tax
          invoice. This invoice should include the product/service name, rate, quantity, and importantly, the tax rate.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#333" }}>
          For instance, if you’re selling a product for $100 and the tax rate is 10%, the tax amount would be 10% of
          $100, which equals $10. Therefore, the total amount due would be $110 ($100 for the product + $10 tax).
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "#333" }}>
          This process ensures transparency for both parties and helps maintain compliance with tax regulations, making
          it clear how much the tax amounts to in relation to the product’s cost.
        </Typography>

        {/* Button */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#DF007A",
              textTransform: "none",
              borderRadius: "8px",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#C7006B",
                boxShadow: "none",
              },
            }}
          >
            Create Free Invoice
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
