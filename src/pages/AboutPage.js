import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import aboutImage from '../assets/sme.jpg';

function AboutPage() {
  return (
    <Box sx={{ pt: { xs: 8, md: 10 } }}>
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'background.default',
          overflow: 'hidden',
          py: { xs: 10, md: 15 },
          borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 30%, rgba(46,125,50,0.05) 0%, transparent 70%),
              radial-gradient(circle at 80% 70%, rgba(0,71,171,0.05) 0%, transparent 70%)
            `,
            zIndex: 0
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid 
            container 
            spacing={6} 
            alignItems="center"
            sx={{ 
              flexDirection: { xs: 'column-reverse', md: 'row' }
            }}
          >
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.8rem' },
                    fontWeight: 800,
                    mb: 3,
                    background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.2,
                    textShadow: '0px 2px 4px rgba(0,0,0,0.05)'
                  }}
                >
                  Revolutionizing Invoice Financing
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#555',
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    fontWeight: 400,
                    maxWidth: { xs: '100%', md: '90%' }
                  }}
                >
                  Empowering businesses with innovative financial solutions while creating secure investment opportunities.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    bottom: 20,
                    left: 20,
                    background: 'linear-gradient(45deg, rgba(46,125,50,0.1), rgba(0,71,171,0.1))',
                    borderRadius: 5,
                    zIndex: 0
                  }
                }}
              >
                <Box
                  component="img"
                  src={aboutImage}
                  alt="WareFlow Vision"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box 
        sx={{ 
          bgcolor: '#0047AB', 
          color: 'white', 
          py: { xs: 8, md: 10 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(0,0,0,0.1), transparent)',
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} justifyContent="center">
            {[
            //   { number: '100+', label: 'Invoices Funded' },
              { number: '24hrs', label: 'Funding Time' },
              { number: '500 usd+', label: 'Ticket Size' },
              { number: '99%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    bgcolor: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      border: '1px solid rgba(255,255,255,0.4)'
                    }
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      fontWeight: 700,
                      mb: 1,
                      color: 'white',
                      textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      opacity: 0.9,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 500,
                      color: 'white'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <About />
      </Box>
    </Box>
  );
}

export default AboutPage; 



