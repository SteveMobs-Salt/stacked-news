import React from 'react';

function CategoryList({setCategory}) {
  const categories = [
    'science',
    'business',
    'technology',
    'environment',
    'world'
  ];
  // world/coronavirus-outbreak

  return (
    <div className="column is-one-fifth">
      <div className="box">
        <aside className="menu">
          <h5 className="title is-5 ">Categories</h5>
          <ul className="menu-list">
            {categories.map(category => <li key={category}><a href="# " onClick={ () => setCategory(category) }>{category[0].toUpperCase() + category.slice(1)}</a></li>)}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default CategoryList;
