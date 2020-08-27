import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className="header-text-area">
                <h1 className="header-text">Online Class</h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/course">Course</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/enroll-summary">Enroll Summary</a>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;