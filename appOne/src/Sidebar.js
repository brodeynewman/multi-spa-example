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
};

const Sidebar = () => (
  <div style={styles.nav}>
    <div style={styles.logo}>Platform</div>
    <a style={styles.link} href="/foo/bar">Go to app one</a>
    <a style={styles.inactiveLink} href="/foo/baz">Go to app two</a>
  </div>
);

export default Sidebar;
