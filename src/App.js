import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './Components/Navbar';
import CategoryList from './Components/CategoryList';
import NewsListItem from './Components/NewsListItem';
require('dotenv').config();
const apiKey = process.env.API_KEY;

function App() {
  
  console.log(apiKey);

  return (
    <div>
      <Navbar />
      <div className="columns is-centered mt-4">
        <div className="column is-three-fifths">
          <div className="container is-fluid">
            <div className="columns is-centered">
              <CategoryList />
              <div className="column is-half">
              <div className="box">
                <NewsListItem />
                <NewsListItem />
                <NewsListItem />
                <NewsListItem />
                </div>
              </div>
              <div className="column is-one-quarter">
                <div class="box">weather</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>My text is long and beautiful, as, it has been well documented, are various other parts of my website. 
        My placeholder text, I think, is going to end up being very good with women. 
        Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites.

      I’m the best thing that ever happened to placeholder text.

      Some people have an ability to write placeholder text... 
      It's an art you're basically born with. You either have it or you don't. 
      We are going to make placeholder text great again. Greater than ever before.

      I know words. I have the best words. An ‘extremely credible source’ 
      has called my office and told me that Barack Obama’s placeholder text is a fraud. 
      Lorem Ispum is a choke artist. It chokes!

The best taco bowls are made in Trump Tower Grill. I love Hispanics! 
We have so many things that we have to do better... and certainly ipsum is one of them. 
I think the only card she has is the Lorem card. An ‘extremely credible source’ 
has called my office and told me that Barack Obama’s placeholder text is a fraud. </div> */}
    </div>
  );
}

export default App;
