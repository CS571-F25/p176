import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { pageTransition, staggerContainer, fadeInUp } from '../utils/motion'

function Mission() {
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
          <Col lg={10} xl={8}>
            <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
              <motion.h1 variants={fadeInUp}>Mission</motion.h1>
              <motion.p className="lead" variants={fadeInUp}>
                From cognitive overload to the contextual age. brAIn organizes your work into living memory, enabling calm, clear progress.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="mt-5">
                <h3 className="section-title">The Problem</h3>
                <p className="section-text">
                  Information sprawls across tools, conversations, and documents. Context gets lost. 
                  Decisions lack historical perspective. We're drowning in data but starving for insight.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-5">
                <h3 className="section-title">Our Approach</h3>
                <p className="section-text">
                  brAIn acts as an invisible layer that learns, remembers, and reasons alongside you. 
                  It doesn't replace your workflow—it amplifies it. By understanding context across 
                  time and tools, brAIn transforms chaos into organized intelligence.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-5">
                <h3 className="section-title">The Vision</h3>
                <p className="section-text">
                  A future where AI thinks with you, not for you. Where every piece of information 
                  is connected, every decision is informed, and every action is intentional. 
                  <span className="text-accent"> Calm. Clear. Intelligent.</span>
                </p>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.main>
  )
}

export default Mission





