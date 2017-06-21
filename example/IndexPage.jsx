import React from 'react';
import ContentPanel from './ContentPanel';

class IndexPage extends React.Component {
  render() {
    return (
      <ContentPanel {...this.props} />
    );
  }
}

export default IndexPage;
