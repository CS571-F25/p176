import { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { pageTransition, staggerContainer, fadeInUp } from '../utils/motion'
import Input from '../components/Input'
import Button from '../components/Button'
import Card from '../components/Card'
import WaitlistBanner from '../components/WaitlistBanner'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: undefined }))
    }
  }

  const handleKeyDown = (e) => {
    // Allow form submission with Ctrl/Cmd + Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <motion.main 
      className="page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      role="main"
      aria-label="Contact page"
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} xl={7}>
            <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
              <motion.header variants={fadeInUp} className="text-center">
                <h1>Contact Us</h1>
                <p className="lead">
                  Have questions? Want to learn more? We'd love to hear from you.
                </p>
              </motion.header>
              
              {submitted ? (
                <motion.div variants={fadeInUp} className="mt-5">
                  <Card variant="highlight" hoverable={false}>
                    <Card.Body className="text-center" style={{ padding: 'var(--space-6)' }}>
                      <div style={{ fontSize: '3rem', marginBottom: 'var(--space-3)' }} aria-hidden="true">✓</div>
                      <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>Message Sent!</h2>
                      <p style={{ margin: 0, color: 'var(--muted)' }}>
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              ) : (
                <motion.div variants={fadeInUp}>
                  <form 
                    ref={formRef}
                    onSubmit={handleSubmit} 
                    onKeyDown={handleKeyDown}
                    className="mt-5"
                    noValidate
                    aria-label="Contact form"
                  >
                    <Row className="g-4">
                      <Col md={6}>
                        <Input
                          id="name"
                          label="Name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          error={errors.name}
                        />
                      </Col>
                      <Col md={6}>
                        <Input
                          id="email"
                          label="Email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          error={errors.email}
                          helpText="We'll never share your email"
                        />
                      </Col>
                    </Row>
                    
                    <Input
                      id="subject"
                      label="Subject"
                      type="text"
                      placeholder="What's this about? (optional)"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    
                    <Input
                      id="message"
                      label="Message"
                      as="textarea"
                      rows={6}
                      placeholder="How can we help?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      error={errors.message}
                    />
                    
                    <div className="mt-4">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="large"
                        ariaLabel="Send message"
                      >
                        Send Message
                      </Button>
                      <p className="text-muted mt-3" style={{ fontSize: 'var(--font-sm)' }}>
                        Press <kbd style={{ 
                          background: 'var(--panel-2)', 
                          padding: '2px 6px', 
                          borderRadius: '4px',
                          border: '1px solid var(--border)'
                        }}>Ctrl</kbd> + <kbd style={{ 
                          background: 'var(--panel-2)', 
                          padding: '2px 6px', 
                          borderRadius: '4px',
                          border: '1px solid var(--border)'
                        }}>Enter</kbd> to submit
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Contact Info Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="contact-info-heading">
                <h2 id="contact-info-heading" className="sr-only">Other ways to contact us</h2>
                <Row className="g-4">
                  <Col md={6}>
                    <Card variant="subtle" hoverable={false}>
                      <Card.Body className="text-center">
                        <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }} aria-hidden="true">📧</div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-1)' }}>Email</h3>
                        <a 
                          href="mailto:hello@brain.ai" 
                          className="text-accent" 
                          style={{ textDecoration: 'none' }}
                        >
                          hello@brain.ai
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card variant="subtle" hoverable={false}>
                      <Card.Body className="text-center">
                        <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }} aria-hidden="true">💬</div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-1)' }}>Live Chat</h3>
                        <span style={{ color: 'var(--text)', opacity: 0.7 }}>Available 9am-6pm EST</span>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </motion.section>
            </motion.div>
          </Col>
        </Row>
      </Container>
      
      {/* Waitlist Banner */}
      <WaitlistBanner />
    </motion.main>
  )
}

export default Contact
