import React from "react"
import logo from "./icons/logo.svg"
import sun from "./icons/sun.svg"
import moon from "./icons/moon.svg"
import "./Navbar.css"

export default function Navbar(){
    return(
        <header>
            <div className="nav--container">
                <div className="nav--container1">
                    <div className="nav--logo">
                        <img style={{width:"115px",height:"42px"}} src={logo}/>
                    </div>
                    <div className="nav-menus">
                        <a href="/">
                            <span>Tv</span>
                        </a>
                        <a href="/">
                            <span>Movies</span>
                        </a>
                        <a href="/">
                            <span>Sports</span>
                        </a>
                        <a href="/">
                            <span>Disney+</span>
                        </a>
                        <a href="/">
                            <span>Kids</span>
                        </a>
                    </div>
                </div>
                <div className="nav-container2">
                    {/* <div  className="nav--lightdark">
                        <button style={{all:"unset"}}><img style={{width:"35px",height:"35px"}} src={moon}/></button>
                    </div> */}
                    <div className="nav--login">
                       <a href="/"> <span>Login</span> </a>
                    </div>
                </div>
            </div>
        </header>
    )
}