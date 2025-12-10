// Linear-style easing curves
const linearEase = [0.22, 1, 0.36, 1]
const smoothEase = [0.4, 0, 0.2, 1]

// Base animations - with exit transitions for scroll reversing
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 24,
    transition: { duration: 0.4, ease: smoothEase }
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: linearEase } 
  }
}

export const fadeIn = {
  hidden: { 
    opacity: 0,
    transition: { duration: 0.3, ease: smoothEase }
  },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5, ease: linearEase } 
  }
}

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.96,
    transition: { duration: 0.3, ease: smoothEase }
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: linearEase } 
  }
}

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 32,
    transition: { duration: 0.4, ease: smoothEase }
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: linearEase } 
  }
}

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -32,
    transition: { duration: 0.4, ease: smoothEase }
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: linearEase } 
  }
}

// Stagger containers
export const staggerContainer = (stagger = 0.1) => ({
  hidden: { 
    opacity: 0,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: stagger,
      delayChildren: 0.05
    } 
  }
})

export const staggerFast = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.06 } 
  }
}

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: linearEase }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3, ease: smoothEase }
  }
}

// Hero animations
export const heroTitle = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 1, ease: linearEase }
  }
}

export const heroSubtitle = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: linearEase, delay: 0.2 }
  }
}

export const heroCTA = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: linearEase, delay: 0.4 }
  }
}

// Hover animations
export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: { 
    y: -8, 
    scale: 1.02,
    transition: { duration: 0.3, ease: smoothEase }
  }
}

export const hoverGlow = {
  rest: { boxShadow: '0 0 0 rgba(255, 215, 0, 0)' },
  hover: { 
    boxShadow: '0 8px 32px rgba(255, 215, 0, 0.15)',
    transition: { duration: 0.3, ease: smoothEase }
  }
}

// Default viewport settings for scroll animations
export const scrollViewport = {
  once: false,
  amount: 0.3,
  margin: '-50px'
}
