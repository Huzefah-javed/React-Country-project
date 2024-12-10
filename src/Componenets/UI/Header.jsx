import { NavLink } from "react-router"
import "../UI/HeaderFooter.css"
import { RiMenu4Fill } from "react-icons/ri"
import { useState } from "react"
export const Header =()=> {

    const [menuToggle , setMenuToggle] = useState(false)

        const handleMenuBtn =()=> {
            setMenuToggle(!menuToggle)
        }

    return(
        <>
          <header className="header">
            <div className="logo">Huzefah</div>
            <nav className="menu" style={window.innerWidth <= 990?{display: menuToggle ? "flex" : "none"}: {display: "flex"}}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/country">Country</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className="menu-icon">
            <RiMenu4Fill className="iconMenu" onClick={handleMenuBtn}/>
            </div>
        </header>
        </>
    ) 


}