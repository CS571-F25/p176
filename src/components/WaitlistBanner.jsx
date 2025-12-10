import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp } from '../utils/motion'
import Button from './Button'

/**
 * WaitlistBanner - Subtle waitlist signup banner
 * For use at the bottom of secondary pages
 */
function WaitlistBanner() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email')
      return
    }
    if (isExpanded && !name.trim()) {
      setError('Name is required')
      return
    }
    
    setIsSubmitting(true)
    setError('')
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 600))
    console.log('Waitlist banner signup:', { name, email })
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleEmailFocus = () => {
    if (!isExpanded) {
      setIsExpanded(true)
    }
  }

  return (
    <motion.section 
      className="waitlist-banner"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5, margin: '-30px' }}
      aria-labelledby="waitlist-banner-heading"
    >
      <Container>
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="waitlist-banner-success"
            >
              <span className="waitlist-banner-success-icon" aria-hidden="true">✓</span>
              <span>You're on the list! We'll be in touch soon.</span>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Row className="align-items-center justify-content-center g-3">
                <Col xs={12} md="auto">
                  <h2 id="waitlist-banner-heading" className="waitlist-banner-title">
                    <span className="waitlist-banner-badge" aria-hidden="true">✨</span>
                    Join the waitlist for early access
                  </h2>
                </Col>
                <Col xs={12} md="auto" className="flex-grow-1" style={{ maxWidth: '500px' }}>
                  <form onSubmit={handleSubmit} className="waitlist-banner-form" noValidate aria-label="Quick waitlist signup">
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: 'auto', opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <input
                            type="text"
                            className="waitlist-banner-input"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value); setError(''); }}
                            aria-label="Your name"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <input
                      type="email"
                      className="waitlist-banner-input"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(''); }}
                      onFocus={handleEmailFocus}
                      aria-label="Email address"
                      aria-describedby={error ? 'banner-error' : undefined}
                    />
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="small"
                      disabled={isSubmitting}
                      ariaLabel="Join waitlist"
                    >
                      {isSubmitting ? '...' : 'Join'}
                    </Button>
                  </form>
                  {error && (
                    <p id="banner-error" className="waitlist-banner-error" role="alert">
                      {error}
                    </p>
                  )}
                </Col>
              </Row>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.section>
  )
}

export default WaitlistBanner

