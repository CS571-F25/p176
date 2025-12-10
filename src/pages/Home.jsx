import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import SectionHeader from '../components/SectionHeader'
import StatCard from '../components/StatCard'
import Timeline from '../components/Timeline'
import WaitlistSignup from '../components/WaitlistSignup'
import { staggerContainer, fadeInUp } from '../utils/motion'

const processSteps = [
  {
    title: 'Connect Your Tools',
    description: 'Integrate your existing workflow tools—documents, tickets, conversations—without disruption.'
  },
  {
    title: 'Build Context',
    description: 'brAIn learns your patterns and builds persistent memory across all your interactions.'
  },
  {
    title: 'Get Insights',
    description: 'Receive intelligent, contextual suggestions exactly when you need them.'
  },
  {
    title: 'Work Smarter',
    description: 'Focus on what matters while brAIn handles the cognitive overhead.'
  }
]

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
      role="main"
      aria-label="Home page"
    >
      <HeroSection />
      
      {/* Core Capabilities Section */}
      <section className="featuresSection" aria-labelledby="capabilities-heading">
        <Container>
          <motion.div 
            variants={staggerContainer(0.15)} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-100px' }}
          >
            <SectionHeader
              title="Core Capabilities"
              subtitle="Three pillars that make brAIn an invisible, intelligent partner."
              centered
              level={2}
            />
            <h2 id="capabilities-heading" className="sr-only">Core Capabilities</h2>
            
            <Row className="g-4">
              <Col md={4}>
                <motion.div variants={fadeInUp}>
                  <FeatureCard title="Memory">
                    brAIn learns as you work, building durable memory that persists across sessions and grows smarter over time.
                  </FeatureCard>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div variants={fadeInUp}>
                  <FeatureCard title="Reasoning">
                    Thoughtful actions, not chatter. brAIn filters what matters and surfaces insights when needed.
                  </FeatureCard>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div variants={fadeInUp}>
                  <FeatureCard title="Integration">
                    A layer that understands relationships across your entire workflow and all your conversations.
                  </FeatureCard>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="stats-section" aria-labelledby="stats-heading">
        <Container>
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <SectionHeader
              title="The brAIn Difference"
              subtitle="Real impact for real workflows."
              centered
              level={2}
            />
            <h2 id="stats-heading" className="sr-only">Impact Statistics</h2>
            
            <Row className="g-4 justify-content-center">
              <Col sm={6} lg={4}>
                <StatCard 
                  value="40%" 
                  label="Time Saved" 
                  description="Average reduction in context-switching overhead"
                />
              </Col>
              <Col sm={6} lg={4}>
                <StatCard 
                  value="10x" 
                  label="Faster Recall" 
                  description="Find relevant information instantly"
                />
              </Col>
              <Col sm={6} lg={4}>
                <StatCard 
                  value="100%" 
                  label="Private" 
                  description="Your data stays yours, always"
                />
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="page" style={{ paddingTop: '60px' }} aria-labelledby="process-heading">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <SectionHeader
                title="How brAIn Works"
                subtitle="A simple, powerful process that adapts to your workflow."
                centered
                level={2}
              />
              <h2 id="process-heading" className="sr-only">How brAIn Works</h2>
              
              <Timeline items={processSteps} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Waitlist Signup Section */}
      <WaitlistSignup />
    </motion.main>
  )
}

export default Home
