'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Button 
} from "@mui/material"

export default function FreePOFormat() {
  return (
    <>
      <Box sx={{ py: 4 , bgcolor:"#F7F9FA" , width:"100%" , mt:2}}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Free Purchase Order Format
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            What is a purchase order?
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            A purchase order is a financial document summarizing the purchases of goods or services that are agreed upon by both buyer and seller under certain terms and conditions. By creating a purchase order, a company helps in organization of purchase orders and track their purchase expense with minimal human error. It also helps to cut the business purchase orders and helps in improvement of purchase order cycle.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Purchase Order Generator - Free PO
          </Typography>
          <Typography variant="body1" paragraph>
            Create PO orders online without any error or hassle. You can also manage, track and send the PO from the dashboard. Using generator purchase order template you can easily change the design, color and add letterhead and customize your PO per your brand.
          </Typography>

          <Typography variant="h4" gutterBottom>
            Why businesses need purchase orders?
          </Typography>

          <Typography variant="h6" gutterBottom>
            For Small Businesses
          </Typography>
          <Typography variant="body1" paragraph>
            When businesses are small, they often buy things without formal documents like purchase orders. It's like going to the store and just buying what you need without any receipts.
          </Typography>

          <Typography variant="h6" gutterBottom>
            For Growing Businesses
          </Typography>
          <Typography variant="body1" paragraph>
            As businesses get bigger and buy more things, it becomes important to keep things organized. Imagine if a business is like a big puzzle. Purchase orders are like the pieces that hold everything together.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Smooth Transactions
          </Typography>
          <Typography variant="body1" paragraph>
            Imagine you're ordering lots of things for your business. A purchase order is like writing down exactly what you want to buy. It helps the seller understand what you need, avoiding business confusion. So things arrive just as you expect.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Growing Business Needs
          </Typography>
          <Typography variant="body1" paragraph>
            It might not need formal purchase orders. But as it grows, it buys more things and involves more people. Purchase orders become necessary to keep everything organized, especially when many items are bought regularly.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Efficient Finances
          </Typography>
          <Typography variant="body1" paragraph>
            Purchase orders are like receipts for businesses. They show what was bought and for how much. This information is crucial for keeping track of money. When it's time to pay bills or do taxes, having clear purchase orders makes everything easier and faster.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Transparency in Transactions
          </Typography>
          <Typography variant="body1" paragraph>
            Think of a purchase order as a clear agreement between a business and a seller. It shows exactly what's been agreed upon, making sure both parties are on the same page. This transparency builds trust between them.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Handling More Suppliers
          </Typography>
          <Typography variant="body1" paragraph>
            As a business grows, it might buy from many different sellers. Purchase orders help keep all these transactions organized. Each order is neatly documented, preventing mix-ups and ensuring the right products arrive.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
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