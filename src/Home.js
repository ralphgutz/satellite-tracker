import React from "react"
import MainCard from "./MainCard"
import "./App.css"
import "./MainCard.map.css"

const Home = () => {
    const canvas = document.querySelector("span")
    const div = document.getElementById("root")
    if(canvas)
        div.removeChild(canvas)

    return <main>
        <div className="main-card-container">
            <MainCard title="DIWATA-2B" link="/diwata" track="Track" text="A microsatellite launched in October 29, 2018 and the second satellite of the PHL-Microsat program after Diwata-1." />
            <MainCard title="MAYA-1" link="/maya" track="Track" text="The first nanosatellite of the Philippines launched in June 29, 2018." />
            <div className="main-card-disabled">
                <MainCard disabled title="DIWATA-1" text="The first PH microsatellite and the first satellite built and designed by Filipinos. Launch in March 23, 2016 and decommissioned in April 5, 2020." />
                <MainCard disabled title="AGILA-1" text="The first Philippine satellite through acquisition while in orbit. Launched in March 20, 1987 and deorbited in January 1998." />
            </div>
            <MainCard title="International Space Station" link="/iss" track="Track" text="An international modular space station (habitable artificial satellite) in low Earth orbit launched in November 20, 1998.." />

        </div>

        <div className="main-side-container">
            <h3>API Powered by:</h3>
            <a href="https://www.n2yo.com/">N2YO.com</a>
        </div>
        
        
    </main>
}

export default Home