import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <div className="background">
            <div className="content">
                <h1>Welcome To Apex</h1>
                <h1>Your Way To Live Creative</h1>
                <h4>Please Login To Apex</h4>
                <Link to="/login">
                    <button className="btn btn-outline-danger">Login
                    </button></Link>
            </div>
        </div>
    );
};

export default HomePage;