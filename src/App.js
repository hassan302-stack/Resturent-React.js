import React, { useState } from 'react'

import Menu from './menuapi.js';
import Cards from './cards.js';
import Navbar from './navbar.js';
const App = () => {
    const [currMenu, setMenu] = useState(Menu)


    const filterout = (category) => {
        var update = Menu.filter((curr) => {

            return category === "all" ? curr : curr.category === category

        })
        setMenu(update);
        console.log(currMenu);
    }
    return (
        <>
            <Navbar filterout={filterout} />
            <Cards currMenu={currMenu} />




        </>
    )
}

// const MyName=()=>{
//     return<h1>Hassan Kazmi</h1>;
// }
export default App
