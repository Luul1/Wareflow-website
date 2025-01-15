import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import FactoryIcon from '@mui/icons-material/Factory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ConstructionIcon from '@mui/icons-material/Construction';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

// Import industry images
import manufacturingImg from '../assets/manufacturing.jpeg';
import logisticsImg from '../assets/logestics.jpeg';
import constructionImg from '../assets/construction.jpeg';
import retailImg from '../assets/retail.jpeg';
import agricultureImg from '../assets/agriculture.jpeg';
import healthcareImg from '../assets/healthcare.jpeg';

function Industries() {
  const industries = [
    {
      title: 'Manufacturing',
      icon: <FactoryIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      description: '60-90 day payment delays impact production cycles. Get instant funding against your invoices.',
      image: manufacturingImg,
      features: [
        'Instant working capital',
        'On-time supplier payments',
        'Cover operational costs',
        'Scale production'
      ]
    },
    {
      title: 'Logistics',
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      description: 'Keep your fleet moving with immediate funding for fuel and maintenance costs.',
      image: logisticsImg,
      features: [
        'Instant fuel financing',
        'Quick maintenance funding',
        'Steady cash flow',
        'Fleet expansion support'
      ]
    },
    {
      title: 'Construction',
      icon: <ConstructionIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      description: 'Access funds for materials and labor while waiting for project payments.',
      image: constructionImg,
      features: [
        'Project-based financing',
        'Material funding',
        'Timely payroll',
        'Equipment costs'
      ]
    },
    {
      title: 'Retail',
      icon: <ShoppingBasketIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      description: 'Maintain optimal inventory levels with flexible financing solutions.',
      image: retailImg,
      features: [
        'Seasonal stock funding',
        'Supplier payments',
        'Inventory management',
        'Growth capital'
      ]
    },
    {
      title: 'Agriculture',
      icon: <AgricultureIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      description: 'Bridge the gap between planting costs and harvest payments.',
      image: agricultureImg,
      features: [
        'Seasonal financing',
        'Harvest funding',
        'Equipment costs',
        'Growth support'
      ]
    },
    {
      title: 'Healthcare',
      icon: <HealthAndSafetyIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      description: 'Quick access to funds while waiting for insurance payments.',
      image: healthcareImg,
      features: [
        'Insurance claim advances',
        'Equipment financing',
        'Supply inventory',
        'Staff payments'
      ]
    }
  ];

  return (
    <Box 
      id="industries" 
      sx={{ 
        py: { xs: 4, sm: 6, md: 10 },
        bgcolor: 'background.default'
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{ 
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Typography 
          variant="h2" 
          align="center"
          sx={{
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
            fontWeight: 800,
            mb: { xs: 1, sm: 2 },
            background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Industries We Serve
        </Typography>

        <Typography 
          variant="h5" 
          align="center"
          sx={{
            mb: { xs: 4, sm: 6, md: 8 },
            color: '#666',
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            px: { xs: 2, sm: 0 }
          }}
        >
          Specialized invoice financing solutions across diverse business sectors
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ maxWidth: '1100px', mx: 'auto' }}>
          {industries.map((industry, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  height: '100%',
                  borderRadius: { xs: 2, sm: 3 },
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-8px)' },
                    boxShadow: { xs: '0 4px 20px rgba(46,125,50,0.15)', md: '0 12px 40px rgba(46,125,50,0.15)' }
                  }
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 140, sm: 160 },
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    component="img"
                    src={industry.image}
                    alt={industry.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: { xs: 'none', md: 'scale(1.05)' }
                      }
                    }}
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7))',
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: { xs: 1.5, sm: 2 }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
                      <Box sx={{ 
                        bgcolor: 'white', 
                        borderRadius: '50%', 
                        p: { xs: 0.75, sm: 1 },
                        display: 'flex',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                      }}>
                        {industry.icon}
                      </Box>
                      <Typography 
                        variant="h5"
                        sx={{ 
                          color: 'white',
                          fontWeight: 600,
                          fontSize: { xs: '1.25rem', sm: '1.5rem' },
                          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}
                      >
                        {industry.title}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Content Section */}
                <Box sx={{ p: { xs: 1.5, sm: 2 } }}>
                  <Typography 
                    variant="body1"
                    sx={{
                      mb: { xs: 1.5, sm: 2 },
                      color: '#000000',
                      lineHeight: 1.5,
                      fontSize: { xs: '0.875rem', sm: '0.9rem' }
                    }}
                  >
                    {industry.description}
                  </Typography>

                  {/* Features List */}
                  <Box sx={{ pl: { xs: 1, sm: 1.5 } }}>
                    {industry.features.map((feature, idx) => (
                      <Typography
                        key={idx}
                        component="div"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: { xs: 0.5, sm: 0.75 },
                          mb: { xs: 0.5, sm: 0.75 },
                          color: '#000000',
                          fontSize: { xs: '0.8rem', sm: '0.85rem' },
                          '&:before': {
                            content: '""',
                            width: { xs: 3, sm: 4 },
                            height: { xs: 3, sm: 4 },
                            bgcolor: '#2E7D32',
                            borderRadius: '50%'
                          }
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Industries; 