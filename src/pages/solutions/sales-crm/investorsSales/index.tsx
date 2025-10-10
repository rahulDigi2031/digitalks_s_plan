'use client';

import { Box, Container, Typography, Avatar, Button } from "@mui/material";
import Image from "next/image";

export default function InvestorsSales() {
  return (
    <>
      <Box sx={{ bgcolor: "#7757FA", width: "100%", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />
        <Container maxWidth="lg" sx={{ py: 5, color: "#fff", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
            The smartest investors in the room are
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            backing our vision.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: "auto", opacity: 0.8 }}>
            People who understand money, match-making and all things Internet.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 4, flexWrap: "wrap" }}>
            <Box sx={{ textAlign: "center" }}>
              <Image src="/user.jpg" alt="image not added" width={210} height={210} ></Image>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                Vijay Shekhar Sharma
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Founder, Paytm
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
               <Image src="/user.jpg" alt="image not added" width={210} height={210} ></Image>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                Anupam Mittal
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Founder, Shaadi.com
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
               <Image src="/user.jpg" alt="image not added" width={210} height={210}></Image>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                Kunal Shah
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Founder, CRED
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
            Founders of AngelList, DailyNinja, Voonik, Park+ and many more.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF4081",
              color: "#fff",
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: 2,
              textTransform: "none",
              ":hover": { backgroundColor: "#F50057" },
            }} >
            Get Started
          </Button>
        </Container>
      </Box>
    </>
  );
}