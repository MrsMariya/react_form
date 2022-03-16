import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to={'/react_form'}>Home</NavLink>
        <NavLink to={'/react_form/login'}>Log in</NavLink>
        <NavLink to={'/react_form/register'}>Register</NavLink>
      </header>
      <Outlet />
      <footer>
        <a href={'https://github.com/MrsMariya'}>MrsMariya</a>
        <h4>2022</h4>
      </footer>
    </>
  )
}
