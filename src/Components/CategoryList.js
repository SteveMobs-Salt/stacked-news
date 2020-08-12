import React from 'react';

function CategoryList() {
  return (
    <div className="column is-one-quarter">
      <div className="box">
        <aside className="menu">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Customers</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default CategoryList;
