import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Box } from '@mui/material';
import { LayoutProps } from './Layout.types';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;
const Layout: React.FC<LayoutProps> = ({
  children,
  toggleTheme,
  handleButtonClick,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Box sx={{ display: 'flex' }} color={'primary'}>
        {document.documentElement.dir === 'rtl' ? (
          <>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: '5rem 1rem',
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                height: '80vh',
              }}
            >
              {children}
            </Box>
            <Sidebar
              handleDrawerToggle={handleDrawerToggle}
              mobileOpen={mobileOpen}
              drawerWidth={drawerWidth}
              handleButtonClick={handleButtonClick}
            />
            <Header
              toggleTheme={toggleTheme}
              handleDrawerToggle={handleDrawerToggle}
              drawerWidth={drawerWidth}
            />
          </>
        ) : (
          <>
            <Header
              toggleTheme={toggleTheme}
              handleDrawerToggle={handleDrawerToggle}
              drawerWidth={drawerWidth}
            />
            <Sidebar
              handleDrawerToggle={handleDrawerToggle}
              mobileOpen={mobileOpen}
              drawerWidth={drawerWidth}
              handleButtonClick={handleButtonClick}
            />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: '5rem 1rem',
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                height: '80vh',
              }}
            >
              {children}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Layout;
