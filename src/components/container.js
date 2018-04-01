import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    zetfrqjzegfwhxfkjwshfgkjsdhfgqk jsdhfg qsjkdfhg q
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
