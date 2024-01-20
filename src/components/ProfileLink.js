import { Link } from "react-router-dom";
import UserBadge from "./UserBadge";
import { Component } from "react";
import axios from "axios";
import { PROFILES_API_URL } from "../constants";


export default class ProfileLink extends Component {

    state = {
        profile_picture: null,
    }


    getProfilePicture = () => {
        const url = PROFILES_API_URL + "profile-picture/" + this.props.userId;
        axios.get(url).then((res) => {
            this.setState({profile_picture: res.data.src});
        })
    }

    resetState = () => {
        this.getProfilePicture();
    }

    componentDidMount() {
        this.resetState();
    }

    render() {
        return (
            <Link to={ "../profile/" + this.props.userId }>
                <UserBadge profile_picture={this.state.profile_picture}/>
            </Link>
        )
    }
    
}