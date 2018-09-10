import React from 'react';

const linkStyles = {
  color: '#ddd',
  padding: '25px 15px 25px 25px',
  display: 'block',
  textDecoration: 'none',
};

const styles = {
  nav: {
    width: 225,
    height: '100vh',
    backgroundColor: '#1F2141',
  },
  link: {
    ...linkStyles,
    backgroundColor: 'rgba(255, 255, 255, .1)',
  },
  inactiveLink: {
    ...linkStyles,
  },
  logo: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 25,
  },
  logoLink: {
    textDecoration: 'none',
    color: '#fff',
  },
};

const Sidebar = () => (
  <div style={styles.nav}>
    <div style={styles.logo}><a style={styles.logoLink} href="/appOne">Platform</a></div>
    <a style={styles.inactiveLink} href="/appOne">Go to app one</a>
    <a style={styles.link} href="/appTwo">Go to app two</a>
  </div>
);

export default Sidebar;
