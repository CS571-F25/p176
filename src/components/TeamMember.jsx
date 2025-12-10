import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motion'

/**
 * TeamMember - Team member profile card
 * Accessibility: Proper alt text for images, semantic markup
 */
function TeamMember({ name, role, bio, imageUrl }) {
  return (
    <motion.article 
      className="team-member"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3, margin: '-50px' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="team-member-avatar">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Portrait of ${name}, ${role}`}
            className="team-member-image"
          />
        ) : (
          <div className="team-member-placeholder" aria-hidden="true">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <h3 className="team-member-name">{name}</h3>
      <p className="team-member-role">{role}</p>
      {bio && <p className="team-member-bio">{bio}</p>}
    </motion.article>
  )
}

export default TeamMember

