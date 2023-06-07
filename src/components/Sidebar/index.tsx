import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { SidebarProps } from './Sidebar.types';
import { Typography } from '@mui/material';

export default function Sidebar({
  window,
  handleDrawerToggle,
  mobileOpen,
  drawerWidth,
}: SidebarProps) {
  const drawer = (
    <div>
      <List>
        {['Dashboard', 'Profile', 'Weather', 'Todos'].map((text) => (
          <NavLink to={text.toLowerCase()} key={text}>
            <ListItem disablePadding>
              <ListItemButton>
                <Typography variant="h6" noWrap component="div">
                  <ListItemText primary={text} sx={{ color: 'primary.main' }} />
                </Typography>
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
