import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { pageTransition, staggerContainer, fadeInUp } from '../utils/motion'
import Card from '../components/Card'
import WaitlistBanner from '../components/WaitlistBanner'

function Mission() {
  return (
    <motion.main 
      className="page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      role="main"
      aria-label="Mission page"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
              <motion.header variants={fadeInUp}>
                <h1>Mission</h1>
                <p className="lead">
                  From cognitive overload to the contextual age. brAIn organizes your work into living memory, enabling calm, clear progress.
                </p>
              </motion.header>
              
              {/* The Problem Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="problem-heading">
                <h2 id="problem-heading" className="section-title">The Problem</h2>
                <p className="section-text">
                  Information sprawls across tools, conversations, and documents. Context gets lost. 
                  Decisions lack historical perspective. We're drowning in data but starving for insight.
                </p>
                <Card variant="subtle" hoverable={false}>
                  <Card.Body>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem', color: 'var(--muted)' }}>
                      <li style={{ marginBottom: 'var(--space-2)' }}>
                        Average knowledge worker uses <strong style={{ color: 'var(--text)' }}>9+ applications</strong> daily
                      </li>
                      <li style={{ marginBottom: 'var(--space-2)' }}>
                        <strong style={{ color: 'var(--text)' }}>23 minutes</strong> to refocus after an interruption
                      </li>
                      <li style={{ marginBottom: 0 }}>
                        <strong style={{ color: 'var(--text)' }}>60%</strong> of work time spent searching for information
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </motion.section>

              {/* Our Approach Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="approach-heading">
                <h2 id="approach-heading" className="section-title">Our Approach</h2>
                <p className="section-text">
                  brAIn acts as an invisible layer that learns, remembers, and reasons alongside you. 
                  It doesn't replace your workflow—it amplifies it. By understanding context across 
                  time and tools, brAIn transforms chaos into organized intelligence.
                </p>
              </motion.section>

              {/* The Vision Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="vision-heading">
                <h2 id="vision-heading" className="section-title">The Vision</h2>
                <p className="section-text">
                  A future where AI thinks with you, not for you. Where every piece of information 
                  is connected, every decision is informed, and every action is intentional. 
                  <span className="text-accent"> Calm. Clear. Intelligent.</span>
                </p>
              </motion.section>

              {/* Creator Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="creator-heading">
                <h2 id="creator-heading" className="section-title">Creator</h2>
                <Card variant="subtle" hoverable={false}>
                  <Card.Body style={{ textAlign: 'center', padding: 'var(--space-5)' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 var(--space-3)', color: 'var(--text)' }}>
                      Rahul Remany
                    </h3>
                    <a 
                      href="https://www.linkedin.com/in/rahul-remany-23930b20b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent"
                      style={{ textDecoration: 'none', fontWeight: 500 }}
                    >
                      LinkedIn →
                    </a>
                  </Card.Body>
                </Card>
              </motion.section>

              {/* Values Section */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="values-heading">
                <h2 id="values-heading" className="section-title">Our Values</h2>
                <Row className="g-4 mt-3" style={{ display: 'flex', alignItems: 'stretch' }}>
                  <Col md={4} style={{ display: 'flex' }}>
                    <Card variant="default" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Card.Header>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0, color: 'var(--text)' }}>
                          Privacy by Design
                        </h3>
                      </Card.Header>
                      <Card.Body style={{ flex: 1 }}>
                        Your data is yours. We build privacy into every layer of our architecture.
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} style={{ display: 'flex' }}>
                    <Card variant="default" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Card.Header>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0, color: 'var(--text)' }}>
                          Human-Centered
                        </h3>
                      </Card.Header>
                      <Card.Body style={{ flex: 1 }}>
                        AI should augment human intelligence, not replace it. You stay in control.
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} style={{ display: 'flex' }}>
                    <Card variant="default" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Card.Header>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0, color: 'var(--text)' }}>
                          Thoughtful Design
                        </h3>
                      </Card.Header>
                      <Card.Body style={{ flex: 1 }}>
                        Every interaction is intentional. We ship when it's ready, not when it's rushed.
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

export default Mission
