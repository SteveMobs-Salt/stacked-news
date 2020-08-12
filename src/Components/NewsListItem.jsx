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
          <nav class="level is-mobile">
            <div class="level-left">
              <a href="http://" class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a href="http://" class="level-item" aria-label="retweet">
                <span class="icon is-small">
                  <i class="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a href="http://" class="level-item" aria-label="like">
                <span class="icon is-small">
                  <i class="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
};

export default NewsListItem;
