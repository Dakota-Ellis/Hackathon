import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './Login.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Map() {

        const navigate = useNavigate()
      
        const getInitialState = () => {
          const value = 'map';
          return value;
        };
      
        const [signIn, setSignIn] = useState(getInitialState);
      
        const handleChange = (e) => {
          setSignIn(e.target.value)
        };
      
    


    return (
    <>

        <div className='Login'>
          <h1>Login</h1>
             <div>
                <input className='userInputs' name='UserId' placeholder="User Name..." type='text' />
                 <input className='userInputs' name='PassWord' placeholder="User Password..." type='text' />
             </div>
                 <button className='LoginBtn' onClick={() => navigate(`${signIn}`)}>Login</button>
             </div>
        <MapContainer center={[48.8566, 2.3522]} zoom={15}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
        </MapContainer>
    </>
    )
}


  
