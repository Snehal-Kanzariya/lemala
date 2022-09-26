import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ openMenu, setOpenMenu }) => {

    return (
        <>
            <header className="absolute z-50 w-full">
                <div className="px-25 lg:container-fluid relative z-50">
                    <nav className="navbar relative flex items-center justify-between">
                        <div className="logo flex">
                            <Link className="navbar-logo" to="/">
                                <img
                                    src="../images/logo.png"
                                    className="pt-30 max-w-[235px] laptopmini:max-w-[200px]  mdscreen:max-w-[150px]"
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <div className="navigations flex justify-end lg:pt-50">
                            <ul className="nav-item flex items-center lgscreen:hidden">
                                <li>Camps & Lodges</li>
                                <li>Destinations</li>
                                <li>Experiences</li>
                            </ul>
                            <button className='btn text-white xlmax:hidden'>
                                Plan Your Trip
                            </button>
                            <div
                                onClick={() => {
                                    document.body.classList.toggle("nav-menu-open");
                                    setOpenMenu(!openMenu);
                                    console.log("clicked");
                                }}
                                className={`hemburgur-icon flex justify-end pl-49 lgscreen:pt-30 
                                ${openMenu ? "menu-inner" : ""
                                    }`}>
                                <img src="../images/menuicon.svg" alt="" />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className={`menu-inner ${!openMenu ? 'hidden' : 'block'}`}>
                <div className="relative overlay">
                    <img src="../images/menu-inner-bg.jpg" alt="" />
                </div>
            </div>
        </>
    );
}

export default Header;