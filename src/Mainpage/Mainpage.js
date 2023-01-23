import React from "react"
import Bigcarousel from "./Bigcarousel/Bigcarousel"
import Slider from "./Slider/Slider.js"
import "./Mainpage.css"

export default function Mainpage(){
    const [scrolldata,setScorlldata] = React.useState([])
    const [carouselElements ,setCarouselElements] = React.useState([])
    const [loading,setLoading] = React.useState(true)
    const category = [{"name":"Latest Releases India","url":"https://api.themoviedb.org/3/discover/movie?api_key=82d9278fff477f3708641f31d2e2d65d&with_origin_country=IN&sort_by=popularity.desc&primary_release_year=2022"},
                      {"name":"Latest Releases world","url":"https://api.themoviedb.org/3/discover/movie?api_key=82d9278fff477f3708641f31d2e2d65d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"},
                      {"name":"Comedy","url":"https://api.themoviedb.org/3/discover/movie?api_key=82d9278fff477f3708641f31d2e2d65d&with_genres=35&sort_by=popularity.desc"},
                      {"name":"Horror","url":"https://api.themoviedb.org/3/discover/movie?api_key=82d9278fff477f3708641f31d2e2d65d&with_genres=27&sort_by=popularity.desc"},
                      {"name":"Adventure","url":"https://api.themoviedb.org/3/discover/movie?api_key=82d9278fff477f3708641f31d2e2d65d&with_genres=12&sort_by=popularity.desc"},
                      {"name":"Action","url":"https://api.themoviedb.org/3/discover/movie?api_key=82d9278fff477f3708641f31d2e2d65d&with_genres=28&sort_by=popularity.desc"},
                      {"name":"Animation","url":"https://api.themoviedb.org/3/discover/movie?api_key=82d9278fff477f3708641f31d2e2d65d&with_genres=16&sort_by=popularity.desc"},
                    ]
    const [sliderdata,setSliderdata] = React.useState([])
    React.useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=82d9278fff477f3708641f31d2e2d65d')
            .then(response => response.json())
            .then((data) => {
                setCarouselElements(data.results);
                setLoading(false);
            })
        category.forEach((cur)=>{
            fetch(cur.url)
            .then(res=>res.json())
            .then(data=>{
                setScorlldata((prevvalue)=>{
                    return [...prevvalue,{"name":cur.name,"data":data.results}]
                });
            })
        })
    },[])
    return(
        <main>
            <div className="main--container">

               {loading ? 
               
                <>
                    <div className="big-carousel-skeleton"></div>
                    <div className="slider-skeleton">
                        <div className="slider-skeleton-heading"></div>
                        <div className="skeleton-element-container">
                            <div className="slider-skeleton-element"></div>
                            <div className="slider-skeleton-element"></div>
                            <div className="slider-skeleton-element"></div>
                            <div className="slider-skeleton-element"></div>
                            <div className="slider-skeleton-element"></div>
                            <div className="slider-skeleton-element"></div>
                        </div>
                        
                    </div>

                </>


               :
                    <>
                        <Bigcarousel carouselElements={carouselElements}/>
                            <div className="sliders-container" style={{marginTop:50}}>

                                {scrolldata.map((curele,ind)=>{
                                    return (
                                        <div key={ind} className="block--slider--container">
                                            <h2 style={{marginLeft:"6vw",fontWeight:"400",fontFamily:"Merriweather, serif"}}>{curele.name}</h2>
                                            <Slider uid={ind} data={curele.data}/>
                                        </div>
                                    )
                                })}     
                            </div>
                    </>
               
               
               }
               




                
            </div>
        </main>
    )
}

