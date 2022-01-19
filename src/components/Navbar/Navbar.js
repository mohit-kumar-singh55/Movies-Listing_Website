import React from 'react';
import style from "./Navbar.module.css";
import { Search } from "react-feather";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className={style.container}>
            <Link to="/" className={style.logo}>
                Blade Storm
            </Link>
            <div className={style.right_side}>
                <div className={style.search}>
                    <input type={style.text} placeholder='Search Movies' />
                    <Search />
                </div>
                <p className={style.link}>
                    <Link to="/explore">Explore</Link>
                </p>
            </div>
        </div>
    );
}

export default Navbar;
