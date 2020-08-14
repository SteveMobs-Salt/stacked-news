import React from 'react';
import moment from 'moment';

const NewsListItem = ({ title, subline, date, img, url, id, read }) => {
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
              <a href={url}>
                <strong>{title}</strong>
              </a>
              {/* <nav class="level is-mobile">
            <div class="level-left"> */}
              <a class="book-icon ml-3" aria-label="like" onClick={() => read(id)}>
                <span class="icon is-small is-size-6">
                  <i class="fa fa-book fa-lg" aria-hidden="true"></i>
                </span>
              </a>
            {/* </div>
          </nav> */}
              <br />
              <small className="my-6 py-6 has-text-weight-medium">
                {moment(date).format('dddd, MMMM Do YYYY')}
              </small>
              <br />
            </p>
            <p>{subline.replace(/<strong>|<br>|<\/strong>/g, '')}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsListItem;
