'use client'

import { Box, Container, Typography, Chip } from "@mui/material"

export default function ExploreQuotation() {
  return (
    <Box sx={{mb:5}}>
      <Container maxWidth="lg">
        <Box textAlign="center" mt={5}>
          <Typography variant="h4" component="h2" gutterBottom>
            Explore More Free Software
          </Typography>
        </Box>

        <Box 
          display="flex" 
          flexWrap="wrap" 
          justifyContent="center" 
          gap={2} 
          mt={4}
        >
          <Chip label="Sales CRM" variant="outlined" sx={{border:"1px solid #7B3FD5"}}/> 
          <Chip label="Invoicing Software" variant="outlined" /> 
          <Chip label="Expense Management Software" variant="outlined" sx={{border:"1px solid #7B3FD5"}}/> 
          <Chip label="Online Accounting Software" variant="outlined" sx={{border:"1px solid #7B3FD5"}}/> 
          <Chip label="GST Invoicing Software" variant="outlined" sx={{border:"1px solid #7B3FD5"}}/> 
          <Chip label="Delivery Challan Format" variant="outlined" sx={{border:"1px solid #7B3FD5"}}/> 
          <Chip label="Free Inventory Management Software" variant="outlined" sx={{border:"1px solid #7B3FD5"}}/> 
          <Chip label="GST Invoice Format" variant="outlined" sx={{border:"1px solid #7B3FD5"}}/> 
          <Chip label="Sales Lead Management software" variant="outlined" sx={{border:"1px solid #7B3FD5"}}/> 
          <Chip label="Quoting Software with Lead Management" variant="outlined" sx={{border:"1px solid #7B3FD5"}}/> 
          <Chip label="GST Quotation Template" variant="outlined" sx={{border:"1px solid #7B3FD5"}}/> 
        </Box> 
      </Container> 
    </Box>
  )
}
