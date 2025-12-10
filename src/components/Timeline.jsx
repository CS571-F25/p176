import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/motion'

/**
 * Timeline - Visual process/timeline representation
 * Design Decision: Vertical line with accent color creates visual flow,
 * staggered animation guides user attention through steps
 */
function Timeline({ items }) {
  return (
    <motion.ol 
      className="timeline"
      role="list"
      aria-label="Process timeline"
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2, margin: '-50px' }}
    >
      {items.map((item, index) => (
        <motion.li 
          key={index} 
          className="timeline-item"
          variants={fadeInUp}
        >
          <div className="timeline-marker" aria-hidden="true">
            <span className="timeline-number">{index + 1}</span>
          </div>
          <div className="timeline-content">
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  )
}

export default Timeline

