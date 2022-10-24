import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { useSelector } from "react-redux";

export default function Filter({onChange}) {
  const filter = useSelector(getFilter);
  const filterId = nanoid();
  return (
      <div>
          <label htmlFor={filterId}>Find contacts by name</label>
            <Input
                id={filterId}
                type="text"
                name="filter"
                onChange={onChange}
                value={filter} />
     </div>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func,
}