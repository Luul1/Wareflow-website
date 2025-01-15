import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Paper,
  Button,
  Divider,
  Stack
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import businessImage from '../assets/paid.jpg';
import investorImage from '../assets/investor.jpeg';
import { useNavigate } from 'react-router-dom';

function MarketPlace() {
  const navigate = useNavigate();

  const marketplaceInfo = {
    businesses: {
      benefits: [
        {
          title: 'Quick access to working capital',
          description: 'Get funded within 24 hours of invoice verification'
        },
        {
          title: 'Simple digital application process',
          description: 'Complete your application in minutes with our user-friendly platform'
        },
        {
          title: 'Flexible financing options',
          description: 'Choose from various financing solutions tailored to your needs'
        },
        {
          title: 'No hidden fees',
          description: 'Transparent pricing with clear terms and conditions'
        },
        {
          title: 'Professional support team',
          description: '24/7 dedicated support for all your financing needs'
        },
        {
          title: 'Real-time tracking and reporting',
          description: 'Monitor your invoices and payments in real-time'
        }
      ],
      features: [
        'Up to 90% advance rate',
        'Same-day funding available',
        'No long-term contracts',
        'Competitive rates'
      ]
    },
    investors: {
      benefits: [
        {
          title: 'Verified investment opportunities',
          description: 'All businesses and invoices undergo thorough verification'
        },
        {
          title: 'Diversified portfolio options',
          description: 'Invest across different industries and invoice sizes'
        },
        {
          title: 'Competitive returns',
          description: 'Earn attractive returns on your investments'
        },
        {
          title: 'Full transparency',
          description: 'Access detailed reports and real-time performance metrics'
        },
        {
          title: 'Secure transaction processing',
          description: 'Bank-grade security for all transactions'
        },
        {
          title: 'Detailed risk assessments',
          description: 'Comprehensive risk analysis for each investment opportunity'
        }
      ],
      features: [
        'Automated investment options',
        'Regular payment schedules',
        'Detailed performance analytics',
        'Priority access to new opportunities'
      ]
    }
  };

  const renderSection = (type, data, isReversed = false) => (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 4,
        height: '100%',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 40px rgba(46,125,50,0.15)'
        }
      }}
    >
      <Grid container direction="column">
        {/* Image Section - Now at the top */}
        <Grid item xs={12}>
          <Box
            sx={{
              position: 'relative',
              height: 300,  // Fixed height for image section
              width: '100%'
            }}
          >
            <Box
              component="img"
              src={type === 'businesses' ? businessImage : investorImage}
              alt={type === 'businesses' ? 'Business Finance' : 'Investor Platform'}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                p: 3,
                transition: 'all 0.3s ease'
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 600,
                  mb: 1,
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                {type === 'businesses' ? 'For Businesses' : 'For Investors'}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.95)',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                {type === 'businesses' 
                  ? 'Quick and flexible financing solutions for your business' 
                  : 'Secure investment opportunities with verified businesses'}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Content Section */}
        <Box sx={{ p: { xs: 3, md: 4 }, bgcolor: 'rgba(46,125,50,0.02)' }}>
          {/* Benefits Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#2E7D32', fontWeight: 600 }}>
              Key Benefits
            </Typography>
            <Grid container spacing={2}>
              {data.benefits.map((benefit, idx) => (
                <Grid item xs={12} key={idx}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      {benefit.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Features Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#2E7D32', fontWeight: 600 }}>
              Features
            </Typography>
            <Grid container spacing={1}>
              {data.features.map((feature, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleOutlineIcon sx={{ color: '#2E7D32', fontSize: 20 }} />
                    <Typography variant="body2">{feature}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* CTA Button */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate(type === 'businesses' ? '/register/business' : '/register/investor')}
              sx={{
                py: 1.5,
                px: 6,
                borderRadius: 3,
                fontSize: '1.1rem',
                textTransform: 'none',
                boxShadow: '0 4px 20px rgba(46,125,50,0.15)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 25px rgba(46,125,50,0.2)'
                }
              }}
            >
              {type === 'businesses' ? 'Get Started' : 'Start Investing'}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Paper>
  );

  return (
    <Box 
      id="marketplace" 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Design Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(46,125,50,0.03) 0%, transparent 70%)',
          zIndex: 0
        }}
      />

      <Container maxWidth={false} sx={{ maxWidth: '2000px', position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography 
            variant="h2" 
            align="center"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Trade Hub
          </Typography>

          <Typography 
            variant="h5" 
            align="center"
            sx={{
              mb: 4,
              color: '#2E7D32',
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 500,
              fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.7rem' }
            }}
          >
            Your Gateway to Seamless Invoice Trading and Investment
          </Typography>

          <Typography 
            variant="body1" 
            align="center"
            sx={{
              mb: 6,
              color: '#000000',
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              px: { xs: 2, sm: 0 }
            }}
          >
            Welcome to WareFlow's Trade Hub - a state-of-the-art digital platform where businesses and investors meet. 
            We facilitate quick access to working capital through invoice financing while providing investors with 
            secure, high-yield investment opportunities.
          </Typography>

          <Grid 
            container 
            spacing={4} 
            justifyContent="center" 
            sx={{ 
              mb: 8,
              px: { xs: 2, sm: 4, md: 6 }
            }}
          >
            {[
              {
                title: 'For Businesses',
                description: 'Convert your outstanding invoices into immediate working capital. Get funded within 24 hours with competitive rates.',
                icon: '💼'
              },
              {
                title: 'For Investors',
                description: 'Access a diverse portfolio of verified invoice investments. Earn attractive returns with thorough risk assessment.',
                icon: '📈'
              },
              {
                title: 'Platform Benefits',
                description: 'Secure transactions, real-time tracking, automated processes, and complete transparency throughout.',
                icon: '🛡️'
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(46,125,50,0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(46,125,50,0.1)',
                      background: 'rgba(255,255,255,0.95)'
                    }
                  }}
                >
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      mb: 2,
                      fontSize: '2.5rem'
                    }}
                  >
                    {item.icon}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#2E7D32', 
                      mb: 2, 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#000000',
                      lineHeight: 1.7,
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            {renderSection('businesses', marketplaceInfo.businesses)}
          </Grid>
          <Grid item xs={12} md={6}>
            {renderSection('investors', marketplaceInfo.investors, true)}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MarketPlace;
