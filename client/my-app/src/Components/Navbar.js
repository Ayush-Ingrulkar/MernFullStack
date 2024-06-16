import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
< nav className = "navbar navbar-expand-lg bg-body-tertiary" >
<div className="shadow-lg p-8 mb-9 container fliud bg-body-tertiary rounded">
            <a className="navbar-brand" href="#">Apex </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-7 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/"className="nav-link active" aria-current="page" >Home</Link></li>
                    <li className="nav-item">
                        <Link to ="/about" className="nav-link" >About</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                            More
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link to="/restrict" className="dropdown-item">Restrictions</Link></li>
                            <li><Link to="/feed" className="dropdown-item" >Feed</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link to="/help" className="dropdown-item" >Help!</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="false">Explore In You</a>
                    </li>
                </ul>
             <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
        </div>
</nav >
    )
    }


