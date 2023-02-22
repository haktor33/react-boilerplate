import React, { lazy } from 'react';
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import('pages/HomePage'));
const ContactPage = lazy(() => import('pages/ContactPage'));

export const MainRoutes = (
    <Routes>
        <Route key="homeroute" path='/' element={<HomePage />} />
        <Route key="contactroute" path='/Contact' element={<ContactPage />} />
    </Routes>
);

