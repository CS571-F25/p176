import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motion'

function FeatureCard({ title, subtitle, children }) {
  return (
    <motion.div
      className="featureCard"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3, margin: '-50px' }}
      variants={fadeInUp}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="featureCardInner">
        <h3 className="featureTitle">{title}</h3>
        {subtitle && <p className="featureSubtitle">{subtitle}</p>}
        <p>{children}</p>
      </div>
    </motion.div>
  )
}

export default FeatureCard





