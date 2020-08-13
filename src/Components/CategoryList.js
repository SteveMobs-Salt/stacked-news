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
          <p className="menu-label">Categories</p>
          <ul className="menu-list">
            {categories.map(category => <li><a onClick={ () => setCategory(category) }>{category[0].toUpperCase() + category.slice(1)}</a></li>)}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default CategoryList;
