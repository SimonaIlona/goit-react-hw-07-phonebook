import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
