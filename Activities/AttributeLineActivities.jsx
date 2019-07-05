import React from 'react';
import PropTypes from 'prop-types';


const getRightBorder = border => (border === 'right' ? null : 'border-right-0');

const AttributeLineActivities = ({ border, children }) => (
  <td className={`p-3 border-left-0 border-top-0 border-bottom-0 rounded-0 ${getRightBorder(border)}`}>
    {children}
  </td>
);

AttributeLineActivities.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  border: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default AttributeLineActivities;
