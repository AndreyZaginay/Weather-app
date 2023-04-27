import React from 'react'
import { useNavigate } from 'react-router-dom';

function List({ list, route }) {
  const router = useNavigate();

  return (
    <div className='list'>
      {list.map((locate, id) => 
        <div 
          key={id}
          className='list-item'
          onClick={() => router(`${locate}${route}`)}
        >
          {locate}    
        </div>
      )}
    </div>
  )
}

export default List;