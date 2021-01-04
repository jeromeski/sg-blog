import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div>
        <h5>{user.name}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

export default connect(mapStateToProps)(UserHeader);

// ownProps -> reference to the props to be sent to the component
