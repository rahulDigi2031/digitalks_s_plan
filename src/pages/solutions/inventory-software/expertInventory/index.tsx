'use client'

import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"

export default function ExpertInventoryPage() {
  return (
    <>
      <Box sx={{ bgcolor: "#F7F9FA", width: "100%", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          {/* Heading */}
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              pb: 4,
              color: "#111827",
            }}
          >
            Experts on Refrens Inventory Management Software
          </Typography>

          {/* Top Award Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 5,
            }}
          >
            <Image
              src="/platformimage.webp"
              alt="awarded image"
              width={1200}
              height={300}
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </Box>

          {/* Bottom Press Logos */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: { xs: 3, md: 5 },
              pb: 2,
            }}
          >
            <Image
              src="/yourstory.webp"
              alt="YourStory logo"
              width={180}
              height={50}
              style={{ objectFit: "contain" }}
            />
            <Image
              src="/vcc.webp"
              alt="VCCircle logo"
              width={180}
              height={50}
              style={{ objectFit: "contain" }}
            />
            <Image
              src="/et.webp"
              alt="Economic Times logo"
              width={180}
              height={50}
              style={{ objectFit: "contain" }}
            />
            <Image
              src="/indexpress.webp"
              alt="Indian Express logo"
              width={180}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Container>
      </Box>
    </>
  )
}
