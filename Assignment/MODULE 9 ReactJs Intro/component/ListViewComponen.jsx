import React from 'react';
// import './ListViewComponent.css'; // Ensure this path is correct

const ListViewComponent = () => {
  const data = [
    { id: 1, key: 'Devin' },
    { id: 2, key: 'Dan' },
    { id: 3, key: 'Dominic' },
    { id: 4, key: 'Jackson' },
    { id: 5, key: 'James' },
    { id: 6, key: 'Joel' },
    { id: 7, key: 'John' },
    { id: 8, key: 'Jillian' },
    { id: 9, key: 'Jimmy' },  
    { id: 10, key: 'Julie' },
  ];
   
   
  return (
    <div className="container">
      <ul className="list">
        {data.map(item => (
          <li key={item.id} className="item">{item.key}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListViewComponent;


