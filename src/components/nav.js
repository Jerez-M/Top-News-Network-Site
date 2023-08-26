import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from ".././assets/TNN_LOGO.png"
import axios from 'axios';


const Nav = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [apiKey, setApiKey] = useState('056949d1e59b4c0a8ac6567a03382f10');
  const history = useHistory()

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("search Querry is: ", searchQuery)
    history.push(`/search/${searchQuery}`);

  }

  return (
    <>
      <header className="navbar navbar-expand-lg bg-dark-subtle fixed-top">
        <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} width={95} height={95} alt="TNN" className="navbar-logo img-fluid" />
        </Link>
         
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
            <form className="d-flex ml-5 pl-5" onSubmit={handleSubmit}>
              <input
                className="form-control pr-5 me-2"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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