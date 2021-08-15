import React from "react";
import Featured from './../components/Featured';


/* Displays Featured books : Recommended and Most Read */
function Home({dataBooks}) {

  let recommendedBooks = dataBooks.filter((book) => book.isRecommended === true );
  let mostReadBooks = dataBooks.sort((a,b) => b.numberOfReadings - a.numberOfReadings).slice(0,3);

  return <div>
    <Featured books = {recommendedBooks} />
    <Featured books = {mostReadBooks} />
  </div>;
}

export default Home;
