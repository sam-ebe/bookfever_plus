import React from 'react';

interface IBook {
  title: string;
  author: string;
  image?: string;

}

function Book({title, author, image}: IBook ) {

  return (
    <div>
      {"titre : " + title}
      {"author : " + author}
    </div>
  )
}

export default Book;
