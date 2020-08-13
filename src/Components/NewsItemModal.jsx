import React from 'react';
import parse from 'html-react-parser';

const NewsItemModal = ({ title, body, date, url, close, removeId }) => {

  const cleanUp = () => {
    close(null);
    removeId(null);
  }

  return (
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Preview</p>
          <button
            class="delete"
            aria-label="close"
            onClick={() => cleanUp(null)}
          ></button>
        </header>
        <section class="modal-card-body">
  <h4 class="title is-4">{title}</h4>
          {parse(body.replace(/\/p>\s*<p/g, '/p><br><p'))}
          {/* {body.replace('/p> <p', '/p><br><p')} */}
          </section>
        <footer class="modal-card-foot">
          <a href={url} target="_blank" rel="noopener noreferrer" class="button is-success">View Article</a>
          <button class="button" onClick={() => cleanUp(null)}>Back</button>
        </footer>
      </div>
    </div>
  );
};

export default NewsItemModal;
