import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Data from './Data';

const MapPage = ({users}) => {
  return (
    <div>
      <h2>Map</h2>
      <Data data={users} />
    </div>
  );
};

MapPage.propTypes = {
  users: PropTypes.object.isRequired
};

export default connect(
  state => ({
    users: state.users
  })
)(MapPage);
