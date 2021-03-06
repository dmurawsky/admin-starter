import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Data from './Data';

const EmployeesPage = ({users}) => {
  return (
    <div>
      <h2>Employees</h2>
      <Data data={users} />
    </div>
  );
};

EmployeesPage.propTypes = {
  users: PropTypes.object.isRequired
};

export default connect(
  state => ({
    users: state.users
  })
)(EmployeesPage);
