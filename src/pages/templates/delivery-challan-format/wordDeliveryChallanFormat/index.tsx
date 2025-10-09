'use client';

import { Box, Container, Typography } from "@mui/material";

export default function WordDeliveryChallanformat() {
  const templates = [
    "/DeliveryWord01.webp",
    "/DeliveryWord02.webp",
    "/DeliveryWord03.webp",
    "/DeliveryWord04.webp",
  ];

  const templatesExcel = [
    "/DeliveryWord01.webp",
    "/DeliveryWord02.webp",
    "/DeliveryWord03.webp",
    "/DeliveryWord04.webp",
  ];

  return (
    <Box sx={{ bgcolor: "#F7F9FA", py: { xs: 6, md: 8 } , mt:3}}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 1 }}
        >
          Word Delivery Challan Format
        </Typography>

        {/* Subheading */}
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ color: "text.secondary", mb: 5 }}
        >Download Delivery Challan Format Word
        </Typography>

        {/* Image Section - 1 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 3, md: 5 },
          }}
        >
          {templates.map((src, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                width: { xs: "45%", sm: "30%", md: "22%" },
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ mb: 3, fontWeight: 500, color: "text.primary" }}
              >
                Create Free Delivery Challan Online
              </Typography>
            
              <Box
                component="img"
                src={src}
                alt="Tax Invoice Template"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 1,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Box>
          ))}
        </Box>
        <br />

        {/* Image Section - 2 */}

        {/* Heading */}
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 1 }}
        >
          Excel Delivery Challan Format
        </Typography>

           {/* Subheading */}
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ color: "text.secondary", mb: 5 }}
        >Download Delivery Challan Format Excel
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 3, md: 5 },
          }}
        >
          {templatesExcel.map((src, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                width: { xs: "45%", sm: "30%", md: "22%" },
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ mb: 3, fontWeight: 500, color: "text.primary" }}
              >
                Create Free Delivery Challan Format Excel
              </Typography>
            
              <Box
                component="img"
                src={src}
                alt="Tax Invoice Template"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 1,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}
