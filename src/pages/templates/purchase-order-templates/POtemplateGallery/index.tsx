"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function InvoiceGallery() {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 ,}}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb:2, fontWeight: 700, color: "#333" }}
        >
          Sample Purchase Order Format
        </Typography>

        <Typography variant="body1" sx={{color:"gray" , mb:4 , textAlign:'center'}}>(You can choose the template in last step after making the purchase order)</Typography>

        {/* Row 1 - 4 Images */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              flex: { xs: 1, sm: 0 },
              minWidth: { xs: "auto", sm: 220 },
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "black", mb: 1 }}
            >
              Professional Purchase Order Template
            </Typography>
            <Box sx={{ position: "relative", height: 300, width: "100%" }}>
              <Image
                src="/PO1.webp"
                alt="Professional Invoice Template"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              flex: { xs: 1, sm: 0 },
              minWidth: { xs: "auto", sm: 220 },
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "black", mb: 1 }}
            >
              Letterhead Purchase Order Template
            </Typography>
            <Box sx={{ position: "relative", height: 300, width: "100%" }}>
              <Image
                src="/PO2.webp"
                alt="Letterhead Invoice Template"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              flex: { xs: 1, sm: 0 },
              minWidth: { xs: "auto", sm: 220 },
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "black", mb: 1 }}
            >
              Classic Purchase Order Template
            </Typography>
            <Box sx={{ position: "relative", height: 300, width: "100%" }}>
              <Image
                src="/PO3.webp"
                alt="Classic Invoice Template"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              flex: { xs: 1, sm: 0 },
              minWidth: { xs: "auto", sm: 220 },
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "black", mb: 1 }}
            >
              Use Printable Quotation Template
            </Typography>
            <Box sx={{ position: "relative", height: 300, width: "100%" }}>
              <Image
                src="/PO4.webp"
                alt="Print Friendly Invoice Template"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Row 2 - 2 Images */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              flex: { xs: 1, sm: 0 },
              minWidth: { xs: "auto", sm: 300 },
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "black", mb: 1 }}
            >
             Compact Purchase Order Template
            </Typography>
            <Box sx={{ position: "relative", height: 300, width: "100%" }}>
              <Image
                src="/PO5.webp"
                alt="Modern Invoice Template"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              flex: { xs: 1, sm: 0 },
              minWidth: { xs: "auto", sm: 300 },
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "black", mb: 1 }}
            >
              Business Purchase Order Template
            </Typography>
            <Box sx={{ position: "relative", height: 300, width: "100%" }}>
              <Image
                src="/PO6.webp"
                alt="Business Invoice Template"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      {/*  */}
      <Box
        sx={{
          bgcolor: "#7C3DDA",
          py: 2,
        //   gap: 2,
          width: "100%",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",  
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "white", fontWeight: 400, mr: 2 , fontSize:{md:"22px" , xs:"16px"} }}
          >
            Modern Purchase Order Template
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#E2007B",
              color: "white",
              borderRadius: 2,
            //   px: 3,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { bgcolor: "#D5006B" },
            }}
          >
            Create Purchase Order
          </Button>
        </Container>
      </Box>
    </>
  );
}
