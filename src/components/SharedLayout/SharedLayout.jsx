import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Header, Navigation, NavItem } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/movies">Movies</Link>
          </NavItem>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading page, please wait...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
