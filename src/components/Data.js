import React from 'react';
import PropTypes from 'prop-types';

const Data = ({data}) => {
  return (
    <pre>
      <code>
        {JSON.stringify(data, null, 2)}
      </code>
    </pre>
  );
};

Data.propTypes = {
  data: PropTypes.object
}

export default Data;
