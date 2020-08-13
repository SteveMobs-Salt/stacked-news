import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './Components/Navbar';
import CategoryList from './Components/CategoryList';
import NewsList from './Components/NewsList';
import newsResults from './mockDB/allFieldsResult';
require('dotenv').config();

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState(null);
  const [newsListTitle, setNewsListTitle] = useState('Top News');
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(() => {
    setNews(newsResults[0].response.results);
  }, []);

  useEffect(() => {
    const fetchCategoryNews = () => {
      fetch(`/api/category?category=${category}`)
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(data => {
          console.log(data);
          setNews(data.response.results);
        })
        .catch(err => console.log('error from react= ', err));
    };
    if (category) {
      setNewsListTitle(`Category: ${category}`);
      fetchCategoryNews();
    }
  }, [category]);

  useEffect(() => {
    const fetchSearchNews = query => {
      fetch(`/api/search?query=${search}`)
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(data => {
          console.log(data);
          setNews(data.response.results);
        })
        .catch(err => console.log('error from react= ', err));
    };
    if (search) {
      setNewsListTitle(`Search: ${search}`);
      fetchSearchNews();
    }
  }, [search]);

  return (
    <div>
      <Navbar setSearch={setSearch} />
      <div className="columns is-centered mt-4">
        <div className="column is-four-fifths">
          <div className="container is-fluid">
            <div className="columns is-centered">
              <CategoryList setCategory={setCategory} />
              <div className="column is-half">
                <div className="box">
                  <h5 class="title is-5">{newsListTitle}</h5>
                  <NewsList newsListArray={news} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                </div>
              </div>
              <div className="column is-one-fifth">
                <div className="box">asdasdasdas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
