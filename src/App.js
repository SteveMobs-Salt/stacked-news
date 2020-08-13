import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './Components/Navbar';
import CategoryList from './Components/CategoryList';
import NewsList from './Components/NewsList';
import newsResults from './mockDB/allFieldsResult';
require('dotenv').config();

function App() {
  const[news, setNews] = useState([]);
  const [category, setCategory] = useState('international');
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    setNews(newsResults[0].response.results);
  },[]);

  useEffect(() => {
    if (category !== 'international') {
      fetchCategoryNews();
    }
  }, [category])
  
  const fetchCategoryNews = () => {
    fetch(`/api/category?category=${category}`)
      .then(res => res.json())
      .then(data => setNews(data.response.results))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Navbar setSearch={setSearch}/>
      <div className="columns is-centered mt-4">
        <div className="column is-three-fifths">
          <div className="container is-fluid">
            <div className="columns is-centered">
              <CategoryList setCategory={setCategory}/>
              <div className="column is-half">
              <div className="box">
                <NewsList newsListArray={news}/>
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
