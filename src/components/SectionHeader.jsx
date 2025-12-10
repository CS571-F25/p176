import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motion'

/**
 * SectionHeader - Consistent section headings with proper hierarchy
 * Design Decision: Maintains visual hierarchy with h2 for sections, h3 for subsections
 */
function SectionHeader({ 
  title, 
  subtitle, 
  centered = false, 
  level = 2,
  className = '' 
}) {
  const HeadingTag = `h${level}`
  const headingClass = level === 2 ? 'section-title' : 'subsection-title'
  
  return (
    <motion.header 
      className={`section-header ${centered ? 'text-center' : ''} ${className}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5, margin: '-30px' }}
    >
      <HeadingTag className={headingClass}>{title}</HeadingTag>
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
    </motion.header>
  )
}

export default SectionHeader

