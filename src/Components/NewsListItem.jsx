import React from 'react';

const NewsListItem = ({ title, subline, date, img, url }) => {

  return (
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src={img} alt={title} />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <a href={url}><strong>{title}</strong></a>
              <br />
              <small>{date}</small>
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
