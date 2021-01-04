import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts
      .reverse()
      .slice(2, 11)
      .map(post => {
        return (
          <Col md={6} lg={4} key={post.id}>
            <div className='blog-item'>
              <Card>
                <figure className='blog-thumb'>
                  <a href='http://localhost:3000'>
                    <img
                      src='https://via.placeholder.com/150x300'
                      alt={post.id}
                    />
                  </a>
                </figure>
                <Card.Body className='blog-content'>
                  <h2 className='h5'>
                    <a href='http://localhost:3000'>{post.title}</a>
                  </h2>
                  <p>{post.body}</p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        );
      });
  }

  render() {
    console.log(this.props.posts);
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
