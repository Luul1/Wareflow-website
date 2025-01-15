import { Box, Container, Typography, Paper, Fade } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import { useState } from 'react';

function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using WareFlow's platform, you agree to be bound by these Terms of Service. 
      If you disagree with any part of the terms, you may not access our services.`
    },
    {
      title: '2. Platform Services',
      content: `WareFlow provides invoice financing and supply chain finance solutions through our digital platform. 
      Our services include invoice factoring, supplier financing, and a digital marketplace for investors.`
    },
    {
      title: '3. User Obligations',
      content: `Users must provide accurate information, maintain account security, and comply with all applicable laws 
      and regulations. Any fraudulent activity will result in immediate account termination.`
    },
    {
      title: '4. Business Requirements',
      content: `Businesses using our platform must be legally registered entities, maintain proper documentation, 
      and meet our credit assessment criteria. All submitted invoices must be legitimate and verifiable.`
    },
    {
      title: '5. Investor Requirements',
      content: `Investors must meet accreditation requirements where applicable, understand the risks involved, 
      and comply with all investment regulations. Minimum investment amounts and terms apply.`
    },
    {
      title: '6. Fees and Charges',
      content: `Service fees are clearly communicated before any transaction. Users agree to pay all applicable fees 
      as per our current fee schedule. Late payment penalties may apply.`
    },
    {
      title: '7. Liability Limitations',
      content: `WareFlow is not liable for any indirect, incidental, or consequential damages arising from platform use. 
      Our liability is limited to the fees paid for the specific service in question.`
    },
    {
      title: '8. Termination',
      content: `We reserve the right to terminate or suspend accounts for violations of these terms, fraudulent activity, 
      or any other reason we deem appropriate.`
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
        <Box 
          sx={{ 
            textAlign: 'center',
            mb: 8,
            position: 'relative'
          }}
        >
          <GavelIcon 
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
            Terms of Service
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
            Please read these terms carefully before using our platform.
          </Typography>

          <Typography 
            variant="caption" 
            sx={{ 
              color: '#888',
              display: 'block'
            }}
          >
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {sections.map((section, index) => (
            <Fade in timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
              <Paper
                key={index}
                elevation={0}
                onMouseEnter={() => setActiveSection(index)}
                onMouseLeave={() => setActiveSection(null)}
                sx={{
                  p: 4,
                  mb: 3,
                  borderRadius: 2,
                  border: '1px solid rgba(46,125,50,0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                    borderColor: 'rgba(46,125,50,0.2)',
                    '& .section-number': {
                      opacity: 1,
                      transform: 'translateY(0)'
                    }
                  }
                }}
              >
                <Typography 
                  className="section-number"
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: 'rgba(46,125,50,0.05)',
                    opacity: 0,
                    transform: 'translateY(10px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {index + 1}
                </Typography>

                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 700,
                    color: activeSection === index ? '#2E7D32' : 'inherit',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {section.title}
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666',
                    lineHeight: 1.8,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {section.content}
                </Typography>
              </Paper>
            </Fade>
          ))}
        </Box>

        <Box 
          sx={{ 
            mt: 8,
            textAlign: 'center',
            p: 4,
            borderRadius: 2,
            bgcolor: 'rgba(46,125,50,0.03)',
            border: '1px solid rgba(46,125,50,0.1)'
          }}
        >
          <Typography variant="body2" sx={{ color: '#666' }}>
            For questions about these Terms of Service, please contact us at{' '}
            <Box
              component="span"
              sx={{ 
                color: '#2E7D32',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }
              }}
            >
              info@wareflowafrica.com
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default TermsOfServicePage; 