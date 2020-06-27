import React, {useState, useEffect} from "react"
import { Map, Marker, Popup, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'

const FetchAPI = ({satId}) => {
    const [satdata, setSatdata] = useState({
        lat: 0, long: 0, alt: 0
    })
    
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

    console.log(satdata.lat, satdata.long)

    // const canvas2 = document.querySelector("span")
    // const div2 = document.getElementById("root")
    // if(canvas2)
    //     div2.removeChild(canvas2)
    
    // const canvas = document.createElement("span")
    // const divMap = document.createElement("div")
    // divMap.id = "map"
    // const div = document.getElementById("root")
    // div.appendChild(canvas).appendChild(divMap)

    const header = {title: "", sub: ""}

    if(satId === 43678){
        header.title = "DIWATA 2B (PO-101)"
        header.sub = satId
    }
    else if(satId === 43590){
        header.title = "BIRD-PH (MAYA-1)"
        header.sub = satId
    }
    else if(satId === 25544){
        header.title = "International Space Station (ISS)"
        header.sub = satId
    }
        
            

    const abortControl = new AbortController();
    const signal = abortControl.signal

    const fetchAPI =  () => {
        fetch(`https://www.n2yo.com/rest/v1/satellite/positions/${satId}/14.5243/121.0792/0/1/&apiKey=U98VRQ-ZEGYY6-KC5477-4G9R`, {signal})
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            setSatdata({lat: data.positions[0].satlatitude,
                long: data.positions[0].satlongitude,
                alt: data.positions[0].sataltitude
            })
            //setLat(data.positions[0].satlatitude)
            //setLong(data.positions[0].satlongitude)
        })
        .catch((e) => null)
    }

    useEffect(() => {
        const interval = setInterval(fetchAPI, 4000, abortControl);
        //console.log(abortControl)
        return () => {
            clearInterval(interval);
            abortControl.abort();
        };
    }, [fetchAPI]);

    
    return <>
        <div id="sat-header">
            <h2>{header.title}</h2>
            <p>Satellite ID: {header.sub}</p>
        </div>
        <div id="main-tracker">
            <Map center={[satdata.lat, satdata.long]} zoom={3}>
                <TileLayer url={tileUrl} attribution={attribution} />
                <Marker position={[satdata.lat, satdata.long]}>
                    <Popup>{header.title}</Popup>
                </Marker>
                <CircleMarker center={[satdata.lat, satdata.long]} color={"rgb(93, 30, 145)"} radius={20}>
                    <Tooltip>{header.title}</Tooltip>
                </CircleMarker>
            </Map>
            <div id="sat-description">
                <h3>Current Position</h3>
                <div className="card">
                    <div className="card-title">Latitude</div>
                    <div className="card-text">{satdata.lat}°</div>
                </div>
                <div className="card">
                    <div className="card-title">Longitude</div>
                    <div className="card-text">{satdata.long}°</div>
                </div>
                <div className="card">
                    <div className="card-title">Altitude</div>
                    <div className="card-text">{satdata.alt} km</div>
                </div>
            </div>
        </div>
    </> 
}


export default FetchAPI