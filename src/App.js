import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './Components/Navbar';
import CategoryList from './Components/CategoryList';
import NewsListItem from './Components/NewsListItem';
import searchResult from './mockDB/searchResult';

function App() {
  return (
    <div>
      <Navbar />
      <div className="columns is-centered mt-4">
        <div className="column is-three-fifths">
          <div className="container is-fluid">
            <div className="columns is-centered">
              <CategoryList />
              <div className="column is-half">
              <div className="box">
                <NewsListItem />
                <NewsListItem />
                <NewsListItem />
                <NewsListItem />
                </div>
              </div>
              <div className="column is-one-quarter">
                <div className="box">
                  asdasdasdas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
