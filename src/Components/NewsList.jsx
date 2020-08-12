import React from 'react';
import NewsListItem from './NewsListItem';
import allFieldsResult from '../mockDB/allFieldsResult';

const NewsList = () => {
    const results = allFieldsResult[0].response.results;
    return (
        <div>
            {results.map(newsItem =>
                <NewsListItem title={newsItem.webTitle}
                    subline={newsItem.fields.trailText}
                    date={newsItem.webPublicationDate}
                    img={newsItem.fields.thumbnail}
                    url={newsItem.fields.shortUrl}
                />)}
        </div>
    )
}


export default NewsList;