import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Data from './Data';

const HomePage = ({users}) => {
  return (
    <div>
      <h2>Home</h2>
      <Data data={users} />
    </div>
  );
};

HomePage.propTypes = {
  users: PropTypes.object.isRequired
};

export default connect(
  state => ({
    users: state.users
  })
)(HomePage);
