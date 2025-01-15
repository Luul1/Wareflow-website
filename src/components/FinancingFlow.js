import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaidIcon from '@mui/icons-material/Paid';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutorenewIcon from '@mui/icons-material/Autorenew';

function FinancingFlow() {
  const investorFlowSteps = [
    {
      title: 'Investment Opportunity',
      description: 'Access verified invoice opportunities',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'white' }} />,
      details: [
        'Pre-vetted business invoices',
        'Diverse investment options',
        'Transparent risk ratings',
        'Multiple investment sizes'
      ]
    },
    {
      title: 'Due Diligence',
      description: 'Review comprehensive business data',
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: 'white' }} />,
      details: [
        'Business credit scores',
        'Historical performance data',
        'Industry analysis',
        'Risk assessment reports'
      ]
    },
    {
      title: 'Investment Process',
      description: 'Secure and efficient investment deployment',
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'white' }} />,
      details: [
        'Digital contract signing',
        'Automated fund transfer',
        'Real-time tracking',
        'Investment confirmation'
      ]
    },
    {
      title: 'Returns & Reinvestment',
      description: 'Manage returns and reinvestment options',
      icon: <AutorenewIcon sx={{ fontSize: 40, color: 'white' }} />,
      details: [
        'Automated repayments',
        'Regular yield distributions',
        'Reinvestment opportunities',
        'Performance analytics'
      ]
    }
  ];

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: '#0047AB',
        color: 'white'
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '2000px' }}>
        <Typography 
          variant="h2" 
          align="center"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 800,
            mb: 2,
            color: 'white'
          }}
        >
          Investor Financing Flow
        </Typography>

        <Typography 
          variant="h5" 
          align="center"
          sx={{
            mb: 8,
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Join our network of investors and earn competitive returns through invoice financing
        </Typography>

        <Grid container spacing={4}>
          {investorFlowSteps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  borderRadius: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    bgcolor: 'rgba(255, 255, 255, 0.08)'
                  }
                }}
              >
                <Box 
                  sx={{ 
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%',
                      p: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: '1.25rem'
                    }}
                  >
                    {step.title}
                  </Typography>
                </Box>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3, 
                    opacity: 0.9,
                    fontSize: '1rem'
                  }}
                >
                  {step.description}
                </Typography>

                <Box 
                  component="ul" 
                  sx={{ 
                    pl: 2,
                    '& li': {
                      mb: 1,
                      opacity: 0.8,
                      '&:hover': {
                        opacity: 1,
                        transform: 'translateX(5px)',
                        transition: 'all 0.2s ease'
                      }
                    }
                  }}
                >
                  {step.details.map((detail, idx) => (
                    <Typography 
                      component="li" 
                      key={idx}
                      sx={{ 
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {detail}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default FinancingFlow; 