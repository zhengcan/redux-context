import React from 'react';
import ContentPanel from './ContentPanel';
import createPage from '../src/createPage';

class IndexPage extends React.Component {
  render() {
    return (
      <ContentPanel {...this.props} />
    );
  }
}

export default createPage(IndexPage);
