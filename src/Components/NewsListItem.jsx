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
              <br />
              <small className="my-6 py-6 has-text-weight-medium">
                {moment(date).format('dddd, MMMM Do YYYY')}
              </small>
              <br />
            </p>
            <p>{subline.replace(/<strong>|<br>|<\/strong>/g, '')}</p>
          </div>
          <nav className="level is-mobile">
            <div className="level-right has-text-right">
              <a href="# " className="level-item" aria-label="like" onClick={() => read(id)}>
                <span className="icon is-small">
                  <i className="fa fa-book fa-lg" aria-hidden="true"></i>
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
