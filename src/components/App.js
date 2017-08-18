import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import HeaderNav from './HeaderNav';

const App = ({children}) => (
  <div>
    <HeaderNav />
    <Grid>
      <Row>
        <Col xs={12}>{children}</Col>
      </Row>
    </Grid>
  </div>
);

App.propTypes = {
  children: PropTypes.element
};

export default App;
