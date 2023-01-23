import React from "react"
import BigcarouselElement from "./BigcarouselElement"
import "./Bigcarousel.css"
import image1 from "./image1.webp"
import image2 from "./image2.webp"
import image3 from "./image3.webp"
import image4 from "./image4.webp"
import next from "./next.svg"
import prev from "./previous.svg"

export default function Bigcarousel(){
    let elements
    let elementwidth
    const gapp = 0.03
    const gap = gapp * window.screen.width
    const le = 0.04
    function carousel(){
        
        const container = document.getElementsByClassName("bigcarousel--container")
        elements = Array.from(container[0].children)
        elementwidth = elements[0].getBoundingClientRect().width
        
        elements.forEach((ele,index)=>{
            if (index===0){
                ele.style.left = ((gapp+le)*window.screen.width) + "px"
                return
            }
            if (index == elements.length -1){
                ele.style.left = "-"+(elementwidth - le*window.screen.width) + "px"
                return
            }
            ele.style.left = (le*window.screen.width) + gap + (elementwidth + gap)*index +"px"
        })

        
    }


    let curnode = 0

    function nextitem(){
        const curele= elements[curnode]
        const prevele=elements[curnode === 0 ? elements.length - 1 : curnode-1]
        const nextele = elements[curnode === elements.length - 1 ? 0 : curnode +1]
        const antnextele = elements[curnode >= elements.length - 2 ? curnode === elements.length -2 ? 0 : 1: curnode +2]
        

        prevele.style.left= `-${window.screen.width}px`
        curele.style.left = `-${elementwidth - (le*window.screen.width)}px`
        nextele.style.left = `${((le+gapp)*window.screen.width)}px`
        antnextele.style.left = `${((gapp+le+gapp)*window.screen.width) +elementwidth}px`

        curnode = curnode === elements.length - 1 ? 0 : curnode +1
        console.log("next"+curnode)
    }
    function previtem(){
        const curele= elements[curnode]
        const prevele=elements[curnode === 0 ? elements.length - 1 : curnode-1]
        const nextele = elements[curnode === elements.length - 1 ? 0 : curnode +1]
        const antprevele = elements[curnode <= 1 ? curnode === 0 ? elements.length - 2: elements.length - 1: curnode -2]
        
        prevele.style.left = `${((le+gapp)*window.screen.width)}px`
        curele.style.left = `${((gapp+le+gapp)*window.screen.width) +elementwidth}px`
        nextele.style.left = `${window.screen.width}px`
        antprevele.style.left = `-${elementwidth - (le*window.screen.width)}px` 
        curnode = curnode <=0  ? elements.length - 1 : curnode - 1
        console.log("prev"+curnode)
    }
    return(
        <div className="bigcarousel--maincontainer" onLoad={carousel} >
        <button style={{opacity:1}} className="bigcarousel--maincontainer--prevbut" onClick={previtem} ><img src={prev}/></button>
        <div className="bigcarousel--container"  >
            <BigcarouselElement cpos={true} title="O2" category="Thriller" rating="U/A 16+" image={image1} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>
            <BigcarouselElement cpos={false} title="O2" category="Thriller" rating="U/A 16+" image={image2} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>
            <BigcarouselElement cpos={false} title="O2" category="Thriller" rating="U/A 16+" image={image3} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>
            <BigcarouselElement cpos={false} title="O2" category="Thriller" rating="U/A 16+" image={image4} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>
            <BigcarouselElement cpos={true} title="O2" category="Thriller" rating="U/A 16+" image={image1} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>
            <BigcarouselElement cpos={false} title="O2" category="Thriller" rating="U/A 16+" image={image2} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>
            <BigcarouselElement cpos={false} title="O2" category="Thriller" rating="U/A 16+" image={image3} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>
            <BigcarouselElement cpos={false} title="O2" category="Thriller" rating="U/A 16+" image={image4} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>
            <BigcarouselElement cpos={true} title="O2" category="Thriller" rating="U/A 16+" image={image1} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>
            <BigcarouselElement cpos={false} title="O2" category="Thriller" rating="U/A 16+" image={image2} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>
            <BigcarouselElement cpos={false} title="O2" category="Thriller" rating="U/A 16+" image={image3} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>
            <BigcarouselElement cpos={false} title="O2" category="Thriller" rating="U/A 16+" image={image4} des="When a group of bus passengers get stuck in a landslide, a single mother struggles to protect her son and secure his oxygen cylinder from a desperate officer...."/>

        </div>
        <button style={{opacity:1}} className="bigcarousel--maincontainer--nextbut" onClick={nextitem} ><img src={next}/></button>
        
        </div>
    )
}