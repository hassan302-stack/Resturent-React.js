import React, { useState } from 'react'
import "./style.css"
import Menu from './menuapi.js';
const Navbar = ({ filterout }) => {




    return (
        <>

            <nav className="navbar">
                <div className="btn-group">

                    <button className="btn-group__item" onClick={() => filterout("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={() => filterout("dinner")}>Dinner</button>
                    <button className="btn-group__item" onClick={() => filterout("evening")}>Evening</button>
                    <button className="btn-group__item" onClick={() => filterout("lunch")}>Lunch</button>
                    <button className="btn-group__item" onClick={() => filterout("all")}>All</button>
                </div>
            </nav>

        </>

    )

}

export default Navbar
