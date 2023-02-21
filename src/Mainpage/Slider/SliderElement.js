import React from "react"
import "./SliderElement.css"

export default function Slider(prop){
    return (
        <div className="sliderelement--container">
            <div className="sliderelement--imagecontainer">
                <img loading="lazy" src={prop.image}/>
            </div>
        </div>
    )
}