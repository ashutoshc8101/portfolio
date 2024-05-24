
const styles = {
  navitem: {
    padding: '10px',
    margin: '20px',
    cursor: 'pointer',
    color: 'rgb(96, 96, 96)'
  },
  navitemActive: {
    padding: '10px',
    margin: '20px',
    // fontWeight: '500',
    color: 'black',
    cursor: 'pointer'
  }
};

function Navbar() {
  return <div className="navbar">
    <div className="brand">
      Ashutosh Chauhan
    </div>

    <div className="nav-links">
      <span className="nav-item" style={styles.navitemActive}>Me</span>
      <span className="nav-item" style={styles.navitem}>Experience</span>
      <span className="nav-item" style={styles.navitem}>Projects</span>
      <span className="nav-item" style={styles.navitem}>Resume</span>
    </div>
  </div>
}

export default Navbar;