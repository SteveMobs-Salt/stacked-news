import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './Components/Navbar';
import CategoryList from './Components/CategoryList';
import NewsList from './Components/NewsList';
import NewsItemModal from './Components/NewsItemModal';
import newsResults from './mockDB/allFieldsResult';
import moment from 'moment'

require('dotenv').config();

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState(null);
  const [newsListTitle, setNewsListTitle] = useState('Top News');
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState(null);
  const [article, setArticle] = useState(null);
  const [articleId, setArticleId] = useState(null);

  useEffect(() => {
    setNews(newsResults[0].response.results);
  }, []);

  useEffect(() => {
    const fetchQuery = () => {
      fetch(`${query}&page=${pageNumber}`)
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
    if (pageNumber !== 1) {
      fetchQuery();
    }
  }, [pageNumber]);

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
      setQuery(`/api/category?category=${category}`);
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
      setQuery(`/api/search?query=${search}`);
      fetchSearchNews();
    }
  }, [search]);

  useEffect(() => {
    const artlc = news.filter(a => a.id === articleId)[0];
    setArticle(artlc);
  }, [articleId]);

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
                  <h5 class="title is-5 has-text-left">{newsListTitle}</h5>
                  <NewsList
                    newsListArray={news}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    setArticleId={setArticleId}
                  />
                </div>
              </div>
              <div className="column is-one-fifth">
                <div className="box">
                <h5 class="title is-5  has-text-right">{moment().format('dddd, DD MMMM')}</h5>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {article ? (
        <NewsItemModal
          close={setArticle}
          removeId={setArticleId}
          title={article.webTitle}
          body={article.fields.body}
          date={article.webPublicationDate}
          url={article.webUrl}
        />
      ) : null}
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by{' '}
            <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed{' '}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
