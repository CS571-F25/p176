import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp } from '../utils/motion'
import Input from './Input'
import Button from './Button'

/**
 * WaitlistSignup - Prominent waitlist signup section
 * For use on the home page hero area
 */
function WaitlistSignup() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))
      console.log('Waitlist signup:', formData)
      setSubmitted(true)
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: undefined }))
    }
  }

  return (
    <section className="waitlist-section" aria-labelledby="waitlist-heading">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} xl={7}>
            <motion.div
              className="waitlist-card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3, margin: '-50px' }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="waitlist-success"
                  >
                    <div className="waitlist-success-icon" aria-hidden="true">🎉</div>
                    <h2 id="waitlist-heading" className="waitlist-success-title">You're on the list!</h2>
                    <p className="waitlist-success-text">
                      Thanks for joining, <strong>{formData.name}</strong>! We'll send the download link and early access details to <strong>{formData.email}</strong> when we launch.
                    </p>
                    <p className="waitlist-success-note">
                      Keep an eye on your inbox. Early supporters get exclusive perks.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="waitlist-header">
                      <span className="waitlist-badge">Coming Soon</span>
                      <h2 id="waitlist-heading" className="waitlist-title">
                        Join the Waitlist
                      </h2>
                      <p className="waitlist-description">
                        Be among the first to experience brAIn. Early supporters get priority access and exclusive features.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="waitlist-form" noValidate aria-label="Waitlist signup form">
                      <div className="waitlist-form-row">
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
                        <Input
                          id="email"
                          label="Email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          error={errors.email}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="large"
                        disabled={isSubmitting}
                        className="waitlist-submit"
                        ariaLabel="Join the waitlist"
                      >
                        {isSubmitting ? 'Joining...' : 'Get Early Access'}
                      </Button>
                      <p className="waitlist-privacy">
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WaitlistSignup

