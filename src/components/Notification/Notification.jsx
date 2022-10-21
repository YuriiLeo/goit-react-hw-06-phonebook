import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({message}) {
  return (
      <div>{message}</div>
  )
}


Notification.protoType = {
    "message": PropTypes.string.isRequired,
};