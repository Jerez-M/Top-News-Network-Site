import React from 'react'
import { Link } from 'react-router-dom';


const SecondNav  = () => {
  return (
    <>
       <div className="container d-flex justify-content-center px-3">
        <header className="navbar navbar-expand-lg navbar-dark bg-primary mt-2 py-2 w-100 rounded">
            <div className="container">
            <Link className="navbar-brand" to="/">
            {/* <img src={logo} width={75} height={75} alt="TNN" className="navbar-logo img-fluid" /> */}
            <span className="ml-3 text-xl">TNN NEWS</span>
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
                <li className="nav-item px-2 border border-2 rounded px-1 mx-1">
                    <Link to="/politics" className="nav-link"><h6>Politics</h6></Link>
                </li>
                <li className="nav-item px-2 border border-2 rounded mx-1">
                    <Link to="/education" className="nav-link"><h6>Education</h6></Link>
                </li>
                <li className="nav-item px-2 border border-2 rounded mx-1">
                    <Link to="/football" className="nav-link"><h6>Football</h6></Link>
                </li>
                <li className="nav-item px-2 border border-2 rounded mx-1">
                    <Link to="/climate" className="nav-link"><h6>Climate</h6></Link>
                </li>
                <li className="nav-item px-2 border border-2 rounded mx-1">
                    <Link to="/travel" className="nav-link"><h6>Travel</h6></Link>
                </li>
                <li className="nav-item px-2 border border-2 rounded mx-1">
                    <Link to="/culture" className="nav-link px-2"><h6>Culture</h6></Link>
                </li>
                <li className="nav-item px-2 border border-2 rounded mx-1">
                    <Link to="/music" className="nav-link px-2"><h6>Music</h6></Link>
                </li>
                <li className="nav-item px-2 border border-2 rounded mx-1">
                    <Link to="/food" className="nav-link px-2"><h6>Food</h6></Link>
                </li>
                </ul>
            </div>
            <div className='d-flex flex-end ml-5 pl-5'>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown border border-2 rounded mx-1">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Country
                    </a>
                    <ul class="dropdown-menu border border-2 rounded mx-1" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Zimbabwe</a></li>
                        <li><a class="dropdown-item" href="#">USA</a></li>
                        <li><a class="dropdown-item" href="#">Canada</a></li>
                    </ul>
                    </li>
                </ul>

            </div>
            </div>
        </header>
      </div>
        
    </>
  )
}

export default SecondNav