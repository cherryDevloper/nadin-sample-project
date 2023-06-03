import React from 'react';
import { RouteObject } from 'react-router-dom';
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Profile = React.lazy(() => import('../pages/Profile'));
const Todos = React.lazy(() => import('../pages/Todos'));
const Weather = React.lazy(() => import('../pages/Weather'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/todos',
    element: <Todos />,
  },
  {
    path: '/weather',
    element: <Weather />,
  },
];
