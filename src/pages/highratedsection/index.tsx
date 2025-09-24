import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function RatedSection() {
  return (
    <Box sx={{ mt:{xs:6, md:2} , mb:{xs:3, md:5}}}>
      <Box sx={{display:"flex" , justifyContent:"center"}}>
      <Image 
        src="/ratedimage.webp" 
        alt="rateinfo image" 
        width={1000}
        height={400}
        style={{objectFit:"contain"}}
      />
      </Box>

    <Box sx={{ width: "100%", minHeight: {xs:"auto", md:"120px"}, py:{xs:3, md:0}, bgcolor: "#7C3DDA", mb:{xs:6, md:10}, display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center" , justifyContent:"space-around", gap:2, flexDirection:{xs:"column", md:"row"}}}>
        <Typography
          variant="h5"
          sx={{
            // textAlign: "center",
            color: "white",
            fontWeight: 350,
            fontSize: { xs: "16px", md: "1.5rem" },
            lineHeight: "1.2",
          }}
        >
          Automate invoicing for your website with Refrens Invoice API⚡
        </Typography>
        
        <Button variant="contained" sx={{ color:"white" , backgroundColor:"#E2007B" , textTransform:"capitalize" , width:{xs:"200px"} , height:{xs:"48px"}}}>
            Learn More
        </Button>
      </Container>
    </Box>

    </Box>
  );
}