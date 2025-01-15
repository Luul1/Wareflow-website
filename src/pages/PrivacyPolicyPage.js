import { Box, Container, Typography, Paper, Fade } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import { useState } from 'react';

function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including personal identification information, 
      business details, and financial information necessary for our services. This includes but is not limited to 
      company registration details, invoice data, and banking information.`
    },
    {
      title: 'How We Use Your Information',
      content: `Your information is used to provide and improve our services, process transactions, verify identities, 
      assess credit risk, communicate with you about your account, and comply with regulatory requirements. We may 
      analyze data to enhance our platform's functionality and user experience.`
    },
    {
      title: 'Information Sharing',
      content: `We share information only as necessary to provide our services, including with verified investors, 
      payment processors, and regulatory authorities. We never sell your personal information to third parties for 
      marketing purposes.`
    },
    {
      title: 'Data Security',
      content: `We implement robust security measures to protect your information, including encryption, secure servers, 
      and regular security audits. Access to your data is strictly controlled and monitored.`
    },
    {
      title: 'Your Rights',
      content: `You have the right to access, correct, or delete your personal information. You can also opt out of 
      certain data processing activities. Contact our privacy team to exercise these rights.`
    },
    {
      title: 'Cookie Policy',
      content: `We use cookies and similar technologies to enhance your experience on our platform. You can control 
      cookie settings through your browser preferences.`
    },
    {
      title: 'Data Retention',
      content: `We retain your information for as long as necessary to provide our services and comply with legal 
      obligations. When no longer needed, data is securely deleted.`
    },
    {
      title: 'Updates to Privacy Policy',
      content: `We may update this privacy policy periodically. We will notify you of any material changes through 
      our platform or via email.`
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
            Privacy Policy
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
            At WareFlow, we take your privacy seriously. This policy describes how we collect, use, 
            and protect your personal and business information.
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

        {/* Content Sections */}
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

        {/* Footer Contact */}
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
            For privacy-related inquiries, please contact us at{' '}
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

export default PrivacyPolicyPage; 