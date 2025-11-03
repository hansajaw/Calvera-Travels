import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setMounted(true);
    
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 4
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div style={styles.container}>
      {/* Animated Background Gradient */}
      <div style={styles.bgGradient}></div>
      
      {/* Particles */}
      <div style={styles.particlesContainer}>
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              ...styles.particle,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div style={{
        ...styles.content,
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(30px)'
      }}>
        {/* Icon */}
        <div style={styles.iconContainer}>
          <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        </div>

        {/* Badge */}
        <div style={styles.badge}>
          <span style={styles.badgeDot}></span>
          Coming Soon
        </div>

        {/* Main Heading */}
        <h1 style={styles.heading}>
          <span style={styles.headingPrimary}>Launching</span>
          <span style={styles.headingSecondary}>Soon!</span>
        </h1>

        {/* Subtitle */}
        <p style={styles.subtitle}>
          We're crafting something extraordinary. Our blog is on its way with inspiring travel stories, 
          expert tips, and island adventures you won't want to miss.
        </p>

        {/* Email Notification Form */}
        <div style={styles.notifyForm}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            style={styles.input}
          />
          <button style={styles.button}>
            Notify Me
            <svg style={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Features */}
        <div style={styles.features}>
          <div style={styles.feature}>
            <svg style={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            <span>Travel Guides</span>
          </div>
          <div style={styles.feature}>
            <svg style={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>Destination Tips</span>
          </div>
          <div style={styles.feature}>
            <svg style={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>Insider Stories</span>
          </div>
        </div>

        {/* Social Links */}
        <div style={styles.social}>
          <a href="#" style={styles.socialLink}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={styles.socialIcon}>
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" style={styles.socialLink}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={styles.socialIcon}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" style={styles.socialLink}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={styles.socialIcon}>
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Corner Decoration */}
      <div style={styles.cornerDecor}></div>
      <div style={styles.cornerDecor2}></div>

      <style>
        {`
          @keyframes gradientShift {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-30px, 30px) scale(1.05); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          @keyframes particleRise {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }

          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    overflow: 'hidden',
    padding: '40px 20px'
  },
  bgGradient: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle at 30% 50%, rgba(255, 107, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255, 140, 0, 0.1) 0%, transparent 50%)',
    animation: 'gradientShift 15s ease-in-out infinite'
  },
  particlesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
  particle: {
    position: 'absolute',
    bottom: 0,
    background: 'linear-gradient(135deg, #ff6b00, #ff8c00)',
    borderRadius: '50%',
    animation: 'particleRise linear infinite',
    boxShadow: '0 0 10px rgba(255, 107, 0, 0.5)'
  },
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    maxWidth: '800px',
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'white'
  },
  iconContainer: {
    marginBottom: '30px',
    animation: 'float 3s ease-in-out infinite'
  },
  icon: {
    width: '80px',
    height: '80px',
    color: '#ff6b00',
    filter: 'drop-shadow(0 0 20px rgba(255, 107, 0, 0.5))'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 30px',
    background: 'rgba(255, 107, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 107, 0, 0.3)',
    borderRadius: '50px',
    fontSize: '0.95rem',
    fontWeight: '600',
    letterSpacing: '1px',
    marginBottom: '30px',
    textTransform: 'uppercase'
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    background: '#ff6b00',
    borderRadius: '50%',
    animation: 'pulse 2s ease-in-out infinite',
    boxShadow: '0 0 10px rgba(255, 107, 0, 0.8)'
  },
  heading: {
    fontSize: '5rem',
    fontWeight: '900',
    marginBottom: '25px',
    lineHeight: '1.1',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  headingPrimary: {
    background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 10px 40px rgba(255, 107, 0, 0.3)',
    filter: 'drop-shadow(0 5px 20px rgba(255, 107, 0, 0.3))'
  },
  headingSecondary: {
    background: 'linear-gradient(135deg, #ff6b00 0%, #ff8c00 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    position: 'relative',
    display: 'inline-block'
  },
  subtitle: {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '50px',
    maxWidth: '600px',
    margin: '0 auto 50px'
  },
  notifyForm: {
    display: 'flex',
    gap: '15px',
    maxWidth: '500px',
    margin: '0 auto 60px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  input: {
    flex: '1',
    minWidth: '250px',
    padding: '18px 25px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '18px 40px',
    background: 'linear-gradient(135deg, #ff6b00, #ff8c00)',
    border: 'none',
    borderRadius: '50px',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(255, 107, 0, 0.4)'
  },
  buttonIcon: {
    width: '20px',
    height: '20px',
    transition: 'transform 0.3s ease'
  },
  features: {
    display: 'flex',
    gap: '40px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '50px'
  },
  feature: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    minWidth: '140px'
  },
  featureIcon: {
    width: '32px',
    height: '32px',
    color: '#ff6b00'
  },
  social: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center'
  },
  socialLink: {
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    color: 'rgba(255, 255, 255, 0.7)',
    transition: 'all 0.3s ease',
    textDecoration: 'none'
  },
  socialIcon: {
    width: '20px',
    height: '20px'
  },
  cornerDecor: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(255, 107, 0, 0.1), transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    pointerEvents: 'none'
  },
  cornerDecor2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '350px',
    height: '350px',
    background: 'radial-gradient(circle, rgba(255, 140, 0, 0.08), transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    pointerEvents: 'none'
  }
};

export default Blog;