import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <header className={styled.header}>
        <nav className={styled.nav}>
          <Link to="/" className={styled.link}>
            Home
          </Link>
          <Link to="/Movie" className={styled.link}>
            Movie
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
