import React from 'react'
import Navbar from './Navbar'

function Header(dataBooks) {
  return (
    <header>
      <nav>
        <Navbar {...dataBooks}/>
      </nav>
    </header>
  )
}

export default Header;
