import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Collapse,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import CalculateIcon from '@mui/icons-material/Calculate';
import ArticleIcon from '@mui/icons-material/Article';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HandshakeIcon from '@mui/icons-material/Handshake';

function SideMenu() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState({
    financing: false,
    resources: false,
    support: false
  });

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMenuClick = (section) => {
    setMenuItems(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuSections = [
    {
      id: 'financing',
      title: 'Financing Solutions',
      icon: <BusinessCenterIcon />,
      subItems: [
        { title: 'Invoice Factoring', icon: <AccountBalanceIcon /> },
        { title: 'Supply Chain Finance', icon: <HandshakeIcon /> },
        { title: 'Trade Finance', icon: <BusinessCenterIcon /> }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: <SchoolIcon />,
      subItems: [
        { title: 'Knowledge Center', icon: <ArticleIcon /> },
        { title: 'ROI Calculator', icon: <CalculateIcon /> },
        { title: 'Case Studies', icon: <PeopleIcon /> }
      ]
    },
    {
      id: 'support',
      title: 'Support',
      icon: <ContactSupportIcon />,
      subItems: [
        { title: 'FAQ', icon: <ArticleIcon /> },
        { title: 'Contact Us', icon: <ContactSupportIcon /> }
      ]
    }
  ];

  return (
    <>
      <IconButton
        color="primary"
        aria-label="open menu"
        onClick={handleDrawerToggle}
        sx={{ 
          position: 'fixed', 
          left: 20, 
          top: 20, 
          zIndex: theme.zIndex.drawer + 1,
          bgcolor: 'background.paper',
          boxShadow: 2,
          '&:hover': { bgcolor: 'background.paper' }
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        variant="temporary"
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            mt: '64px', // Adjust based on your navbar height
            bgcolor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider'
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            Wareflow Solutions
          </Typography>
        </Box>

        <List>
          {menuSections.map((section) => (
            <Box key={section.id}>
              <ListItem 
                button 
                onClick={() => handleMenuClick(section.id)}
                sx={{
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
              >
                <ListItemIcon>{section.icon}</ListItemIcon>
                <ListItemText primary={section.title} />
                {menuItems[section.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              
              <Collapse in={menuItems[section.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {section.subItems.map((item, index) => (
                    <ListItem 
                      button 
                      key={index}
                      sx={{ 
                        pl: 4,
                        '&:hover': {
                          bgcolor: 'action.hover'
                        }
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default SideMenu; 