import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './Components/Navbar';
import CategoryList from './Components/CategoryList';
import NewsList from './Components/NewsList';
import newsResults from './mockDB/allFieldsResult';

function App() {
  const[news, setNews] = useState([]);
  useEffect(() => {
    setNews(newsResults[0].response.results);
  },[]);
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
