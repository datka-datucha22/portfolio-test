import React from 'react'
import '../../../Styles/work/Work.css'
import { useState } from 'react'

export default function Work() {
    let data = require('../../../data.json')
    const [info, setInfo] = useState(data)
    return (
        <div className="work">
            <span className="work-span" >Here are my projects</span>
            <div className="cards">
                {info.map((item, i) =>
                    <a key={i} href={item.link} target="_blank">
                        <div className="card">
                            <span className="card-name">{item.name}</span>
                            <img className="card-image" src={item.image} alt="image of my project" />
                            <div className="description">
                                <span>{item.description}</span>
                            </div>
                        </div>
                    </a>

                )}

                <span className="work-more">For more, you can check my <a className="more-link" href="https://github.com/datka-datucha22" target="_blank"> github profile </a></span>
            </div>





        </div>
    )
}
