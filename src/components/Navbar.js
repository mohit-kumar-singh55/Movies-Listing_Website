import React from 'react';
import "./Navbar.css";
import { Search } from "react-feather";

function Navbar() {
    return (
        <div className="container">
            <div className="logo">Blade Storm</div>
            <div classname="right_side" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <div className="search">
                    <input type="text" placeholder='Search Movies' />
                    <Search />
                </div>
                <p className="link">Explore</p>
            </div>
        </div>
    );
}

export default Navbar;
