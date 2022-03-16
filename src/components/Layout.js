import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/login'}>Log in</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
      </header>
      <Outlet />
      <footer>
        <a href={'https://github.com/MrsMariya'}>MrsMariya</a>
        <h4>2022</h4>
      </footer>
    </>
  )
}
