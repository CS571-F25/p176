import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import { staggerContainer, fadeInUp } from '../utils/motion'

function Home() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
      }}
    >
      <HeroSection />
      <section className="featuresSection">
        <Container>
          <motion.div 
            variants={staggerContainer(0.15)} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-5">
              <h2 className="section-title">Core Capabilities</h2>
              <p className="section-text">Three pillars that make brAIn an invisible, intelligent partner.</p>
            </motion.div>
            <Row className="g-4">
              <Col md={4}>
                <motion.div variants={fadeInUp}>
                  <FeatureCard 
                    title="Memory" 
                    subtitle="Persistent, contextual understanding"
                  >
                    brAIn learns as you work, building durable memory that persists across sessions. Every interaction strengthens its understanding of your context.
                  </FeatureCard>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div variants={fadeInUp}>
                  <FeatureCard 
                    title="Reasoning" 
                    subtitle="Calm, intentional intelligence"
                  >
                    Signals over noise — thoughtful actions, not chatter. brAIn filters what matters and surfaces insights when they're needed.
                  </FeatureCard>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div variants={fadeInUp}>
                  <FeatureCard 
                    title="Integration" 
                    subtitle="Works across your tools"
                  >
                    Connects your docs, tickets, and conversations. A unified layer that understands relationships across your entire workflow.
                  </FeatureCard>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>
    </motion.main>
  )
}

export default Home





