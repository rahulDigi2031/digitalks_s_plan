'use client';
import { Box, Typography, Button, Link } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: '#fff', borderTop: '1px solid #e6ebf1' }}>
        <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 3 }, py: { xs: 4, md: 6 }, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <Box sx={{ flex: '1 1 260px', minWidth: 240, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1f2937' }}>Digitalks</Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mt: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button sx={{ minWidth: 36, p: '6px', bgcolor: '#eef2f7', color: '#111', '&:hover': { bgcolor: '#e5eaf1' } }}><FaFacebookF /></Button>
              <Button sx={{ minWidth: 36, p: '6px', bgcolor: '#eef2f7', color: '#111', '&:hover': { bgcolor: '#e5eaf1' } }}><FaTwitter /></Button>
              <Button sx={{ minWidth: 36, p: '6px', bgcolor: '#eef2f7', color: '#111', '&:hover': { bgcolor: '#e5eaf1' } }}><FaInstagram /></Button>
              <Button sx={{ minWidth: 36, p: '6px', bgcolor: '#eef2f7', color: '#111', '&:hover': { bgcolor: '#e5eaf1' } }}><FaLinkedinIn /></Button>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ color: '#6b7280' }}>Made with ☕🍪 and ❤️ in Surat.</Typography>
              <Typography variant="body2" sx={{ color: '#6b7280', mt: 1 }}>+91-99744 01999</Typography>
              <Typography variant="body2" sx={{ color: '#6b7280' }}>digitalks09@gmail.com</Typography>
            </Box>
          </Box>

          <Box sx={{ flex: '3 1 600px', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 3 }}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Company</Typography>
              {['About Us','Contact Us','We are Hiring','Blog','Help and Support'].map((t) => (
                <Typography key={t} variant="body2" sx={{ color: '#4b5563', mb: 0.75 }}><Link href="#" underline="none" sx={{ color: 'inherit' }}>{t}</Link></Typography>
              ))}
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Helpful Links</Typography>
              {['Digitalks Knowledge Base','Pricing','Become Refrens Partner','Feedback','Terms of Service','Privacy Policy','Digitalks Android App','Digitalks iOS App'].map((t) => (
                <Typography key={t} variant="body2" sx={{ color: '#4b5563', mb: 0.75 }}><Link href="#" underline="none" sx={{ color: 'inherit' }}>{t}</Link></Typography>
              ))}
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Products</Typography>
              {['Cloud Accounting Software','AI Accounting Agent','GST Billing Software','e-Way Bill Software','e-Invoicing Software','Invoicing Software','Quotation Software','Lead Management Software','Sales CRM','Lead to Quote Software'].map((t) => (
                <Typography key={t} variant="body2" sx={{ color: '#4b5563', mb: 0.75 }}><Link href="#" underline="none" sx={{ color: 'inherit' }}>{t}</Link></Typography>
              ))}
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Services</Typography>
              {['Hire Chartered Accountant','Chartered Accountant in Mumbai','Hire Freelancers'].map((t) => (
                <Typography key={t} variant="body2" sx={{ color: '#4b5563', mb: 0.75 }}><Link href="#" underline="none" sx={{ color: 'inherit' }}>{t}</Link></Typography>
              ))}
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2, mb: 1 }}>Templates</Typography>
              {['Invoice Templates','GST Invoice Format','Quotation Templates','Purchase Order Templates','Tax Invoice Templates','Delivery Challan Format'].map((t) => (
                <Typography key={t} variant="body2" sx={{ color: '#4b5563', mb: 0.75 }}><Link href="#" underline="none" sx={{ color: 'inherit' }}>{t}</Link></Typography>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ borderTop: '1px solid #e6ebf1', py: 2 }}>
          <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 3 }, display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center', justifyContent: { xs: 'center', md: 'space-between' }, textAlign: { xs: 'center', md: 'left' } }}>
            
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, width: { xs: '100%', md: 'auto' }, flexWrap: 'wrap' }}>
              {['VISA','Mastercard','UPI','NetBanking','NEFT/IMPS'].map((p) => (
                <Box key={p} sx={{ px: 1.5, py: 0.5, bgcolor: '#eef2f7', borderRadius: 1 }}>
                  <Typography variant="caption" sx={{ color: '#4b5563' }}>{p}</Typography>
                </Box>
              ))}
            </Box>
            <Typography variant="body2" sx={{ color: '#6b7280', width: { xs: '100%', md: 'auto' } }}>© 2025 Digitalks. All rights reserved.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}