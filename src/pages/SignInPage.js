import { Box, Container, Typography, TextField, Button, Paper, Link } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in attempt with:', { email, password });
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        pt: { xs: 12, md: 15 },
        pb: { xs: 8, md: 12 },
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(45deg, rgba(46,125,50,0.05), rgba(0,71,171,0.05))'
      }}
    >
      <Container maxWidth="sm">
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
            Welcome Back
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, color: '#666' }}
          >
            Sign in to access your account
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 3 }}
              required
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 4 }}
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                mb: 3
              }}
            >
              Sign In
            </Button>

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Don't have an account?{' '}
                <Link
                  component={RouterLink}
                  to="/get-started"
                  sx={{
                    color: '#2E7D32',
                    textDecoration: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Get Started
                </Link>
              </Typography>

              <Link
                component={RouterLink}
                to="/forgot-password"
                sx={{
                  display: 'block',
                  mt: 2,
                  color: '#2E7D32',
                  textDecoration: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Forgot Password?
              </Link>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default SignInPage; 