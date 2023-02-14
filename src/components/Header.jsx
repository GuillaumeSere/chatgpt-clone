import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link className='link' to="/chatgpt">ChatGPT</Link>
      <Link className='link' to="/images">Images</Link>
    </div>
  )
}

export default Header
