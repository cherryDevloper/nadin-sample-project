import { ReactNode } from 'react';
export interface LayoutProps {
  children: ReactNode;
  toggleTheme?: () => void;
}
