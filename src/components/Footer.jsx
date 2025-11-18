import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="siteFooter">
      <Container className="d-flex justify-content-between align-items-center">
        <span className="brand">brAIn</span>
        <span className="muted">© {new Date().getFullYear()} brAIn Labs</span>
      </Container>
    </footer>
  )
}

export default Footer





