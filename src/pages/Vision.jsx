import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { pageTransition, staggerContainer, fadeInUp } from '../utils/motion'
import Card from '../components/Card'
import Button from '../components/Button'
import IconFeature from '../components/IconFeature'
import WaitlistBanner from '../components/WaitlistBanner'

function Vision() {
  const navigate = useNavigate()
  
  return (
    <motion.main 
      className="page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      role="main"
      aria-label="Vision page"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="visible">
              <motion.header variants={fadeInUp}>
                <h1>Vision</h1>
                <p className="lead">
                  AI that thinks with you, not for you. A partner that understands context, 
                  reduces noise, and amplifies intent.
                </p>
              </motion.header>

              {/* Future of Work Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="future-heading">
                <h2 id="future-heading" className="section-title">The Future of Work</h2>
                <p className="section-text">
                  Imagine a world where every decision is informed by complete context. 
                  Where your AI assistant doesn't just answer questions—it anticipates needs, 
                  connects dots, and surfaces insights before you ask. That's brAIn.
                </p>
              </motion.section>

              {/* Invisible Intelligence Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="invisible-heading">
                <h2 id="invisible-heading" className="section-title">Invisible Intelligence</h2>
                <p className="section-text">
                  The best technology fades into the background. brAIn works silently, 
                  learning your patterns, understanding your goals, and organizing your 
                  information. You focus on what matters; brAIn handles the rest.
                </p>
              </motion.section>

              {/* Human-Centered Design Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="human-centered-heading">
                <h2 id="human-centered-heading" className="section-title">Human-Centered Design</h2>
                <p className="section-text">
                  We believe AI should augment human intelligence, not replace it. brAIn 
                  amplifies your capabilities, respects your autonomy, and adapts to your 
                  workflow. <span className="text-accent">You remain in control.</span>
                </p>
              </motion.section>

              {/* Principles Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="principles-heading">
                <h2 id="principles-heading" className="section-title">Our Guiding Principles</h2>
                <Row className="g-4 mt-3">
                  <Col md={4}>
                    <IconFeature 
                      icon="🎯"
                      title="Intentional"
                      description="Every feature serves a purpose. No bloat, no distractions."
                    />
                  </Col>
                  <Col md={4}>
                    <IconFeature 
                      icon="🌊"
                      title="Calm"
                      description="Reduces noise instead of adding to it. Signal over noise."
                    />
                  </Col>
                  <Col md={4}>
                    <IconFeature 
                      icon="🔮"
                      title="Contextual"
                      description="Understands the why behind your work, not just the what."
                    />
                  </Col>
                </Row>
              </motion.section>

              {/* Roadmap Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="roadmap-heading">
                <h2 id="roadmap-heading" className="section-title">What's Ahead</h2>
                <Row className="g-4 mt-3" style={{ display: 'flex', alignItems: 'stretch' }}>
                  <Col md={4} style={{ display: 'flex' }}>
                    <Card variant="subtle" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Card.Header>
                        <span className="text-accent" style={{ fontWeight: 600, fontSize: 'var(--font-sm)' }}>Q1 2025</span>
                      </Card.Header>
                      <Card.Body style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text)' }}>
                          Private Beta
                        </h3>
                        <p style={{ margin: 0, fontSize: 'var(--font-sm)' }}>
                          Core memory and reasoning features with select integrations.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} style={{ display: 'flex' }}>
                    <Card variant="subtle" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Card.Header>
                        <span className="text-accent" style={{ fontWeight: 600, fontSize: 'var(--font-sm)' }}>Q2 2025</span>
                      </Card.Header>
                      <Card.Body style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text)' }}>
                          Public Launch
                        </h3>
                        <p style={{ margin: 0, fontSize: 'var(--font-sm)' }}>
                          Full integration ecosystem and team collaboration features.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} style={{ display: 'flex' }}>
                    <Card variant="subtle" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Card.Header>
                        <span className="text-accent" style={{ fontWeight: 600, fontSize: 'var(--font-sm)' }}>Q4 2025</span>
                      </Card.Header>
                      <Card.Body style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text)' }}>
                          Enterprise
                        </h3>
                        <p style={{ margin: 0, fontSize: 'var(--font-sm)' }}>
                          Advanced security, compliance, and custom deployment options.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </motion.section>

              {/* Join CTA Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="join-heading">
                <Card variant="highlight" hoverable={false}>
                  <Card.Body className="cta-card-body">
                    <h2 id="join-heading" className="cta-title">
                      Join the Movement
                    </h2>
                    <p className="cta-description">
                      We're building the future of intelligent work. If you believe in calm, 
                      clear, contextual intelligence, we'd love to have you along for the journey.
                    </p>
                    <Button 
                      variant="primary" 
                      size="large"
                      onClick={() => navigate('/contact')}
                    >
                      Get in Touch
                    </Button>
                  </Card.Body>
                </Card>
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

export default Vision
