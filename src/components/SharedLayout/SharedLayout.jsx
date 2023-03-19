import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from './SharedLayout.module.css';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <header className={styled.header}>
        <nav className={styled.nav}>
          <Link to="/" className={styled.link}>
            Home
          </Link>
          <Link to="/movie" className={styled.link}>
            Movie
          </Link>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
