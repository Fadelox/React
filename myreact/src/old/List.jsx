import React from 'react'

function List(props) {

     const fruits=props.items;
     const cat=props.categorie;
    const obst=fruits.map(e=><li key={e.id}>{e.name} calorie :{e.cal}</li>)

  return (<>
  <h1 className='title'>{cat}</h1>
  <ol className='list'>{obst}</ol>
    </>
  )
}

export default List