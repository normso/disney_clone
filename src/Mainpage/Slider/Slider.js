import React from "react"
import "./Slider.css"
import SliderElement from "./SliderElement"
import next from "./right.png"
import prev from "./left.png"

export default function Slider(prop){
    const imgurl = "https://image.tmdb.org/t/p/w780"
    let iniscroll = 0

    function nextscroll(){
        const ele= document.getElementById(prop.uid)
        ele.scrollLeft = iniscroll + window.innerWidth
        iniscroll =  (ele.scrollWidth - iniscroll ) < window.innerWidth  ? 0 :  iniscroll + window.innerWidth
    }
    function prevscroll(){
        const ele= document.getElementById(prop.uid)
        ele.scrollLeft = iniscroll - window.innerWidth
        iniscroll = iniscroll == 0 ? 0:  iniscroll - window.innerWidth
    }
    
    function showctrl(){
        const prev= document.querySelector(`.prevslider${prop.uid}`);
        const next = document.querySelector(`.nextslider${prop.uid}`);
        prev.style.opacity="1"
        prev.style.opacity="1"
        next.style.opacity="1"
        next.style.opacity="1"
    }

    function hidectrl(){
        const prev= document.querySelector(`.prevslider${prop.uid}`);
        const next = document.querySelector(`.nextslider${prop.uid}`);
        prev.style.opacity="0"
        prev.style.opacity="0"
        next.style.opacity="0"
        next.style.opacity="0"
    }

    return (
        <div  className="slider--maincontainer" onMouseEnter={showctrl} onMouseLeave={hidectrl}>
            <button onClick={prevscroll} className={`slider--maincontainer--prevbutcontainer--prevbut prevslider${prop.uid}`} ><img src={prev}/></button>
            <button onClick={nextscroll} className={`slider--maincontainer--nextbutcontainer--nextbut nextslider${prop.uid}`} ><img src={next}/></button>
            <div id={prop.uid} className="slider--container">
                <div className="margin--item">
                    <div style={{height:"30vh",width:"4vw"}} className="margin--item--holder"></div>
                </div>
                {prop.data.map((curele,ind)=>{
                    return <SliderElement key={ind} image={imgurl + curele.poster_path}/>
                })}
                <div className="margin--item">
                    <div style={{height:"30vh",width:"4vw"}} className="margin--item--holder"></div>
                </div>
            </div>
            
        </div>
    )
}