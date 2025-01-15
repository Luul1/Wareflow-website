import { Container, Typography, Box, Paper } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function HowItWorks() {
  const steps = [
    {
      title: 'Submit Invoice',
      description: 'Upload your invoice through our secure Trade Hub',
      icon: <DescriptionIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      position: { top: '0%', left: '50%', transform: 'translateX(-50%)' }
    },
    {
      title: 'Quick Verification',
      description: 'Our team verifies the invoice within hours',
      icon: <VerifiedIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      position: { top: '50%', right: '0%', transform: 'translateY(-50%)' }
    },
    {
      title: 'Receive Funding',
      description: 'Get up to 90% of invoice value instantly',
      icon: <AccountBalanceWalletIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      position: { bottom: '0%', left: '50%', transform: 'translateX(-50%)' }
    },
    {
      title: 'Complete Payment',
      description: 'Buyer pays the invoice at maturity',
      icon: <DoneAllIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      position: { top: '50%', left: '0%', transform: 'translateY(-50%)' }
    }
  ];

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '2000px' }}>
        <Typography 
          variant="h2" 
          align="center"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 800,
            mb: 6,
            background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          How It Works
        </Typography>

        <Box 
          sx={{ 
            position: 'relative',
            width: '100%',
            height: '600px',
            maxWidth: '800px',
            mx: 'auto',
            mt: 8
          }}
        >
          {/* Center Circle */}
          <Paper
            elevation={3}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
              color: 'white',
              zIndex: 1
            }}
          >
            <Typography variant="h5" align="center">
              WareFlow Process
            </Typography>
          </Paper>

          {/* Process Steps */}
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                ...step.position,
                width: '250px',
                zIndex: 2
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 40px rgba(46,125,50,0.12)'
                  }
                }}
              >
                <Box sx={{ mb: 2 }}>{step.icon}</Box>
                <Typography variant="h6" sx={{ mb: 1, color: '#000000' }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000' }}>
                  {step.description}
                </Typography>
              </Paper>
              
              {/* Connecting Arrows */}
              <ArrowForwardIcon 
                sx={{
                  position: 'absolute',
                  color: '#2E7D32',
                  fontSize: 30,
                  transform: `rotate(${index * 90}deg)`,
                  // Position arrows based on index
                  ...(index === 0 && { bottom: '-20px', left: '50%', transform: 'translateX(-50%) rotate(90deg)' }),
                  ...(index === 1 && { left: '-20px', top: '50%', transform: 'translateY(-50%) rotate(180deg)' }),
                  ...(index === 2 && { top: '-20px', left: '50%', transform: 'translateX(-50%) rotate(270deg)' }),
                  ...(index === 3 && { right: '-20px', top: '50%', transform: 'translateY(-50%)' })
                }}
              />
            </Box>
          ))}

          {/* Circular Path */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              border: '2px dashed #2E7D32',
              opacity: 0.3
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default HowItWorks; 