import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PostList from './PostList';

const App = () => {
  return (
    <Container>
      <Row style={{ marginTop: '5rem' }}>
        <PostList />
      </Row>
    </Container>
  );
};

export default App;
