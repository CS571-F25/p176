import { motion } from 'framer-motion'

/**
 * Button - Accessible button with clear affordances
 * Design Decision: High-contrast gold on dark with visible focus states
 * Accessibility: Proper focus-visible outlines for keyboard navigation
 */
function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  type = 'button',
  onClick,
  disabled = false,
  ariaLabel,
  className = ''
}) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline'
  }
  
  const sizes = {
    small: 'btn-sm',
    medium: 'btn-md',
    large: 'btn-lg'
  }

  return (
    <motion.button
      type={type}
      className={`custom-btn ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={!disabled ? { scale: 1.02, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.button>
  )
}

export default Button

