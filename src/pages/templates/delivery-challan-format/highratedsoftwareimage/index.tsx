'use client'

import { Box, Button, Container } from "@mui/material"
import Image from "next/image"

export default function ApprovedSoftware(){
    return(
       <>
        <Box sx={{bgcolor:"#F7F9FA" , width:"100%" , py: {xs: 4, md: 10} }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: 200, sm: 300, md: 500 },
                        borderRadius: 1,
                        overflow: 'hidden',
                        mb:5
                    }}
                >
                    <Image 
                        src="/ratedimage.webp" 
                        alt="approved by companies" 
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="(max-width: 700px) 100vw, (max-width: 1300px) 100vw, 1300px"
                    />
                </Box>
                <Button variant="outlined" sx={{color:"#7C3DDA",  mt:3 , mb:2 , display:"block" , margin:"auto" , ":hover":{bgcolor:"#7C3DDA" , color:"white"}}}>Get start</Button>
            </Container>
        </Box>
       </> 
    )
}