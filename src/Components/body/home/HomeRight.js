import React from 'react'
import imageOfMe from '../../../images/me.png'

export default function HomeRight() {
    return (
        <div className="home-right">
            <div className="divforimage">
                <img className="imageofme" src={imageOfMe} alt="photo of me" />
            </div>
        </div>

    )
}
