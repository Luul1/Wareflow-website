import { Container, Typography, Button, Box, Grid, Stack, Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import invoiceImage from '../assets/invoice.jpeg';
import heroBackground from '../assets/growth.jpg';
import { useNavigate } from 'react-router-dom';
import RateCalculator from './RateCalculator';
import { useState } from 'react';

function Hero() {
  const navigate = useNavigate();
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  const highlights = [
    {
      icon: <SpeedIcon color="primary" sx={{ fontSize: 40 }} />,
      title: "Fast Funding",
      description: "Get paid within 24 hours"
    },
    {
      icon: <SecurityIcon color="primary" sx={{ fontSize: 40 }} />,
      title: "Secure Platform",
      description: "Bank-grade security protocols"
    },
    {
      icon: <AccountBalanceWalletIcon color="primary" sx={{ fontSize: 40 }} />,
      title: "Flexible Terms",
      description: "Tailored financing solutions"
    }
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '100vh', md: '70vh' },
        pt: { xs: 8, md: 6 },
        pb: { xs: 4, md: 4 },
        background: `linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden'
      }}
    >
      <Container 
        maxWidth={false}
        sx={{ 
          width: '100%',
          maxWidth: '2000px',
          mx: 'auto',
          position: 'relative', 
          zIndex: 2,
          mt: { xs: 4, md: 0 }
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              maxWidth: 800,
              px: { xs: 2, sm: 0 }
            }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { 
                    xs: '2rem',
                    sm: '2.5rem',
                    md: '3.5rem',
                    lg: '4rem'
                  },
                  fontWeight: 700,
                  mb: { xs: 3, md: 2 },
                  background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: { xs: 1.3, md: 1.2 },
                  wordBreak: 'break-word',
                  hyphens: 'auto',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Africa's Premier Invoice Financing Platform
              </Typography>

              <Typography
                variant="h5"
                sx={{ 
                  mb: 4,
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                  lineHeight: 1.6,
                  color: '#000000'
                }}
              >
                Unlock your business potential with our innovative invoice financing platform. 
                Get up to 90% of your invoice value within 24 hours, without the hassle of traditional financing.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate('/get-started')}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}
                >
                  Get Started Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => setCalculatorOpen(true)}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}
                >
                  Calculate Your Rate
                </Button>
              </Stack>

              <RateCalculator 
                open={calculatorOpen}
                onClose={() => setCalculatorOpen(false)}
              />

              {/* Key Statistics */}
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={3}>
                  {[
                    { number: "500 usd+", label: "Ticket Size" },
                    { number: "99%", label: "Client Satisfaction" },
                    { number: "24hrs", label: "Average Funding Time" }
                  ].map((stat, index) => (
                    <Grid item xs={4} key={index}>
                      <Typography 
                        variant="h4" 
                        color="primary" 
                        sx={{ 
                          fontWeight: 'bold',
                          fontSize: { xs: '1.5rem', sm: '2rem' }
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          color: '#000000'
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              {/* Main Image */}
              <Box
                component="img"
                src={invoiceImage}
                alt="Business Finance"
                sx={{
                  width: '100%',
                  maxWidth: '800px',
                  height: 'auto',
                  display: 'block',
                  margin: 'auto',
                  filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))',
                  borderRadius: '12px'
                }}
              />

              {/* Feature Highlights */}
              <Stack spacing={3} sx={{ mt: 4, maxWidth: '90%', mx: 'auto' }}>
                {highlights.map((highlight, index) => (
                  <Paper
                    key={index}
                    elevation={2}
                    sx={{
                      p: 3.5,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(10px)'
                      },
                      width: '100%',
                      borderRadius: 2
                    }}
                  >
                    <Box sx={{ minWidth: 60 }}>
                      {highlight.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#000000',
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          mb: 0.5
                        }}
                      >
                        {highlight.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontSize: '1rem',
                          color: '#000000',
                          opacity: 0.87
                        }}
                      >
                        {highlight.description}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;