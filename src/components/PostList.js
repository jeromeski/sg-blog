import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <h1>PostList</h1>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostList);

// GENARAL DATA LOADING WITH REDUX
// Component gets rendered in the screen ex. PostList
// Define a ComponentDidMount
//  We call action creator from 'componentDidMount'
