'use client'

import { Box, Container, Typography, Button, Link } from "@mui/material"

export default function QuotationFormat() {
  return (
    <Box sx={{ bgcolor: "#F7F9FA", width: "100%", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        
        {/* Main Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#111", textAlign: "left" }}
        >
          Quotation Format and Free Quotation Templates
        </Typography>

        {/* Intro Paragraph */}
        <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
          A Quotation template is a blank format used by vendors to outline the products or services they are going to offer
          to their clients at a specific price. <Link href="#" color="#E90074" underline="hover">Quotation</Link> plays a very
          important role as it is the first touchpoint of any business. Before sending the invoice, contract or agreement, it
          is the quotation that is sent by the vendor to grab the opportunity of getting work from the client, so having a
          quotation template is necessary.
        </Typography>

        {/* Sub Heading */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mt: 4, mb: 2, color: "#111" }}
        >
          Why one should use a quotation format for the business?
        </Typography>

        {/* Paragraphs */}
        <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
          A well-structured and professionally designed quotation serves as a crucial document in any business transaction.
          Think of it as the face of your business, especially in the eyes of potential clients. When a client is seeking
          services or products, they often contact multiple vendors to understand their offerings. During these interactions,
          one of the key elements they assess is the quotation received from each vendor.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
          Consider a scenario where a client is searching for a web developer to design and develop their website. After
          researching and receiving referrals, the client compiles a list of potential vendors. These vendors are then
          approached, and the client explains the project details to each of them. In return, the client requests a quotation,
          including the price and estimated completion time for the project.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
          Upon receiving the quotations, the client meticulously evaluates each one. What stands out to them is not just the
          pricing but also the professionalism and clarity reflected in the quotation document. A professionally designed
          quotation indicates that the business is organized, values transparency, and pays attention to details. It establishes
          credibility and builds trust with potential clients, making them more likely to consider the vendor seriously.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
          Furthermore, a well-crafted quotation provides clarity and transparency. It clearly outlines the services or products
          offered, their corresponding costs, any applicable terms and conditions, and the proposed timeline for project
          completion. This transparency is vital for ensuring both the client and the vendor are aligned on the project scope,
          preventing misunderstandings or disputes later in the process.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
          In a competitive market, a professional quotation can be a key differentiator. When clients compare quotations from
          various vendors, a visually appealing and well-structured document can capture their attention and make your offer
          more attractive. It becomes a tool for showcasing your professionalism, which is particularly significant when dealing
          with corporate clients or projects of higher value.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
          Moreover, using a proper quotation format doesn’t just enhance your business’s image; it also makes your operations
          more efficient. <strong>Quotation templates simplify the process of generating quotes.</strong> They allow you to
          customize your offerings for different clients and services, saving time and effort that can be better utilized in
          other aspects of your business.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
          Lastly, beyond being a tool for client interaction, a well-structured quotation can also act as a conversion tool. It
          has the potential to persuade potential clients to move forward with your services. It communicates the value they
          will receive for their investment, making them more inclined to make a decision in your favour. Moreover, once approved
          you can directly create an invoice from the same quotation without creating the invoice from scratch using a{" "}
          <Link href="#" color="#E90074" underline="hover">free invoice templates</Link> or using a tool like{" "}
          <Link href="#" color="#E90074" underline="hover">invoice generator</Link>.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
          In essence, a professionally designed quotation isn’t just a standard practice; it’s a strategic asset. It
          significantly influences the decision-making process of potential clients and can ultimately determine the success of
          your business endeavours. Therefore, investing in creating clear, visually appealing, and professional quotations is a
          fundamental step towards achieving business growth and success.
        </Typography>

        {/* Button */}
        <Box textAlign="center" mt={5}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E90074",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
              px: 4,
              py: 1.2,
              textTransform: "none",
              "&:hover": { backgroundColor: "#c8005f" },
            }}
          >
            Create Quotation For Free
          </Button>
        </Box>

      </Container>
    </Box>
  )
}
