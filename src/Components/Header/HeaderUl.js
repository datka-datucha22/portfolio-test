import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../Styles/Header/Header.css"

export default function HeaderUl() {
    return (
        <nav className="HeaderNav">
            <ul className="header-ul">
                <li><NavLink style={{ textDecoration: 'none' }} to='/portfolio-test/'>Home</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none' }} to='/portfolio-test/about'>About</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none' }} to='/portfolio-test/contact'>Contact</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none' }} to='/portfolio-test/Work'>Work</NavLink></li>
            </ul>
        </nav>
    )
}
