import React from 'react';
import NewsListItem from './NewsListItem';
// import allFieldsResult from '../mockDB/allFieldsResult';

const NewsList = ({ newsListArray, pageNumber, setPageNumber, setArticleId }) => {
  // const results = allFieldsResult[0].response.results;
  return (
    <div>
      {newsListArray.map(newsItem => (
        <NewsListItem
        key={newsItem.id}  
        title={newsItem.webTitle}
          subline={newsItem.fields.trailText}
          date={newsItem.webPublicationDate}
          img={newsItem.fields.thumbnail}
          url={newsItem.fields.shortUrl}
          id={newsItem.id}
          read={setArticleId}
        />
      ))}

      <nav
        className="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        {pageNumber > 1 ? <button className="pagination-previous button" onClick={() => setPageNumber(pageNumber-1)}>Previous</button> : <span></span>}
        <button className="pagination-next button" onClick={() => setPageNumber(pageNumber+1)}>Next page</button>
      </nav>
    </div>
  );
};

export default NewsList;
