import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Footer />
      <Outlet />
    </>
  );
}

export default RootLayout