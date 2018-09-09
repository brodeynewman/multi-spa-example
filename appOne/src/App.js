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
          Hello, this is App One being rendered from a different s3 bucket.
        </div>
      </div>
    )
  }
}

export default App;
