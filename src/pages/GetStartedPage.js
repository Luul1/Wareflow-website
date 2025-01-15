import { Box, Container, Typography, Grid, Button, Paper } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

function GetStartedPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: { xs: 12, md: 15 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 800,
            mb: 3,
            background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Get Started with WareFlow
        </Typography>

        <Typography
          variant="h5"
          align="center"
          sx={{
            color: '#666',
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1.1rem', sm: '1.25rem' }
          }}
        >
          Choose your path to financial growth. Whether you're a business seeking funding
          or an investor looking for opportunities, we've got you covered.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Business Option */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                border: '1px solid rgba(46,125,50,0.1)',
                borderRadius: 4,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(46,125,50,0.1)'
                }
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <BusinessIcon sx={{ fontSize: 60, color: '#2E7D32' }} />
              </Box>
              <Typography
                variant="h4"
                align="center"
                sx={{ mb: 2, fontWeight: 600 }}
              >
                For Businesses
              </Typography>
              <Typography
                align="center"
                sx={{ mb: 4, color: '#666' }}
              >
                Get quick access to working capital through invoice financing
                and supply chain solutions.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/register/business')}
                sx={{
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600
                }}
              >
                Register as Business
              </Button>
            </Paper>
          </Grid>

          {/* Investor Option */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                border: '1px solid rgba(46,125,50,0.1)',
                borderRadius: 4,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(46,125,50,0.1)'
                }
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <AccountBalanceIcon sx={{ fontSize: 60, color: '#2E7D32' }} />
              </Box>
              <Typography
                variant="h4"
                align="center"
                sx={{ mb: 2, fontWeight: 600 }}
              >
                For Investors
              </Typography>
              <Typography
                align="center"
                sx={{ mb: 4, color: '#666' }}
              >
                Access verified invoice financing opportunities with attractive
                returns and minimal risk.
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/register/investor')}
                sx={{
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600
                }}
              >
                Register as Investor
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default GetStartedPage; 