import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Box,
  Button,
  Grid
} from '@mui/material';
import invoiceFactoring from '../assets/paid-invoice.webp';
import supplyChain from '../assets/logistics.jpeg';
import marketplace from '../assets/marketplace.jpeg';

function Services() {
  const services = [
    {
      title: 'Invoice Factoring',
      subtitle: 'Convert your invoices into immediate working capital',
      description: 'Get up to 90% of your invoice value within 24 hours, maintaining healthy cash flow without waiting 30-90 days for payment.',
      features: [
        'Same-day funding available',
        'Up to 90% advance rate',
        'No real estate collateral required',
        'Simple online application'
      ],
      image: invoiceFactoring
    },
    {
      title: 'Supplier Finance Program',
      subtitle: 'Optimize your supply chain while preserving working capital',
      description: 'Strengthen relationships with suppliers while extending your payment terms. Ensure your suppliers get paid early while you optimize cash flow.',
      features: [
        'Extended payment terms up to 90 days',
        'Early payments for suppliers',
        'Improved supplier relationships',
        'Better negotiating power'
      ],
      image: supplyChain
    },
    {
      title: 'Digital Marketplace',
      subtitle: 'Connect with verified investors for invoice trading',
      description: 'Our revolutionary platform connects businesses with investors looking for verified, low-risk investment opportunities in invoice financing.',
      features: [
        'Verified invoice listings',
        'Competitive investor rates',
        'Secure transaction processing',
        'Real-time monitoring'
      ],
      image: marketplace
    }
  ];

  return (
    <Box 
      id="services"
      sx={{ 
        position: 'relative',
        minHeight: '70vh',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 10 },
        background: '#0047AB',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 70%)',
          zIndex: 0
        }}
      />

      <Container maxWidth="xl">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            mb: { xs: 4, sm: 5, md: 6 },
            fontWeight: 800,
            color: 'white',
            textShadow: '0px 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          Our Services
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 240,
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Typography 
                    variant="h4" 
                    sx={{
                      color: '#2E7D32',
                      fontSize: { xs: '1.75rem', sm: '2rem' },
                      mb: 2,
                      fontWeight: 700
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="h6"
                    sx={{
                      color: '#000000',
                      mb: 3,
                      fontWeight: 500
                    }}
                  >
                    {service.subtitle}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    {service.features.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          p: 1.5,
                          mb: 1,
                          borderRadius: 2,
                          bgcolor: 'rgba(0,71,171,0.03)',
                          '&:hover': {
                            bgcolor: 'rgba(0,71,171,0.06)',
                            transform: 'translateX(8px)',
                            transition: 'all 0.3s ease'
                          }
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: '#2E7D32',
                            mr: 2
                          }}
                        />
                        <Typography sx={{ fontSize: '0.9rem' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      py: 1.5,
                      bgcolor: '#2E7D32',
                      '&:hover': {
                        bgcolor: '#1B5E20'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
