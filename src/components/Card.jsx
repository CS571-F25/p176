import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motion'

/**
 * Card - Reusable card component with hover feedback
 * Design Decision: Clear visual affordances with hover lift effect
 * and accent color border animation
 */
function Card({ 
  children, 
  variant = 'default',
  hoverable = true,
  className = '',
  as = 'article',
  style = {}
}) {
  const Component = motion[as] || motion.article
  
  const variants = {
    default: 'card-default',
    highlight: 'card-highlight',
    subtle: 'card-subtle'
  }

  return (
    <Component
      className={`custom-card ${variants[variant]} ${className}`}
      style={style}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3, margin: '-50px' }}
      whileHover={hoverable ? { 
        y: -8, 
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      } : {}}
    >
      {children}
    </Component>
  )
}

function CardHeader({ children, className = '' }) {
  return <header className={`card-header ${className}`}>{children}</header>
}

function CardBody({ children, className = '' }) {
  return <div className={`card-body ${className}`}>{children}</div>
}

function CardFooter({ children, className = '' }) {
  return <footer className={`card-footer ${className}`}>{children}</footer>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card

