'use client'

import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image"

export default function Poimage(){
    return(
        <>
            <Box>
                <Container maxWidth="lg">

                    <Typography variant="h3" sx={{textAlign:"center" , mt:4 , mb:2}}>Sample purchase order template</Typography>

                    <Typography variant="h6" sx={{fontWeight:450 , mb:2 , textAlign:"center"}}>How to create a purchase order using a purchase order template?</Typography>

                    <Typography variant="body1" sx={{fontWeight:450 , mb:4 , textAlign:"center" , color:"gray"}}>While creating a purchase order, there are a few details that should be fulfilled by every purchase order generator which are as follows:</Typography>

                    <Box>
                        <Image src="/POimage.png" alt="" width={1200} height={900}></Image>
                    </Box>


                    <Typography variant="h3" sx={{ textAlign: "center", mt: 4, mb: 2 }}>
            Sample purchase order template
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 450, mb: 2, textAlign: "center" }}>
            How to create a purchase order using a purchase order template?
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 450, mb: 4, textAlign: "center", color: "gray" }}>
            While creating a purchase order, there are a few details that should be fulfilled by every purchase order generator which are as follows:
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            1. PO and Quotation Number
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Think of these special codes that everyone keeps track of orders. When you’re buying something, there’s a number that shows it’s an official order. Think of it as special codes for when someone offers to sell you something; there’s a unique number for that too. These codes make everything organized and easy to understand. PO numbers are also used when creating invoices using an invoice generator and also quotation number is used when showing an official order. The seller knows who they are dealing with.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            2. Order By Details
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            This part is like a quick introduction to the person or business that’s buying something. It’s like saying, “Hello, this is who I am and what I need.” It helps the seller know who they are dealing with.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            3. Order To Details
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            On the other side, this part helps the buyer know who they are purchasing from. The person or company that’s selling the product or service. It’s like: On the other side, this part helps the seller know important information about the person or company that’s selling the product or service.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            4. Product or Service Details
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            This part is like the heart of the whole thing. It’s where you list all the items from want to buy or sell. Each item has its name, how many you want, and how much it costs. Imagine it as making a shopping list—you write down what you want to buy and how many of each item you need.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            5. Terms & Conditions
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            This is like the rulebook of the deal. It explains all the important rules that both the buyer and the seller need to follow. For example, it might say when the payment is due or how to return something if it’s not right. It’s setting the boundaries so everyone knows what to expect.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            6. Additional Notes
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            This part is like having extra space to write down anything else you want to say. Maybe you have special instructions or some extra information about the product. This is adding a little personal touch to the order.
          </Typography>

          <Typography variant="h4" sx={{ textAlign: "center", mt: 6, mb: 4 }}>
            How to create a purchase order online with Refrens purchase order format?
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mb: 3 }}>
            Creating a purchase order online with Refrens purchase order generator is super easy. Here's how you can do it using their purchase order format.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            Step 1. Customize Your Purchase Order
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            First, create your purchase order using Refrens' purchase order generator. You can put in all the details about what you want to buy or what you're selling.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            Step 2: Choose a Design
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Once you've filled in the details, it's time to make it look good. Refrens lets you pick from different designs. You can choose a professional design, letterhead style, a business-oriented look, or even a simple print-friendly design.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            Step 3: Personalize Your Purchase Order
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Now comes the fun part where you can personalize your purchase order by selecting colors that match your company's logo. This gives your purchase order a unique and professional touch. You can also change the headings using different fonts, making it look just the way you want.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            Step 4: Review and Finalize
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Take a moment to review everything. Make sure all the details are correct, and the design looks the way you want it. Once you're happy with it, you can finalize and save your purchase order.
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "center", mb: 3 }}>
            With Refrens, creating a customized and professional-looking purchase order is as simple as a few clicks. You can do it all online, saving you time and effort. Happy ordering!
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                backgroundColor: '#E91E63', 
                '&:hover': { backgroundColor: '#C2185B' } 
              }}
            >
              Create Purchase Order
            </Button>
          </Box>
                </Container>
            </Box>
        </>
    )
}