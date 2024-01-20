import { Component } from "react";
import axios from "axios";
import { PROFILES_API_URL, DEFAULT_PROFILE_PIC } from "../constants";
import './UserBadge.css'


export default function UserBadge(props) {

    if (!props.profile_picture) {
        return (
            <img src={ DEFAULT_PROFILE_PIC } alt="user badge" className="profile-pic"/>
        )
    }

    return (
        <img src={ props.profile_picture } alt="user badge" className="profile-pic"/>
    )
    
}        