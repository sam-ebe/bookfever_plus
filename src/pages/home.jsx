import React from 'react'
import Featured from '../components/Featured';
import {dataBooks} from '../data/dataBooks';
function Home() {

  let recommendedBooks = dataBooks.filter((book) => book.isRecommended === true ).slice(0,5);
  let mostReadBooks = dataBooks.sort((a,b) => b.numberOfReadings - a.numberOfReadings).slice(0,5);
  return (
    <div className="home">
      <Featured title="Recommended" dataBooks={recommendedBooks} />
      <Featured title="Most read" dataBooks={mostReadBooks} />
    </div>
  )
}

export default Home;
