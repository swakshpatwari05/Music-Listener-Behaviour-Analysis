import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return(
        <div className="home-container">
            <div className="box">
                <h1>Music Listener Behaviour Analysis</h1>
                <div className="main-links">
                    <Link to="/user" className="link-button">User</Link>
                    <Link to="/composer" className="link-button">Music Composer</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;