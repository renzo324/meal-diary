import React from 'react';


const List = (props) => (

  <ul className="list-group container-fluid">
    {
      props.items.map( item => <li className="list-group-item"key={item.toString()}>{item}<button className="btn btn-info">PET!!</button></li>)
    }
  </ul>
);
export default List;