const styles = {
  navbar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end'
  },
  navitem: {
    margin: '30px',
    cursor: 'pointer'
  },
  navitemActive: {
    margin: '30px',
    fontWeight: '500',
    cursor: 'pointer'
  }
};

function Navbar() {
  return <div className="navbar" style={styles.navbar}>
    <span className="nav-item" style={styles.navitemActive}>Me</span>
    <span className="nav-item" style={styles.navitem}>Experience</span>
    <span className="nav-item" style={styles.navitem}>Projects</span>
  </div>
}

export default Navbar;