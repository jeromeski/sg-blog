import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <Col md={6} lg={4} key={post.id}>
          <Card>
            <Card.Img
              variant='top'
              src={'https://via.placeholder.com/295x160'}
            />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <UserHeader userId={post.userId} />
            </Card.Footer>
          </Card>
        </Col>
      );
    });
  }

  render() {
    return <React.Fragment>{this.renderList()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);

// GENARAL DATA LOADING WITH REDUX
// Component gets rendered in the screen ex. PostList
// Define a ComponentDidMount
//  We call action creator from 'componentDidMount'
