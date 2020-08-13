import React from 'react';
import moment from 'moment';

const NewsListItem = ({ title, subline, date, img, url }) => {

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="newsImage">
            <img src={img} alt={title} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <a href={url}><strong>{title}</strong></a>
              <br />
              <small className="mb-3 is-italic">{moment(date).format('dddd, MMMM Do YYYY')}</small>
              <br />
              {subline}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsListItem;
