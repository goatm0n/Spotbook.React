import { useState } from "react"
import { Marker, Popup, useMapEvent, useMapEvents } from "react-leaflet";
import NewSpotModal from "./NewSpotModal";


export default function NewSpotMarker(props) {

    const [position, setPosition] = useState(null);
    const map = useMapEvent( 'click', (e) => {
       const coords = e.latlng;
       setPosition(coords);
    });
    
    if (position) {
        return (
            <Marker position={position} >
                <Popup>
                    <NewSpotModal auth={props.auth} position={position}/>
                </Popup>
            </Marker>
        )
    }

}