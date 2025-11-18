import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { pageTransition, staggerContainer, fadeInUp } from '../utils/motion'

function Vision() {
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
            <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="visible">
              <motion.h1 variants={fadeInUp}>Vision</motion.h1>
              <motion.p className="lead" variants={fadeInUp}>
                AI that thinks with you, not for you. A partner that understands context, 
                reduces noise, and amplifies intent.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-5">
                <h3 className="section-title">The Future of Work</h3>
                <p className="section-text">
                  Imagine a world where every decision is informed by complete context. 
                  Where your AI assistant doesn't just answer questions—it anticipates needs, 
                  connects dots, and surfaces insights before you ask. That's brAIn.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-5">
                <h3 className="section-title">Invisible Intelligence</h3>
                <p className="section-text">
                  The best technology fades into the background. brAIn works silently, 
                  learning your patterns, understanding your goals, and organizing your 
                  information. You focus on what matters; brAIn handles the rest.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-5">
                <h3 className="section-title">Human-Centered Design</h3>
                <p className="section-text">
                  We believe AI should augment human intelligence, not replace it. brAIn 
                  amplifies your capabilities, respects your autonomy, and adapts to your 
                  workflow. <span className="text-accent">You remain in control.</span>
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-5">
                <div className="featureCard" style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.05), rgba(255,215,0,0.02))', borderColor: 'rgba(255, 215, 0, 0.2)' }}>
                  <h3 className="featureTitle">Join the Movement</h3>
                  <p className="section-text" style={{ marginBottom: 0 }}>
                    We're building the future of intelligent work. If you believe in calm, 
                    clear, contextual intelligence, we'd love to have you along for the journey.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.main>
  )
}

export default Vision





