import React from 'react'
import '../../Styles/Header/Header.css';

export default function Logo() {

    let less = '<'
    let more = "/>"
    return (
        <div className="headerLogo">
            <span className="less"> {less} </span>
            <span className='me'>Datka</span>
            <span className="more"> {more} </span>

        </div>
    )
}
