import React from "react";
import Featured from './../components/Featured';

/* Displays Featured books : Recommended and Most Read
   Limited to 3 books. Can be extended to accept more items if a caroussel is implemented */
function Home({dataBooks}) {
//console.log(dataBooks)
  let recommendedBooks = dataBooks.filter((book) => book.isRecommended === true ).slice(0,3);
  let mostReadBooks = dataBooks.sort((a,b) => b.numberOfReadings - a.numberOfReadings).slice(0,3);

  return <div>
    <Featured books = {recommendedBooks} title="Recommended" />
    <Featured books = {mostReadBooks} title="Most read" />
  </div>;
}

export default Home;
