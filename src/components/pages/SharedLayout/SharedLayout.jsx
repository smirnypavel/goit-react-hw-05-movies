import { Link, Outlet } from 'react-router-dom';
import styled from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <header className={styled.header}>
        <nav className={styled.nav}>
          <Link to="/" className={styled.link}>
            Home
          </Link>
          <Link to="/searchMovie" className={styled.link}>
            SearchMovie
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
