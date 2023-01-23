import React from "react"
import "./BigcarouselElement.css"

export default function BigcarouselElement(prop){
    return(
        <div className={prop.cpos ? "bigcarouselelement--container cur" :"bigcarouselelement--container"}>
            <div className="bigcarouselelement--details">
                <h1 className="title">{prop.title}</h1>
                <div className="metadata">
                    <span>{prop.category}</span>
                    <span>.</span>
                    <span>{prop.rating}</span>
                </div>
                <p className="description">{prop.des}</p>
            </div>
            <div className="bigcarouselelement--image">
                <img  src={prop.image} alt=""/>
            </div>
            <div className="bigcarouselelement--blur"/>
        </div>
    )
}