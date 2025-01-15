import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  Paper
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import businessGrowth from '../assets/growth.jpg';
import security from '../assets/security.jpeg';
import innovation from '../assets/innovation.jpg';

function WhyUs() {
  const theme = useTheme();

  const challenges = [
    {
      title: "Cash Flow Gaps",
      description: "30-90 day payment terms creating working capital shortages",
      icon: <AccountBalanceIcon sx={{ fontSize: 40, color: '#2E7D32' }} />
    },
    {
      title: "Growth Limitations",
      description: "Unable to take on new opportunities due to capital constraints",
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#2E7D32' }} />
    },
    {
      title: "Traditional Financing Barriers",
      description: "Complex bank processes and collateral requirements",
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#2E7D32' }} />
    }
  ];

  const solutions = [
    {
      title: "Rigorous Due Diligence",
      description: "Our comprehensive verification process ensures the highest standards of business authenticity and creditworthiness",
      points: [
        "Comprehensive business verification",
        "Financial statement analysis",
        "Bank statement verification",
        "Trade reference checks"
      ],
      icon: <AssignmentTurnedInIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      image: businessGrowth
    },
    {
      title: "Advanced Security",
      description: "Bank-grade security protocols protect every transaction and piece of data on our platform",
      points: [
        "Multi-point authentication system",
        "Buyer confirmation protocol",
        "Delivery verification",
        "Document authenticity checks"
      ],
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      image: security
    },
    {
      title: "Smart Analytics",
      description: "Real-time monitoring and analytics to make informed decisions and manage risks effectively",
      points: [
        "Real-time monitoring systems",
        "Credit risk assessment",
        "Fraud prevention measures",
        "Performance tracking"
      ],
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      image: innovation
    }
  ];

  return (
    <Box 
      id="why-us"
      sx={{ 
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.default',
        position: 'relative'
      }}
    >
      <Container maxWidth="xl">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 800,
            background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 6
          }}
        >
          Why WareFlow? 
        </Typography>

        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(46,125,50,0.15)'
                  }
                }}
              >
                {/* Image Section */}
                <Box sx={{ position: 'relative', height: 240 }}>
                  <CardMedia
                    component="img"
                    image={solution.image}
                    alt={solution.title}
                    sx={{
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)'
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
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {solution.icon}
                  </Box>
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{
                      color: '#2E7D32',
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    {solution.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1"
                    sx={{
                      color: '#000000',
                      mb: 3
                    }}
                  >
                    {solution.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <List dense>
                    {solution.points.map((point, idx) => (
                      <ListItem 
                        key={idx}
                        sx={{
                          py: 1,
                          px: 0,
                          '&:hover': {
                            bgcolor: 'rgba(46,125,50,0.04)',
                            borderRadius: 1,
                            transform: 'translateX(8px)',
                            transition: 'all 0.3s ease'
                          }
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: '#2E7D32'
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText 
                          primary={point}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: '#000000',
                            sx: { fontWeight: 400 }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyUs;
