import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";

const founders = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "/user.png",
    description: "Visionary leader with 15+ years in business technology",
    expertise: ["Strategy", "Leadership", "Innovation"]
  },
  {
    name: "Jane Smith",
    position: "CTO & Co-Founder",
    image: "/user.png",
    description: "Technical architect passionate about scalable solutions",
    expertise: ["Technology", "Architecture", "Development"]
  },
];

export default function FounderSection() {
  return (
    <Box>
        <Box sx={{ bgcolor: '#f8f9fa', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Meet Our Founders
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              maxWidth: 600, 
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            The visionary leaders behind Digitalks, driving innovation in business technology
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4,
          justifyContent: 'center'
        }}>
          {founders.map((founder, index) => (
            <Box 
              key={index}
              sx={{ 
                flex: '1 1 300px',
                maxWidth: { xs: '100%', md: '350px' },
                minWidth: '280px'
              }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Avatar
                    src={founder.image}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 3,
                      border: '4px solid #7C3DDA'
                    }}
                  />
                  
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 1,
                      color: '#7C3DDA'
                    }}
                  >
                    {founder.name}
                  </Typography>
                  
                  <Typography 
                    variant="subtitle1" 
                    color="primary"
                    sx={{ 
                      fontWeight: 600, 
                      mb: 2,
                      fontSize: '1rem'
                    }}
                  >
                    {founder.position}
                  </Typography>
                  
                  <Typography 
                    color="text.secondary"
                    sx={{ 
                      mb: 3,
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}>
                    {founder.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {founder.expertise.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(124, 61, 218, 0.1)',
                          color: '#7C3DDA',
                          fontWeight: 500,
                          '&:hover': {
                            bgcolor: 'rgba(124, 61, 218, 0.2)'
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>  

    <Box>
        {/* our story section */}
    </Box>
    </Box>
  );
}
