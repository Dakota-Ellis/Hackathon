import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useContext } from 'react';
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import './Map.css';
import { DataContext } from "../App";

export default function Map() {
    
    // const markers = [
    //     {
    //         geocode: [48.86, 2.3522],
    //         popUp: "hello, I am pop up 1"
    //     },
    //     {
    //         geocode: [48.96, 2.3522],
    //         popUp: "hello, I am pop up 1"
    //     },
    //     {
    //         geocode: [49.86, 2.3522],
    //         popUp: "hello, I am pop up 1"
    //     }
    // ]

    const data = useContext(DataContext);
    const data1 = (data.forEach(element => {
        console.log(element)
    });(loc => loc));
    console.log("data1: ", data1)
    console.log("data: ", data)

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/5591/5591266.png",
        iconSize: [38, 38]
    })
    


    return (
    <>
        <MapContainer center={[35.848, -8.630]} zoom={2.5}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {data.map(geoLocation => (
                 <Marker 
                position={geoLocation} icon={customIcon}>
                </Marker> 
            ))}    
        </MapContainer>
    </>
    )
}


  
