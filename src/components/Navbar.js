import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import SideMenu from "./Layout/SideMenu";
import { scrollToSection } from '../utils/scrollUtils';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About Us', link: '/about' },
    { text: 'Services', link: 'services' },
    { text: 'Trade Hub', link: 'marketplace' },
  ];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (link) => {
    handleClose();
    if (link === '/') {
      navigate('/');
    } else if (link === '/about') {
      navigate('/about');
    } else {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: link } });
      } else {
        scrollToSection(link);
      }
    }
  };

  const handleGetStarted = () => {
    handleClose();
    navigate('/get-started');
  };

  const handleSignIn = () => {
    handleClose();
    navigate('/sign-in');
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          maxWidth: '100%'
        }}
      >
        <Toolbar 
          disableGutters 
          sx={{ 
            justifyContent: 'space-between',
            ml: 0
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: "none",
              display: 'flex',
              marginRight: 'auto',
              marginLeft: 0,
              position: 'relative',
              left: 0,
              alignItems: 'center',
              '&:hover .flow': {
                color: '#1B5E20'
              },
              '&:hover .ware': {
                color: '#333333'
              }
            }}
          >
            <Typography
              variant="h6"
              className="ware"
              sx={{
                color: "#000000",
                fontWeight: 800,
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
                letterSpacing: '-0.5px',
                transition: 'color 0.3s ease'
              }}
            >
              Ware
            </Typography>
            <Typography
              variant="h6"
              className="flow"
              sx={{
                color: "#2E7D32",
                fontWeight: 800,
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
                letterSpacing: '-0.5px',
                transition: 'color 0.3s ease'
              }}
            >
              flow
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {menuItems.map((item) => (
                  <MenuItem 
                    key={item.text} 
                    onClick={() => handleClick(item.link)}
                    sx={{ 
                      color: '#000000'
                    }}
                  >
                    {item.text}
                  </MenuItem>
                ))}
                <MenuItem onClick={handleClose}>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    color="primary"
                    onClick={handleSignIn}
                  >
                    Sign In
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button 
                    fullWidth 
                    variant="outlined" 
                    color="primary"
                    onClick={() => navigate('/get-started')}
                  >
                    Get Started
                  </Button>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  onClick={() => handleClick(item.link)}
                  sx={{ 
                    color: '#000000',
                    fontWeight: 500,
                    '&:hover': {
                      color: '#2E7D32'
                    },
                    '&.active': {
                      color: '#2E7D32',
                      fontWeight: 600
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button 
                variant="outlined" 
                color="primary"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <Button 
                variant="contained" 
                color="primary"
                onClick={() => navigate('/get-started')}
              >
                Get Started
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
