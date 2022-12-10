import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h5 className='tx-color'>📝 Daily-Task</h5></Link>
          <button className="navbar-toggler tx-color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link" aria-current="page" to="/"><h6 className='tx-color'>Home</h6></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/add-task"><h6 className='tx-color'>Add Note</h6></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
