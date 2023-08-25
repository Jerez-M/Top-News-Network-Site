import React from 'react'
import { Link } from 'react-router-dom';


const SecondNav  = () => {
  return (
    <>
       <div className="container d-flex justify-content-center px-3">
            <header className="navbar navbar-expand-lg mt-2 py-2 w-100 rounded">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                    {/* <img src={logo} width={75} height={75} alt="TNN" className="navbar-logo img-fluid" /> */}
                    <span className="ml-3 display-5 fw-bold">TNN NEWS</span>
                    </Link>
                    {/* <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2 px-1 mx-1">
                                <Link to="/politics" className="btn btn-outline-dark">Politics</Link>
                            </li>
                            <li className="nav-item px-2 px-1 mx-1">
                                <Link to="/education" className="btn btn-outline-dark">Education</Link>
                            </li>
                            <li className="nav-item px-2 px-1 mx-1">
                                <Link to="/football" className="btn btn-outline-dark">Football</Link>
                            </li>
                            <li className="nav-item px-2 px-1 mx-1">
                                <Link to="/climate" className="btn btn-outline-dark">Climate</Link>
                            </li>
                            <li className="nav-item px-2 px-1 mx-1">
                                <Link to="/travel" className="btn btn-outline-dark">Travel</Link>
                            </li>
                            <li className="nav-item px-2 px-1 mx-1">
                                <Link to="/culture" className="btn btn-outline-dark">Culture</Link>
                            </li>
                            <li className="nav-item px-2 px-1 mx-1">
                                <Link to="/music" className="btn btn-outline-dark">Music</Link>
                            </li>
                            <li className="nav-item px-2 px-1 mx-1">
                                <Link to="/food" className="btn btn-outline-dark">Food</Link>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <a class="btn btn-outline-dark dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Country
                            </a>
                            <ul class="dropdown-menu border border-2 rounded mx-1" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Zimbabwe</a></li>
                                <li><a class="dropdown-item" href="#">USA</a></li>
                                <li><a class="dropdown-item" href="#">Canada</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
      </div>
        
    </>
  )
}

export default SecondNav