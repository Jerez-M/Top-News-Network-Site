import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Footer() {
  return (
    <>
        <footer className="bg-light bg-dark-subtle shadow text-muted small py-4 mt-1">
            <div className="container"> 
                <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mx-1">
                    <h5>About Us</h5>
                    <p className=''>
                    Top News Network is a leading global news company committed to delivering comprehensive and up-to-date news 
                    coverage from around the world. With an unwavering focus on accuracy, integrity, and journalistic excellence, we strive 
                    to provide our audience with a diverse range of news stories, spanning politics, business, technology, science,
                    entertainment, sports, and more.
                    </p>
                </div>
                <div className="col-lg-3 col-md-5 mb-3 mx-1">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                    <li className="nav-item px-2">
                        <Link to="/" className="nav-link text-primary"><h6>HOME</h6></Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link to="/sports" className="nav-link text-primary"><h6>SPORTS</h6></Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link to="/entertainment" className="nav-link text-primary"><h6>ENTERTAINMENT</h6></Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link to="/science" className="nav-link text-primary"><h6>SCIENCE</h6></Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link to="/business" className="nav-link text-primary"><h6>BUSINESS</h6></Link>
                    </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mx-1">
                    <h5>Contact Us</h5>
                    <p>2882 Bluffhill, Westgate, Harare, Zimbabwe</p>
                    <p>Email: jjmuchazondida@gmail.com</p>
                    <p>Email: pridemudondo28@gmail.com</p>
                    <p>Phone: +263 783 382 395</p>
                </div>
                </div>
            </div>
            <div className="text-center py-2">
                <p className="mb-0">&copy; 2023 Top News Network. All rights reserved.</p>
            </div>
        </footer>
    
    </>
  )
}

export default Footer