import React, { Component } from "react";
import { Popup } from "react-leaflet";
import axios from "axios";
import { ACCOUNTS_API_URL } from "../constants";
import { Link } from "react-router-dom";
import './SpotPopup.css';



class SpotPopup extends Component {

    state = {
        username: "",
    }

    getUsername = () => {
        axios.get(ACCOUNTS_API_URL + "username/" + this.props.spot.properties.user)
            .then(res => this.setState({username: res.data}))
            .catch((err) => console.log(err));
        
    }

    resetState = () => {
        this.getUsername();
    }

    componentDidMount() {
        this.resetState();
    }


    render() {
        const spot = this.props.spot;
        const title = spot.properties.title;
        const spotType = spot.properties.spotType;
        const description = spot.properties.description;
        const userId = spot.properties.user;
        

        return (
            <Popup> 
                <Link to={"../spot/" + spot.id} className="spot-link" >
                    <b>{title}</b>    
                </Link>
                <br />
                {spotType}
                <br />
                {description}
                <br />
                <Link to={ "../profile/" + userId } className="profile-link">{this.state.username}</Link>
                <br />
            </Popup>
        )
    }
    
}

export default SpotPopup;