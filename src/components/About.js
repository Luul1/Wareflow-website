import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  IconButton 
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ceoImage from '../assets//ceo.jpeg';
import ctoImage from '../assets/cto.jpeg';
import cooImage from '../assets/coo.jpeg';
import WhyUs from './WhyUs';

function About() {
  const leadership = [
    {
      name: 'George Gichuhi',
      position: 'Chief Executive Officer and Founder of WareFlow Africa.',
      description: '10+ years of experience in entrepreneurship across logistics and supply chain finance. A  Problem solver that builds scalable solutions for alternative financing for businesses in Africa.',
      image: ceoImage,
      linkedin: 'https://www.linkedin.com/in/george-gichuhi/',
      email: 'george@wareflowafrica.com'
    },
    {
      name: 'Adan Kalla', 
      position: 'Chief Technology Officer and Co-founder',
      description: 'Tech leader with expertise of 15+ years in fintech and blockchain solutions. Driven by the challenge of finding smarter, faster ways to deliver impactful results, creating tech solutions that are built to last.',
      image: ctoImage,
      linkedin: 'https://www.linkedin.com/in/adankalla/',
      email: 'adan@wareflowafrica.com'
    },
    {
      name: 'Jane Wariko',
      position: 'Chief Operating Officer and  Co-founder',
      description: 'Operations expert with 10+ years in operations and fintech. A seasoned professional in risk management, excelling as a risk consultant for six years with a focus on operations',
      image: cooImage,
      linkedin: 'https://www.linkedin.com/in/janewariko-wambui/',
      email: 'jane@wareflowafrica.com'
    }
  ];

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        {/* Why Us Section */}
        <Box sx={{ mb: 12 }}>
          <WhyUs />
        </Box>

        {/* Leadership Section */}
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: 2,
            fontWeight: 800,
            background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Our Leadership Team
        </Typography>
        
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            mb: 8,
            color: '#666',
            maxWidth: 800,
            mx: 'auto'
          }}
        >
          Meet the visionaries driving innovation in invoice financing
        </Typography>

        <Grid container spacing={4}>
          {leadership.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  border: '1px solid rgba(46,125,50,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(46,125,50,0.1)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box 
                    sx={{ 
                      width: 200,
                      height: 200,
                      mx: 'auto',
                      mb: 3,
                      position: 'relative'
                    }}
                  >
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid white',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: { xs: 'none', md: 'scale(1.05)' }
                        }
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#2E7D32',
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        textAlign: { xs: 'left', sm: 'center' }
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: '#0047AB',
                        fontWeight: 500,
                        mb: 2,
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        textAlign: { xs: 'left', sm: 'center' }
                      }}
                    >
                      {member.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#000000',
                        mb: 2,
                        lineHeight: 1.7,
                        fontSize: { xs: '0.85rem', sm: '0.9rem' },
                        textAlign: { xs: 'left', sm: 'center' }
                      }}
                    >
                      {member.description}
                    </Typography>

                    <Box 
                      sx={{ 
                        display: 'flex', 
                        gap: 1, 
                        justifyContent: { xs: 'flex-start', sm: 'center' },
                        mt: { xs: 1, sm: 2 }
                      }}
                    >
                      <IconButton
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#2E7D32',
                          '&:hover': {
                            bgcolor: 'rgba(46,125,50,0.1)',
                            transform: 'scale(1.1)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton
                        href={`mailto:${member.email}`}
                        sx={{
                          color: '#2E7D32',
                          '&:hover': {
                            bgcolor: 'rgba(46,125,50,0.1)',
                            transform: 'scale(1.1)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <EmailIcon />
                      </IconButton>
                    </Box>
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

export default About;
