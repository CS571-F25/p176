import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { pageTransition, staggerContainer, fadeInUp } from '../utils/motion'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <motion.main 
      className="page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} xl={7}>
            <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
              <motion.h1 variants={fadeInUp} className="text-center mb-4">Contact</motion.h1>
              <motion.p className="lead text-center" variants={fadeInUp}>
                Have questions? Want to learn more? We'd love to hear from you.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <Form className="contactForm" onSubmit={handleSubmit}>
                  <Form.Group className="mb-4" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="you@company.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={6} 
                      placeholder="How can we help?" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="ctaButton" type="submit" size="lg">
                      Send Message
                    </Button>
                  </motion.div>
                </Form>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-5 text-center">
                <p className="muted">
                  Or reach us directly at{' '}
                  <a href="mailto:hello@brain.ai" className="text-accent" style={{ textDecoration: 'none' }}>
                    hello@brain.ai
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.main>
  )
}

export default Contact





