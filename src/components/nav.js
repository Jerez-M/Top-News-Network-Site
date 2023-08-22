import React from 'react';
import { Link } from 'react-router-dom';
import logo from ".././assets/TNN_LOGO.png"


const Nav = () => {

  return (
    <>
      <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} width={75} height={75} alt="TNN" className="navbar-logo img-fluid" />
          {/* <span className="ml-3 text-xl">News</span> */}
        </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
                <Link to="/" className="nav-link"><h6>HOME</h6></Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/sports" className="nav-link"><h6>SPORTS</h6></Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/entertainment" className="nav-link"><h6>ENTERTAINMENT</h6></Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/science" className="nav-link"><h6>SCIENCE</h6></Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/business" className="nav-link"><h6>BUSINESS</h6></Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/technology" className="nav-link px-2"><h6>TECHNOLOGY</h6></Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/general" className="nav-link px-2"><h6>GENERAL</h6></Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/health" className="nav-link px-2"><h6>HEALTH</h6></Link>
              </li>
            </ul>
          </div>
          <div className='d-flex flex-end ml-5 pl-5'>
            <form className="d-flex ml-5 pl-5">
              <input
                className="form-control px-5 me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
          
        </div>
      </header>
    </>
  );
}

export default Nav;