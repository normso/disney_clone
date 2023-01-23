import React from "react"
import BigcarouselElement from "./BigcarouselElement"
import "./Bigcarousel.css"
import next from "./right.png"
import prev from "./left.png"


export default function Bigcarousel({carouselElements}){
    const imageurl = "https://image.tmdb.org/t/p/w780"
    let curin = 2

    
    React.useEffect(()=>{
        if (carouselElements!=0){
        const s = document.querySelector(".bigcarousel--container")
        s.style.transform = "translate(-" + (s.children[0].offsetWidth*0.97)+ "px)"
        }
        setInterval(()=>{
            nextscroll();
        },4000);
    },[carouselElements])

    function nextscroll(){
        const s = document.querySelector(".bigcarousel--container")
        if (curin === carouselElements.length){
            s.style.transition = "none"
            curin = 1
            s.style.transform = "translate(0px)"
        }else{
            s.style.transition = "transform 0.4s ease-in-out"
            curin = curin + 1
            s.style.transform = "translate(-" + ((s.children[0].offsetWidth*0.97) + (((s.children[0].offsetWidth)+ (0.03*window.innerWidth))*curin))+ "px)"
        }
    }

    function prevscroll(){
        const s = document.querySelector(".bigcarousel--container")
        if (curin === 1){
            s.style.transition = "none"
            curin = s.children.length-1
            s.style.transform = "translate(-" + (((s.children[0].offsetWidth)+ (0.03*window.innerWidth))*s.children.length-1)+ "px)"
        }else{
            s.style.transition = "transform 0.4s ease-in-out"
            curin = curin - 1
            s.style.transform = "translate(-" + ((s.children[0].offsetWidth*0.97) + (((s.children[0].offsetWidth)+ (0.03*window.innerWidth))*curin))+ "px)"
            
            console.log(curin)
        }
    }
    function showCtrl(){
        const prevbut = document.getElementsByClassName("bigcarousel--maincontainer--prevbut")[0]
        const nextbut = document.getElementsByClassName("bigcarousel--maincontainer--nextbut")[0]
        prevbut.style.opacity=1
        nextbut.style.opacity=1
    }
    function hideCtrl(){
        const prevbut = document.getElementsByClassName("bigcarousel--maincontainer--prevbut")[0]
        const nextbut = document.getElementsByClassName("bigcarousel--maincontainer--nextbut")[0]
        prevbut.style.opacity=0
        nextbut.style.opacity=0
    }
    return(
        <div className="bigcarousel--maincontainer" onMouseEnter={showCtrl} onMouseLeave={hideCtrl}>
            <div className="bigcarousel--container"  >
                {carouselElements.map((curvalue,index)=>{
                   return <BigcarouselElement key={index} cpos={false} title={curvalue.media_type == "movie" ? curvalue.title : curvalue.name} category={curvalue.media_type} rating={curvalue.popularity} image={imageurl+curvalue.backdrop_path} des={curvalue.overview}/>
                })}
                
            </div>
            <button className="bigcarousel--maincontainer--prevbut" onClick={prevscroll} ><img src={prev}/></button>
            <button className="bigcarousel--maincontainer--nextbut" onClick={nextscroll}><img src={next}/></button>
        </div>
    )
}