import { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Navbar expand="lg" fixed="top" className={`siteNavbar ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">brAIn</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/mission" active={location.pathname === '/mission'}>Mission</Nav.Link>
            <Nav.Link as={Link} to="/technology" active={location.pathname === '/technology'}>Technology</Nav.Link>
            <Nav.Link as={Link} to="/vision" active={location.pathname === '/vision'}>Vision</Nav.Link>
            <Nav.Link as={Link} to="/contact" active={location.pathname === '/contact'}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar





