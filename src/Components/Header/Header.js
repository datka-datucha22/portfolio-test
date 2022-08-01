import React from 'react'
import Logo from './Logo'
import HeaderUl from './HeaderUl'
import "../../Styles/Header/Header.css"
import { Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="header">
                <Logo />
                <HeaderUl />

            </div>
            <Outlet />
        </>
    )
}
