import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        {/* Footer */}
        <div className="footer-section">
          <p className="footer-main">Preserving Ancient Wisdom for Future Generations</p>
          <p className="footer-copyright">© 2025 Ayurveda Digital Library. Built with Docusaurus.</p>
        </div>
    </footer>
  );
}
