'use client'

import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"

export default function Entrepreneurs() {
  return (
    <>
      <Box sx={{ bgcolor: "#7C3DDA", width: "100%", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Heading */}
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 700,
              textAlign: "center",
              mb: 2,
            }}
          >
            Some of the smartest entrepreneurs of <br /> India are backing our
            vision.
          </Typography>

          {/* Subheading */}
          <Typography
            variant="body1"
            sx={{
              color: "#EDE9FE",
              textAlign: "center",
              mb: 6,
            }}
          >
            People who understand money, business, and all things Internet.
          </Typography>

          {/* Entrepreneur Cards */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 4, md: 6 },
              textAlign: "center",
            }}
          >
            {/* Card 1 */}
            <Box>
              <Image
                src="/user.png"
                alt="Entrepreneur 1"
                width={200}
                height={200}
                style={{
                  borderRadius: "12px",
                  marginBottom: "16px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Vijay Shekhar Sharma
              </Typography>
              <Typography variant="body2" sx={{ color: "#EDE9FE" }}>
                Founder, Paytm
              </Typography>
            </Box>

            {/* Card 2 */}
            <Box>
              <Image
                src="/user.png"
                alt="Entrepreneur 2"
                width={200}
                height={200}
                style={{
                  borderRadius: "12px",
                  marginBottom: "16px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Anupam Mittal
              </Typography>
              <Typography variant="body2" sx={{ color: "#EDE9FE" }}>
                Founder, Shaadi.com
              </Typography>
            </Box>

            {/* Card 3 */}
            <Box>
              <Image
                src="/user.png"
                alt="Entrepreneur 3"
                width={200}
                height={200}
                style={{
                  borderRadius: "12px",
                  marginBottom: "16px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Dinesh Agarwal
              </Typography>
              <Typography variant="body2" sx={{ color: "#EDE9FE" }}>
                Founder, IndiaMART
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
