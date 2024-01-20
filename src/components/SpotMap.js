import { MapContainer, TileLayer } from 'react-leaflet'
import React, { Component } from 'react';
import axios from 'axios';
import { SPOTS_API_URL } from '../constants';
import SpotMarker from './SpotMarker';
import NewSpotMarker from './NewSpotMarker';

class SpotMap extends Component {
    
    state = {
        center: [54.604429050318664, -5.924117259791455],
        spots: [],
    }

    getSpots = () => {
        if (this.props.spots) {
            this.setState({spots: this.props.spots})
        } else {
            axios.get(SPOTS_API_URL + "list/").then((res) => this.setState({spots: res.data.features}));
        }
        
    }

    resetState = () => {
        this.getSpots();
    }

    componentDidMount() {
        this.resetState();
    }

    

    render() {
        const spots = this.state.spots;
        return (
            <MapContainer center={this.state.center} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

               { spots.map(spot => <SpotMarker key={ spot.id } spot={ spot } />) }
                
                <NewSpotMarker auth={this.props.auth}/>

            </MapContainer>
        );
    }
}

export default SpotMap;