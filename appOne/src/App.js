import React from 'react';
import Sidebar from './Sidebar';

const styles = {
  container: {
    display: 'flex',
  },
  content: {
    padding: 25,
  },
};

class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Sidebar />
        <div style={styles.content}>
          <h2>App One</h2>
          <p>
            This application is being served through s3 via an nginx reverse-proxy. This app lives in a subdirectory inside of s3.
          </p>
        </div>
      </div>
    )
  }
}

export default App;
