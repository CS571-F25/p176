import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { pageTransition, staggerContainer, fadeInUp, scaleIn } from '../utils/motion'

function TechNode({ label, description, delay = 0 }) {
  return (
    <motion.div 
      className="techNode"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={scaleIn}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
    >
      <span>{label}</span>
      {description && <p className="mt-3 mb-0 muted" style={{ fontSize: '0.9rem' }}>{description}</p>}
    </motion.div>
  )
}

function Technology() {
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
          <Col lg={10} xl={9}>
            <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
              <motion.h1 variants={fadeInUp}>Technology</motion.h1>
              <motion.p className="lead" variants={fadeInUp}>
                A layered architecture designed for context, memory, and intelligent reasoning.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="mt-5">
                <p className="muted mb-4" style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                  Architecture: Input → Memory → Reasoning → Output
                </p>
                <Row className="techDiagram g-4 align-items-stretch">
                  <Col md={6} lg={3}>
                    <TechNode 
                      label="Input Layer" 
                      description="Multi-source ingestion from docs, tickets, conversations"
                      delay={0.1}
                    />
                  </Col>
                  <Col md="auto" className="techArrow d-none d-md-flex">→</Col>
                  <Col md={6} lg={3}>
                    <TechNode 
                      label="Memory" 
                      description="Persistent, contextual storage with temporal awareness"
                      delay={0.2}
                    />
                  </Col>
                  <Col md="auto" className="techArrow d-none d-md-flex">→</Col>
                  <Col md={6} lg={3}>
                    <TechNode 
                      label="Reasoning" 
                      description="Pattern recognition and intelligent inference"
                      delay={0.3}
                    />
                  </Col>
                  <Col md="auto" className="techArrow d-none d-md-flex">→</Col>
                  <Col md={6} lg={3}>
                    <TechNode 
                      label="Output" 
                      description="Actionable insights and contextual suggestions"
                      delay={0.4}
                    />
                  </Col>
                </Row>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-5">
                <h3 className="section-title">Key Principles</h3>
                <Row className="g-4 mt-3">
                  <Col md={6}>
                    <div className="featureCard" style={{ height: 'auto' }}>
                      <h4 className="featureTitle" style={{ fontSize: '1.25rem' }}>Privacy First</h4>
                      <p className="section-text" style={{ marginBottom: 0 }}>
                        Your data stays yours. brAIn processes locally when possible, 
                        encrypts in transit, and never shares without explicit consent.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="featureCard" style={{ height: 'auto' }}>
                      <h4 className="featureTitle" style={{ fontSize: '1.25rem' }}>Incremental Learning</h4>
                      <p className="section-text" style={{ marginBottom: 0 }}>
                        Continuous improvement without disruption. brAIn adapts to your 
                        workflow, learning patterns and preferences over time.
                      </p>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.main>
  )
}

export default Technology





