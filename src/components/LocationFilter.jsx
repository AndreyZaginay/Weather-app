import React from 'react';

import MyInput from './UI/Input/MyInput';

const LocationFilter =({filter, setFilter, msg}) => {
  return (
    <div className='filter'>
        <span>
            {msg}
        </span>
        <MyInput
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder="Search..."
        />
    </div>
  )
}

export default LocationFilter;