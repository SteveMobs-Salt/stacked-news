import React from 'react';
import NewsListItem from './NewsListItem';
// import allFieldsResult from '../mockDB/allFieldsResult';

const NewsList = ({ newsListArray, pageNumber, setPageNumber }) => {
  // const results = allFieldsResult[0].response.results;
  return (
    <div>
      {newsListArray.map(newsItem => (
        <NewsListItem
          title={newsItem.webTitle}
          subline={newsItem.fields.trailText}
          date={newsItem.webPublicationDate}
          img={newsItem.fields.thumbnail}
          url={newsItem.fields.shortUrl}
        />
      ))}

      <nav
        class="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        {pageNumber > 1 ? <button class="pagination-previous button" onClick={() => setPageNumber(pageNumber-1)}>Previous</button> : <span></span>}
        <button className="pagination-next button" onClick={() => setPageNumber(pageNumber+1)}>Next page</button>
      </nav>
    </div>
  );
};

export default NewsList;
