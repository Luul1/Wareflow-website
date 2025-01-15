import { Box, Container, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { useState } from 'react';

function BusinessRegistrationPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Business registration:', formData);
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        pt: { xs: 12, md: 15 },
        pb: { xs: 8, md: 12 },
        background: 'linear-gradient(45deg, rgba(46,125,50,0.05), rgba(0,71,171,0.05))'
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 6 },
            borderRadius: 4,
            boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            border: '1px solid rgba(46,125,50,0.1)'
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 1,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Business Registration
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, color: '#666' }}
          >
            Create your business account to start accessing invoice financing
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Contact Person"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    mt: 2
                  }}
                >
                  Register Business
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default BusinessRegistrationPage; 