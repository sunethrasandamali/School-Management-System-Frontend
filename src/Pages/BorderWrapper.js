import React from 'react';
import PropTypes from 'prop-types';

const BorderWrapper = ({ label, children }) => {
  return (
    <div className="border-wrapper">
      <label className="border-label">{label}</label>
      {children}
    </div>
  );
};

BorderWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BorderWrapper;
