import React from "react";
import { Marker, Popup } from "react-leaflet";
import SpotPopup from './SpotPopup';


function SpotMarker(props) {

    const spot = props.spot;

    const coords = spot.geometry.coordinates;
    const position = [coords[1], coords[0]];

    return (
        <Marker position={ position } >
            <SpotPopup spot={ spot } />    
        </ Marker>
    );
}

export default SpotMarker;