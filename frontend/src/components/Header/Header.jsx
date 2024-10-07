import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <Navbar className='header' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <NavLink to='/' className='navbar-brand'>
            <img src={Logo} alt='ProShop' />
            ProShop
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={NavLink} to='/cart'>
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link as={NavLink} to='/login'>
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
