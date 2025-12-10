import { motion } from 'framer-motion'
import { scaleIn } from '../utils/motion'

/**
 * TechNode - Technology architecture node display
 * Design Decision: Consistent card styling with hover feedback
 */
function TechNode({ label, description, delay = 0 }) {
  return (
    <motion.div 
      className="techNode"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3, margin: '-50px' }}
      variants={scaleIn}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
    >
      <span className="tech-node-label">{label}</span>
      {description && (
        <p className="tech-node-description">{description}</p>
      )}
    </motion.div>
  )
}

export default TechNode

