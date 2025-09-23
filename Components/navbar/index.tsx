
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

type NavbarProps = {
  brandName?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoHeight?: number;
};

export default function Navbar({ brandName = 'Digitalks', logoSrc, logoAlt = 'Brand logo', logoHeight = 20 }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleDrawer = (open: boolean) => () => setMobileOpen(open);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: '#111827' }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar variant="dense" sx={{ minHeight:65, px: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {logoSrc ? (
              <Box sx={{ display: 'flex', alignItems: 'center', height: logoHeight }}>
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  height={logoHeight}
                  width={Math.round(logoHeight * 5)}
                  style={{ height: logoHeight, width: 'auto' }}
                  priority
                />
              </Box>
            ) : (
              <Typography
                variant="h6"
                component="span"
                sx={{ color: '#ffffff', fontWeight: 600, letterSpacing: 0.2 }}
              >
                {brandName}
              </Typography>
            )}
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            aria-label="open navigation menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#ffffff' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: 260, bgcolor: '#0f1420', color: '#fff' } }}
      >
        <Box sx={{ px: 2, py: 2 }}>
          {logoSrc ? (
            <Image src={logoSrc} alt={logoAlt} height={24} width={120} style={{ height: 24, width: 'auto' }} />
          ) : (
            <Typography variant="h6" sx={{ fontWeight: 600 }}>{brandName}</Typography>
          )}
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
        <List>
          {['Home', 'Features', 'Pricing', 'Contact'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}