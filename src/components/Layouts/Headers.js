import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/HeaderStyle.css"

const Headers = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='text-danger'>C</span>ompany <span className='text-danger'>N</span>ame</a>
    <form action="">
    <ul className='navigation-menu'>
        <li><Link to={"/"} >Home</Link></li>
        <li><Link to={"/menu"} >Food Menu</Link></li>
        <li><Link to={"/abouut"} >Admin</Link></li>
        <li><Link to={"/contact"} >Contact</Link></li>
    </ul>
    <div className="scrolling-container">
  <span className='text-danger'>Order your delicious food here</span>
</div>
</form>
  </div>
</nav>



    </div>
  )
}

export default Headers
