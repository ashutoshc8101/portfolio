import Link from 'next/link';

import { profile } from '../portfolio'

const styles = {
  navitem: {
    padding: '10px',
    margin: '20px',
    cursor: 'pointer',
    color: 'rgb(96, 96, 96)',
    textDecoration: 'none',
    display: 'flex'
  },
  navitemActive: {
    padding: '10px',
    margin: '20px',
    // fontWeight: '500',
    color: 'black',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'flex'
  }
};

function Navbar() {
  return <div className="navbar">
    <div className="brand">
      <Link href="/">{profile.name}</Link>
    </div>

    <div className="nav-links">
      <span className="nav-item">
        <Link href="/" style={styles.navitem}>Me</Link>
      </span>
      <span className="nav-item">
        <Link href="/#experience" style={styles.navitem}>Experience</Link>
      </span>
      <span className="nav-item">
        <Link href="/#projects" style={styles.navitem}>Projects</Link>
      </span>
      <span className="nav-item">
        <Link href="/resume" style={styles.navitem}>Resume</Link>
      </span>
    </div>
  </div>
}

export default Navbar;