'use client'

import { 
  Box, 
  Container, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography, 
  Button 
} from "@mui/material"

export default function POTable() {
  return (
    <>
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Purchase Order Template VS Refrens Purchase Order Generator
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead sx={{bgcolor:"#F6F2FE"}}>
                <TableRow>
                  <TableCell>Features</TableCell>
                  <TableCell align="center">Normal PO (Word/Excel)</TableCell>
                  <TableCell align="center">Refrens PO</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Professional Formats</TableCell>
                  <TableCell align="center" sx={{color:"red"}}>No</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>GST Compliance & Reports</TableCell>
                  <TableCell align="center" sx={{color:"red"}}>No</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Custom Templates & Auto Calculations</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Limited</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Multi-device Access</TableCell>
                  <TableCell align="center" sx={{color:"red"}}>No</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Real-time Inventory Sync</TableCell>
                  <TableCell align="center" sx={{color:"red"}}>No</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Accounting Integration</TableCell>
                  <TableCell align="center" sx={{color:"red"}}>No</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Auto Backup</TableCell>
                  <TableCell align="center" sx={{color:"red"}}>No</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vendor Tracking</TableCell>
                  <TableCell align="center" sx={{color:"red"}}>No</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Real-time Business Insights</TableCell>
                  <TableCell align="center" sx={{color:"red"}}>No</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Payment Integration</TableCell>
                  <TableCell align="center" sx={{color:"red"}}>No</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Free Support & Assistance</TableCell>
                  <TableCell align="center" sx={{color:"red"}}>No</TableCell>
                  <TableCell align="center" sx={{color:"green"}}>Yes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
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