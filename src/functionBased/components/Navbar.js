import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {

    const [ navbarOpen, setNavbarOpen ] = useState( false )

    const handleToggle = () =>{
        setNavbarOpen( prev => !prev )
    }

    const closeMenu = () =>{
        setNavbarOpen( false )
    }

    const links = [
        {
            id: 1, 
            path: "/", 
            text: "Home",
        },
        {
            id: 2, 
            path: "/about", 
            text: "About",
        }
    ]

    return(
        <nav className="navBar">

            <button onClick={ handleToggle }>
                {navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )}
            </button>


            <ul className={`menuNav ${ navbarOpen ? " showMenu" : "" }`}>
                {
                    links.map( link => {
                        return (
                            <li key={ link.id }>
                                    <NavLink       
                                        activeClassName="active-link" 
                                        to={ link.path } 
                                        onClick={ () => closeMenu()} 
                                        exact
                                    >
                                    { link.text }
                                    </NavLink>
                                </li>
                        )
                    })
                }
            </ul>

        </nav>
    )

}

export default Navbar