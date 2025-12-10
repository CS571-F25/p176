import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motion'

/**
 * StatCard - Display statistics with visual emphasis
 * Design Decision: Large typography for numbers creates visual hierarchy,
 * gold accent draws attention to key metrics
 */
function StatCard({ value, label, description }) {
  return (
    <motion.div 
      className="stat-card"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3, margin: '-50px' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <span className="stat-value" aria-label={`${value} ${label}`}>
        {value}
      </span>
      <span className="stat-label">{label}</span>
      {description && (
        <p className="stat-description">{description}</p>
      )}
    </motion.div>
  )
}

export default StatCard

