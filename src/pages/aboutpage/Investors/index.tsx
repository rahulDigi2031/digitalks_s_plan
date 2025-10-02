import React from "react";
import { Container, Box, Typography, Card, CardActionArea } from "@mui/material";
import Image from "next/image";

const investors = [
  { name: "Vijay Shekhar Sharma", title: "Founder, Paytm", imageSrc: "/ser.png" },
  { name: "Anupam Mittal", title: "Founder, Shaadi.com", imageSrc: "/ser.png" },
  { name: "Kunal Shah", title: "Founder, CRED", imageSrc: "/ser.png" },
  { name: "Dinesh Agarwal", title: "Founder, IndiaMART", imageSrc: "/ser.png" },
  { name: "Vikram Shah", title: "Investor", imageSrc: "/ser.png" },
  { name: "Sidu Ponnappa", title: "Ex-MD, Gojek India", imageSrc: "/ser.png" },
];

export default function InvestorsPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
              color: "white",
            }}
          >
            Investors
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(1, 260px)', sm: 'repeat(2, 260px)', md: 'repeat(3, 260px)' }, justifyContent: 'center', gap: 3 }}>
          {investors.map((investor) => (
            <Card key={investor.name} elevation={0} sx={{ borderRadius: 2, overflow: "hidden" }}>
              <CardActionArea disableRipple>
                <Box sx={{ position: "relative", width: "100%", pt: "120%" }}>
                  <Image
                    src={investor.imageSrc}
                    alt={investor.name}
                    fill
                    sizes="(max-width: 500px) 100vw, 33vw"
                    style={{ objectFit: "cover", zIndex: 0 }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      p: 2,
                      zIndex: 1,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.75) 100%)",
                    }}
                  >
                    <Box sx={{ width: '100%', textAlign: 'left' }}>
                      <Typography 
                        sx={{
                          color: "#fff",
                          fontWeight: 800,
                          letterSpacing: 0.2,
                          textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        {investor.name}
                      </Typography>
                      {investor.title && (
                        <Typography
                          sx={{
                            color: "#fff",
                            opacity: 0.9,
                            fontSize: 12,
                            mt: 0.5,
                            textShadow: "0 1px 2px rgba(0,0,0,0.4)",
                          }}
                        >
                          {investor.title}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}


