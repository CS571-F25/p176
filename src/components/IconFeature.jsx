import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motion'

/**
 * IconFeature - Feature display with icon and description
 * Design Decision: Icon provides visual anchor, consistent spacing
 * creates rhythm across feature grid
 */
function IconFeature({ icon, title, description }) {
  return (
    <motion.div 
      className="icon-feature"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3, margin: '-50px' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="icon-feature-icon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="icon-feature-title">{title}</h3>
      <p className="icon-feature-description">{description}</p>
    </motion.div>
  )
}

export default IconFeature

