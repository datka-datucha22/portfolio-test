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
                            <img className="card-image" src={item.image} alt="" />
                            <span className="description"></span>
                        </div>
                    </a>

                )}

            </div>





        </div>
    )
}
