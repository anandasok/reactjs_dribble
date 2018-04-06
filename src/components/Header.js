import React from 'react';

// Custom components
import logo from '../images/dribbble.gif';

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-default navbar-inverse">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                </div>
                <div id="mainNavBar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="/"><img alt="dribbble"
                                        src={logo} />
                            </a>
                        </li>
                        <li><a href="#">Shots</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Podcast</a></li>
                        <li><a href="#">Meetups</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Hiring</a></li>
                        <li><a href="#">More</a></li>
                    </ul>

                    <form className="navbar-form navbar-right" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Sign in</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;