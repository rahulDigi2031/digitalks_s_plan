import { Avatar, Box, Button, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";


type Props = { onOpenDialog: () => void };

export default function PrepaidPartnerShipModel({ onOpenDialog }: Props){
    const [open , setopen] = useState(false)

    const investors = [
        {
          name: "Vijay Shekhar Sharma",
          role: "Founder, Paytm",
          img: "https://via.placeholder.com/150x150.png", // replace with real img
        },
        {
          name: "Anupam Mittal",
          role: "Founder, Shaadi.com",
          img: "https://via.placeholder.com/150x150.png",
        },
        {
          name: "Kunal Shah",
          role: "Founder, CRED",
          img: "https://via.placeholder.com/150x150.png",
        },
      ];


    return(
        <Box>
                <Box sx={{bgcolor:"#F7F9FA" , width:"100%" , height:{md:"1300px" , xs:"600px"} , display:"flex" , alignItems:"center"}}>
            <Container maxWidth="lg">
        
                <Typography variant="h4" sx={{fontWeight:"500" , textAlign:"center" , mb:{md:4}}}>Revenue Sharing Structure For Refrens Partners</Typography>
                
                <Typography variant="body1" sx={{mb:{md:4} , textAlign:"center"}}>Choose the partnership model that works for you</Typography>

            <Box sx={{display:"flex" , justifyContent:"center"}}>
                <Paper elevation={0} sx={{ bgcolor: "#FFFFFF", borderRadius: 3, p: { xs: 1, md: 2 }, display:'flex', alignItems:'center', justifyContent:'center', maxWidth: 1200, width: '100%' }}>
                    <Image 
                        src="/ppm.webp" 
                        alt="PrepaidPartnerShipModel" 
                        width={1100} 
                        height={300} 
                        priority 
                        quality={100}
                        style={{ width: '100%', height: 'auto' }}
                        sizes="(min-width: 1200px) 1100px, 90vw"
                    />
                </Paper>
            </Box>
            
            <Typography variant="body1" sx={{fontSize:"12px" , textAlign:"center" , mt:1}}>Choose the partnership model that works best for you - either buy Refrens licenses upfront for better profit margins or opt for the postpaid model if you're looking for lower initial costs.</Typography>
            </Container>
        </Box>

            {/* new section start here */}
            <Box sx={{ bgcolor: "#7757FA", py: { xs: 6, md: 10 }, textAlign: "center" }}>
                <Container>
                    <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="white"
                    sx={{ mb: 1 }}
                    >
                    Smartest investors in the room are backing our vision!
                    </Typography>
                    <Typography color="white" sx={{ mb: 6, fontSize: 14 }}>
                    People who understand money, match-making and all things Internet.
                    </Typography>

                    {/* Investors flex */}
                    <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: { xs: 3, md: 6 },
                        flexWrap: "wrap",
                        mb: 4,
                    }}
                    >
                    {investors.map((i) => (
                        <Box
                        key={i.name}
                        sx={{
                            bgcolor: "white",
                            borderRadius: 2,
                            p: 2,
                            width:300,
                            textAlign: "center",
                        }}
                        >
                        <Avatar
                            src={i.img}
                            alt={i.name}
                            sx={{ width: 200, height: 200, mx: "auto", mb: 2, borderRadius: 2 }}
                        />
                        <Typography fontWeight="bold">{i.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {i.role}
                        </Typography>
                        </Box>
                    ))}
                    </Box>

                    <Typography color="white" sx={{ mb: 3, fontSize: 14 }}>
                    Founders of Park+, Cashfree, AngelList and many more.
                    </Typography>

                    <Button
                     onClick={onOpenDialog}
                    variant="contained"
                    sx={{
                        bgcolor: "white",
                        color: "black",
                        "&:hover": { bgcolor: "#f5f5f5" },
                    }}>
                       Get In Touch
                    </Button>
                    
                </Container>
            </Box>
        </Box>
    )
}