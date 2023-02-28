import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../../WebUI/Pages/HomePage';
import { LoginPage } from '../../WebUI/Pages/LoginPage';
import { SignupPage } from '../../WebUI/Pages/SignupPage';
import { WatchPage } from '../../WebUI/Pages/WatchPage';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/watch",
      element: <WatchPage />,
    },
]);