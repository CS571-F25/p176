import { useEffect, useState, useCallback } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()
  const isHomepage = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setExpanded(false)
  }, [location.pathname])

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [expanded])

  const handleToggle = useCallback(() => {
    setExpanded(prev => !prev)
  }, [])

  const handleNavClick = useCallback(() => {
    setExpanded(false)
  }, [])

  const navbarClasses = [
    'siteNavbar',
    scrolled ? 'scrolled' : '',
    expanded ? 'menu-open' : '',
    isHomepage ? 'homepage' : ''
  ].filter(Boolean).join(' ')

  return (
    <>
      {/* Blur overlay when menu is open */}
      <div 
        className={`navbar-overlay ${expanded ? 'active' : ''}`}
        onClick={handleNavClick}
        aria-hidden="true"
      />
      
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={navbarClasses}
        expanded={expanded}
        onToggle={handleToggle}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand" onClick={handleNavClick}>
            brAIn
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" aria-label="Toggle navigation menu" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                as={Link} 
                to="/mission" 
                active={location.pathname === '/mission'}
                onClick={handleNavClick}
              >
                Mission
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/technology" 
                active={location.pathname === '/technology'}
                onClick={handleNavClick}
              >
                Technology
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/vision" 
                active={location.pathname === '/vision'}
                onClick={handleNavClick}
              >
                Vision
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/contact" 
                active={location.pathname === '/contact'}
                onClick={handleNavClick}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default SiteNavbar
