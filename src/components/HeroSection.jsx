import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { heroTitle, heroSubtitle, heroCTA } from '../utils/motion'

function HeroSection() {
  const navigate = useNavigate()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 50])
  const scale = useTransform(scrollY, [0, 500], [1, 0.97])
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3])

  return (
    <section className="heroSection">
      <motion.div 
        className="heroBg" 
        aria-hidden="true" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.8 }} 
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} 
      />
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={9} xl={8}>
            <motion.div 
              style={{ y, scale, opacity }}
              initial="hidden" 
              animate="visible"
            >
              <motion.h1 
                className="heroTitle"
                variants={heroTitle}
              >
                The invisible AI that thinks with you.
              </motion.h1>
              <motion.p 
                className="heroSub"
                variants={heroSubtitle}
              >
                Turn digital chaos into organized, actionable intelligence.
              </motion.p>
              <motion.div variants={heroCTA}>
                <Button 
                  className="ctaButton" 
                  onClick={() => navigate('/mission')}
                  size="lg"
                >
                  Explore brAIn
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="scrollCue" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Scroll
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection





