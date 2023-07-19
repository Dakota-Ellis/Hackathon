import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import './Map.css';

export default function Map() {

    const markers = [
        {
            geocode: [48.86, 2.3522],
            popUp: "hello, I am pop up 1"
        },
        {
            geocode: [48.96, 2.3522],
            popUp: "hello, I am pop up 1"
        },
        {
            geocode: [49.86, 2.3522],
            popUp: "hello, I am pop up 1"
        }
    ]

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/5591/5591266.png",
        iconSize: [38, 38]
    })
    


    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={15}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            {markers.map(marker => (
                <Marker position={marker.geocode} icon={customIcon}>
                </Marker>
            ))}



        </MapContainer>
    )
}