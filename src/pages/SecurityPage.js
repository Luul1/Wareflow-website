import { Box, Container, Typography, Paper, Fade, Grid } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShieldIcon from '@mui/icons-material/Shield';
import { useState } from 'react';

function SecurityPage() {
  const [activeFeature, setActiveFeature] = useState(null);

  const securityFeatures = [
    {
      icon: <LockIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      title: 'Bank-Level Encryption',
      description: 'We use 256-bit encryption and SSL technology to ensure your data and transactions are always secure.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      title: 'Secure Authentication',
      description: 'Multi-factor authentication and regular security audits protect your account from unauthorized access.'
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      title: 'Data Protection',
      description: 'Your sensitive information is protected with advanced security protocols and regular backups.'
    },
    {
      icon: <ShieldIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      title: 'Compliance Standards',
      description: 'We adhere to international security standards and maintain strict compliance with financial regulations.'
    }
  ];

  return (
    <Box 
      sx={{ 
        pt: { xs: 12, md: 15 }, 
        pb: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, rgba(46,125,50,0.03) 0%, rgba(0,71,171,0.03) 100%)'
      }}
    >
      <Container maxWidth="md">
        {/* Header Section */}
        <Box 
          sx={{ 
            textAlign: 'center',
            mb: 8,
            position: 'relative'
          }}
        >
          <SecurityIcon 
            sx={{ 
              fontSize: 60, 
              color: '#2E7D32',
              opacity: 0.1,
              position: 'absolute',
              top: -30,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 0
            }} 
          />
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 2, 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              zIndex: 1
            }}
          >
            Security at WareFlow
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3, 
              color: '#666',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem'
            }}
          >
            Your security is our top priority. We employ industry-leading security measures
            to protect your data and transactions.
          </Typography>
        </Box>

        {/* Security Features Grid */}
        <Grid container spacing={4}>
          {securityFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Fade in timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
                <Paper
                  elevation={0}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                  sx={{
                    p: 4,
                    height: '100%',
                    border: '1px solid rgba(46,125,50,0.1)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                      borderColor: 'rgba(46,125,50,0.2)',
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      mb: 2,
                      transform: activeFeature === index ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 1, 
                      fontWeight: 600,
                      color: activeFeature === index ? '#2E7D32' : 'inherit',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Additional Security Information */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
            Our Security Commitment
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 2,
              border: '1px solid rgba(46,125,50,0.1)',
              background: 'rgba(255,255,255,0.8)'
            }}
          >
            <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, mb: 3 }}>
              At WareFlow, we understand the importance of security in financial transactions.
              Our platform is built with multiple layers of security to ensure your data
              and transactions are protected at all times.
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, mb: 3 }}>
              We regularly update our security measures and conduct thorough audits to
              maintain the highest standards of protection for our users. Our team of
              security experts continuously monitors the platform for any potential threats.
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8 }}>
              All transactions on WareFlow are encrypted and processed through secure
              channels. We maintain strict access controls and follow industry best
              practices for data protection and privacy.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default SecurityPage; 