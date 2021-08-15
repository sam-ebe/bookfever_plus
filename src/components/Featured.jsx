import React from 'react';
import BookCard from './BookCard';

function Featured(books) {
  console.log(books)
  /* map on BookCard here*/
  return (
    <div>
      <BookCard {...books} />
      <BookCard {...books} />
      <BookCard {...books} />
    </div>
  )
}

export default Featured;
