import React from "react";
import {NavLink} from "react-router-dom"


const Nav = (props) => {
    return (
        <nav id="navbar">    
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Sobre mi</NavLink></li>
                    <li><NavLink to="/Proyectos" className={({ isActive }) => isActive ? "activo" : undefined}>Proyectos</NavLink></li>
                    <li><NavLink to="/Contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}



export default Nav;