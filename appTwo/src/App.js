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
          Hello, this is App Two being rendered from a different s3 bucket. Nice!
        </div>
      </div>
    )
  }
}

export default App;
