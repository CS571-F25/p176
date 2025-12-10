import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { pageTransition, staggerContainer, fadeInUp } from '../utils/motion'
import SectionHeader from '../components/SectionHeader'
import TechNode from '../components/TechNode'
import Card from '../components/Card'
import IconFeature from '../components/IconFeature'
import WaitlistBanner from '../components/WaitlistBanner'

function Technology() {
  return (
    <motion.main 
      className="page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      role="main"
      aria-label="Technology page"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={9}>
            <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
              <motion.header variants={fadeInUp}>
                <h1>Technology</h1>
                <p className="lead">
                  A layered architecture designed for context, memory, and intelligent reasoning.
                </p>
              </motion.header>
              
              {/* Architecture Diagram */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="architecture-heading">
                <h2 id="architecture-heading" className="section-title">Architecture Overview</h2>
                <div className="tech-flow">
                  <TechNode 
                    label="Input" 
                    description="Multi-source ingestion from docs, tickets, conversations"
                    delay={0.1}
                  />
                  <span className="tech-flow-arrow" aria-hidden="true">→</span>
                  <TechNode 
                    label="Memory" 
                    description="Persistent, contextual storage with temporal awareness"
                    delay={0.2}
                  />
                  <span className="tech-flow-arrow" aria-hidden="true">→</span>
                  <TechNode 
                    label="Reasoning" 
                    description="Pattern recognition and intelligent inference"
                    delay={0.3}
                  />
                  <span className="tech-flow-arrow" aria-hidden="true">→</span>
                  <TechNode 
                    label="Output" 
                    description="Actionable insights and contextual suggestions"
                    delay={0.4}
                  />
                </div>
              </motion.section>

              {/* Key Principles */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="principles-heading">
                <h2 id="principles-heading" className="section-title">Key Principles</h2>
                <Row className="g-4 mt-3">
                  <Col md={6}>
                    <Card variant="default">
                      <Card.Header>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0, color: 'var(--text)' }}>
                          Privacy First
                        </h3>
                      </Card.Header>
                      <Card.Body>
                        Your data stays yours. brAIn processes locally when possible, 
                        encrypts in transit, and never shares without explicit consent.
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card variant="default">
                      <Card.Header>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0, color: 'var(--text)' }}>
                          Incremental Learning
                        </h3>
                      </Card.Header>
                      <Card.Body>
                        Continuous improvement without disruption. brAIn adapts to your 
                        workflow, learning patterns and preferences over time.
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </motion.section>

              {/* Technical Features */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="features-heading">
                <h2 id="features-heading" className="section-title">Technical Features</h2>
                <Row className="g-4 mt-3">
                  <Col md={4}>
                    <IconFeature 
                      icon="🔒"
                      title="End-to-End Encryption"
                      description="All data encrypted at rest and in transit using AES-256"
                    />
                  </Col>
                  <Col md={4}>
                    <IconFeature 
                      icon="⚡"
                      title="Real-Time Processing"
                      description="Sub-100ms response times for contextual suggestions"
                    />
                  </Col>
                  <Col md={4}>
                    <IconFeature 
                      icon="🔄"
                      title="Seamless Sync"
                      description="Cross-device synchronization keeps your context everywhere"
                    />
                  </Col>
                </Row>
              </motion.section>

              {/* Integration Ecosystem */}
              <motion.section variants={fadeInUp} className="mt-6" aria-labelledby="integrations-heading">
                <h2 id="integrations-heading" className="section-title">Integration Ecosystem</h2>
                <Card variant="highlight" hoverable={false}>
                  <Card.Body>
                    <p style={{ margin: 0 }}>
                      brAIn connects with your existing tools: <strong>Slack</strong>, <strong>Notion</strong>, 
                      <strong> Google Workspace</strong>, <strong>Jira</strong>, <strong>GitHub</strong>, and more. 
                      Our open API allows custom integrations for enterprise workflows.
                    </p>
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

export default Technology
