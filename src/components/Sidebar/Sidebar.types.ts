export interface SidebarProps {
  window?: () => Window;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  drawerWidth: number;
  handleButtonClick?: () => void;
}
