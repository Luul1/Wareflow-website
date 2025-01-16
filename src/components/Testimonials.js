import { Box, Container, Typography, Paper, Avatar, Grid } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Testimonials() {
  const testimonials = [
    {
      quote: "WareFlow has transformed how we manage our cash flow. The quick financing has helped us take on bigger projects with confidence.",
      author: "Sarah Johnson",
      position: "CEO, Pearls Logistics Ltd",
      image: "https://example.com/avatar1.jpg"
    },
    {
      quote: "The platform is incredibly user-friendly and the team is always responsive. Best invoice financing service we've used.",
      author: "Charles Keter",
      position: "CFO, Brighter Limited",
      image: "https://example.com/avatar2.jpg"
    },
    {
      quote: "Fast, efficient, and reliable. WareFlow has been crucial in helping us scale our operations across Kenya.",
      author: "Alfred Nganga ",
      position: "Director, Farmers Fresh Ltd ",
      image: "https://example.com/avatar3.jpg"
    }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '2.5rem' },
            background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          What Our Clients Say
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  border: '1px solid rgba(46,125,50,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(46,125,50,0.1)'
                  }
                }}
              >
                <FormatQuoteIcon 
                  sx={{ 
                    fontSize: 40, 
                    color: '#2E7D32',
                    opacity: 0.2,
                    mb: 2
                  }} 
                />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3,
                    fontStyle: 'italic',
                    color: '#666'
                  }}
                >
                  "{testimonial.quote}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    src={testimonial.image}
                    sx={{ width: 48, height: 48, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.position}
                    </Typography>
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

export default Testimonials; 