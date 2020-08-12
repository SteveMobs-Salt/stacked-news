import React from 'react';

function CategoryList() {
  const categories = [
    'science',
    'business',
    'technology',
    'environment',
    'world'
  ];
  // world/coronavirus-outbreak

  return (
    <div className="column is-one-quarter">
      <div className="box">
        <aside className="menu">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            {categories.map(category => <li><a>{category[0].toUpperCase() + category.slice(1)}</a></li>)}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default CategoryList;
