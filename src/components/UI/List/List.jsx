import React from 'react'

function List({ list, selectLocation }) {
  return (
    <div className='list-conteiner'>
    {list.map((locate, id) => 
      <div 
        key={id}
        className='list-item'
        onClick={() => selectLocation(locate)}
      >
        {locate === String
            ? locate
            : locate.name
        }    
      </div>
    )}
  </div>
  )
}

export default List