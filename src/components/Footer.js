import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Button,
  Divider,
  TextField,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#0047AB',
        pt: 4,
        pb: 2,
        color: 'white',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container 
        maxWidth={false}
        sx={{ 
          width: '100%',
          maxWidth: '2000px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4, lg: 6 }
        }}
      >
        <Grid container spacing={2}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                mb: 1
              }}
            >
              WareFlow
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, maxWidth: 300, color: 'rgba(255, 255, 255, 0.9)' }}>
              Revolutionizing invoice financing in Africa through technology and trust. 
              Empowering businesses with innovative working capital solutions.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: 'white' }} href="https://www.linkedin.com/company/wareflow/" target="_blank">
                <LinkedInIcon />
              </IconButton>
              {/* <IconButton sx={{ color: 'white' }} href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }} href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }} href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton> */}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
              Quick Links
            </Typography>
            <Stack spacing={0.5}>
              <Link
                component={RouterLink}
                to="/about"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  '&:hover': { 
                    opacity: 0.8,
                    textDecoration: 'underline' 
                  }
                }}
              >
                About Us
              </Link>
              <Link
                component={RouterLink}
                to="/about#why-us"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  '&:hover': { 
                    opacity: 0.8,
                    textDecoration: 'underline' 
                  }
                }}
              >
                Why Us
              </Link>
              <Link
                component="button"
                onClick={() => scrollToSection('services')}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0,
                  '&:hover': { 
                    opacity: 0.8,
                    textDecoration: 'underline' 
                  }
                }}
              >
                Services
              </Link>
              <Link
                component="button"
                onClick={() => scrollToSection('marketplace')}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0,
                  '&:hover': { 
                    opacity: 0.8,
                    textDecoration: 'underline' 
                  }
                }}
              >
                Marketplace
              </Link>
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
              Services
            </Typography>
            <Stack spacing={0.5}>
              <Link href="#" underline="hover" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>Invoice Factoring</Link>
              <Link href="#" underline="hover" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>Supply Chain Finance</Link>
              <Link href="#" underline="hover" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>Digital Marketplace</Link>
              <Link href="#" underline="hover" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>Business Loans</Link>
              <Link href="#" underline="hover" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>Trade Finance</Link>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
              Contact Us
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: 'white' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                 Woodlands Business Park<br />
                Upperhill, Nairobi, Kenya.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: 'white' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>+254721233770</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: 'white' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>info@wareflowafrica.com</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            © {new Date().getFullYear()} WareFlow. All rights reserved.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ textAlign: { xs: 'center', sm: 'left' } }}
          >
            <Link
              component={RouterLink}
              to="/privacy-policy"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                '&:hover': { 
                  opacity: 0.8,
                  textDecoration: 'underline' 
                }
              }}
            >
              Privacy Policy
            </Link>
            <Link
              component={RouterLink}
              to="/terms-of-service"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                '&:hover': { 
                  opacity: 0.8,
                  textDecoration: 'underline' 
                }
              }}
            >
              Terms of Service
            </Link>
            <Link
              component={RouterLink}
              to="/security"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                '&:hover': { 
                  opacity: 0.8,
                  textDecoration: 'underline' 
                }
              }}
            >
              Security
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
