import React from 'react'
import BookCard from './BookCard';
import Title from './Title';

function Featured({title, dataBooks}) {
console.log(dataBooks);

  return (
    <section className="featured">
      <Title title={title}/>
      <div className="featured__images">
        {dataBooks.map((book) => {
          return (
            <BookCard key={book.id} {...book} />
          )
          })
        }
      </div>
    </section>
  )
}

export default Featured;
