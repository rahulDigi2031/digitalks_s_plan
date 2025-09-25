import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function OurStorySection() {
  return (
    <Box sx={{ bgcolor: "#7C3DDA", color: "#fff" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              lineHeight: 1.2,
            }}
          >
            Our Story
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 1100, mx: "auto" }}>
          <Typography sx={{ opacity: 0.95, lineHeight: 1.8, mb: 3, fontSize: { xs: 15, md: 16 } }}>
            Digitalks started with the idea of building a “referral” network where businesses can help
            each other acquire more customers (yes, that’s where our name comes from).
          </Typography>
          <Typography sx={{ opacity: 0.95, lineHeight: 1.8, mb: 3, fontSize: { xs: 15, md: 16 } }}>
            Initially, we launched as a freelance marketplace, complemented by essential tools like a
            quotation generator, invoice generator, and more. However, something interesting happened—these
            tools didn’t just attract freelancers and agencies, but a wide range of businesses, from solo
            entrepreneurs to large enterprises, who found value in the simplicity and functionality of these
            offerings.
          </Typography>
          <Typography sx={{ opacity: 0.95, lineHeight: 1.8, mb: 3, fontSize: { xs: 15, md: 16 } }}>
            After engaging with our users, we uncovered a significant gap in the market: businesses were
            frustrated with overly complicated, hard-to-use software. There was a growing demand for more
            intuitive, user-friendly solutions to manage day-to-day operations. That’s when we decided to pivot.
          </Typography>
          <Typography sx={{ opacity: 0.95, lineHeight: 1.8, mb: 3, fontSize: { xs: 15, md: 16 } }}>
            Digitalks has now evolved into a comprehensive business operating system that simplifies everything
            from invoicing and accounting to sales, compliance, business intelligence, payments, inventory, and
            more. Designed with ease of use in mind, Digitalks helps businesses of all sizes streamline their
            operations and thrive.
          </Typography>
          <Typography sx={{ opacity: 0.95, lineHeight: 1.8, fontSize: { xs: 15, md: 16 } }}>
            As of Oct ’24, over 150,000 businesses across 170 countries use Digitalks to simplify their daily
            operations. Our goal for the next five years is to bring this same efficiency and ease to millions
            of businesses globally.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
