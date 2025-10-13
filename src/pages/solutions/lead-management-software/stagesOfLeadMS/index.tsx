'use client'

import { useState } from "react";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import Image from "next/image";

const stages = [
  {
    id: 1,
    title: "Lead Capturing",
    image: "/leadstage1.png", // replace with your image
    points: [
      "Automatically capture leads from multiple sources and centralize them in one secure system.",
      "Integrates with Indiamart, Justdial, and your website forms.",
      "Manual lead entry via mobile app for field sales.",
      "Avoids leads getting lost in emails or spreadsheets.",
      "Centralized database for better visibility and control.",
    ],
    link: "Register Now!",
  },
  {
    id: 2,
    title: "Lead Distribution",
    image: "/stage2.png",
    points: [
      "Automatically assign leads to sales reps based on rules.",
      "Track lead assignment performance.",
      "Prevent duplicate or missed leads.",
      "Ensure equal lead distribution among your team.",
    ],
    link: "Try Lead Distribution!",
  },
  {
    id: 3,
    title: "Lead Nurturing",
    image: "/stage3.png",
    points: [
      "Automate follow-ups through email, SMS, or WhatsApp.",
      "Track lead engagement easily.",
      "Personalize your communication for better conversions.",
    ],
    link: "Start Nurturing!",
  },
  {
    id: 4,
    title: "Lead Conversion",
    image: "/stage4.webp",
    points: [
      "Convert high-potential leads into deals faster.",
      "Automate conversion tracking and updates.",
      "Get real-time insights into conversion rates.",
    ],
    link: "Boost Conversion!",
  },
  {
    id: 5,
    title: "Lead Analysis & Reports",
    image: "/stage5.png",
    points: [
      "View detailed analytics and lead reports.",
      "Identify top-performing campaigns.",
      "Track KPIs to improve lead management.",
    ],
    link: "Analyze Now!",
  },
];

export default function StagesOfLeadMS() {
  const [activeStage, setActiveStage] = useState(stages[0]);

  return (
    <Box sx={{ bgcolor: "#F7F9FA", width: "100%", py: 6 }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: 600, mb: 4 }}
        >
          Stages of Refrens Lead Management Software
        </Typography>

        <Paper
          elevation={2}
          sx={{ p: 4, borderRadius: 2, textAlign: "center" }}>
            {/* Stage Buttons */}
            {/* Buttons inside Paper */}
        <Paper
          elevation={0.2}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 5,
            p: 2,
            borderRadius: "16px",
            bgcolor: "#fff",
          }}
        >
          {stages.map((stage) => (
            <Button
              key={stage.id}
              onClick={() => setActiveStage(stage)}
              variant={activeStage.id === stage.id ? "contained" : "outlined"}
              sx={{
                borderRadius: "30px",
                px: 3,
                py: 1,
                textTransform: "none",
                bgcolor:
                  activeStage.id === stage.id ? "#635BFF" : "transparent",
                color: activeStage.id === stage.id ? "#fff" : "black",
                borderColor: "#ccc",
                "&:hover": {
                  bgcolor:
                    activeStage.id === stage.id ? "#5147d9" : "#f5f5f5",
                },
              }}
            >
              {stage.title}
            </Button>
          ))}
        </Paper>

        {/* Main Content inside Paper */}
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            borderRadius: "16px",
            p: { xs: 3, md: 4 },
          }}
        >
          {/* Left Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: { xs: "250px", md: "320px" },
              position: "relative",
            }}
          >
            <Image
              src={activeStage.image}
              alt={activeStage.title}
              fill
              style={{
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />
          </Box>

          {/* Right Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 1, color: "#222" }}
            >
              {activeStage.title}
            </Typography>

            {activeStage.points.map((point, index) => (
              <Typography key={index} sx={{ mb: 1.5, color: "#555" }}>
                • {point}
              </Typography>
            ))}

            <Typography
              sx={{
                mt: 2,
                fontWeight: 600,
                color: "#2F57EF",
                cursor: "pointer",
              }}
            >
              {activeStage.link}
            </Typography>
          </Box>
        </Paper>
          </Paper>
      </Container>
    </Box>
  );
}
