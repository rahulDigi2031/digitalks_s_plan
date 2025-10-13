'use client'

import { Box, Container } from "@mui/material"
import Image from "next/image"

export default function  BestValueOFLeadMS() {
    return (
       <>
         {/* Best Value of Lead Management Software */}
         <Box sx={{bgcolor:"#F7F9FA" , py:5 , width:"100%"}}>
            <Container maxWidth="lg">
                <Box sx={{display:"flex" , justifyContent:"center"}}>
                      <Image src="/ratedimage.webp" alt="rateinfo image"  width={1000} height={400} style={{objectFit:"contain"}}/>
                </Box>
            </Container>
         </Box>
       </> 
    )
}