import React from 'react';
import moment from 'moment';

const NewsListItem = ({ title, subline, date, img, url }) => {

  return (
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128 is-5by4">
            <img src={img} alt={title} />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
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
