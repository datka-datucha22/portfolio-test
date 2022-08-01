import React from 'react'
import '../../../Styles/Home/home.css'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

export default function Home() {
    return (
        <div className="home">
            <HomeLeft />
            <HomeRight />
        </div>
    )
}
