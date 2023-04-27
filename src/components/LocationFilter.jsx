import React from 'react';

import MyInput from './UI/input/MyInput';

function LocationFilter({filter, setFilter, msg}) {
  return (
    <div>
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