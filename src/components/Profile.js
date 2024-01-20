import axios from "axios"
import { PROFILES_API_URL } from "../constants"
import UserBadge from "./UserBadge";
import { Col, Container, Row } from "reactstrap";
import { useOutletContext } from "react-router-dom";
import ClipFeed from "./ClipFeed";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";

export async function getProfile(id) {
    const url = PROFILES_API_URL + "user-id-detail/" + id;
    const res =  await axios.get(url);
    const profile = res.data;
    return { profile };
}

export async function getProfilePicture(userId) {
    const url = PROFILES_API_URL + "profile-picture/" + userId;
    const res =  await axios.get(url);
    const profile_picture = res.data;
    return { profile_picture };
}

export async function getUserId() {
    const url = PROFILES_API_URL + "user-id/";
    const res = await axios.get(url);
    const user_id = res.data;
    return { user_id };
}

function EditProfile({ profile, isUser }) {
    if (!isUser) {
        return null;
    }

    return (
        <EditProfileModal profile={profile} />
    )
    
}

export default function Profile(props) {

    const profile = props.profile;
    const account = props.account;
    const clips = props.clips;
    /* const context = useOutletContext();
    const userId = context.userId; */

    const auth = props.auth;
    var profileIsUser = false; 
    if (props.userId === profile.user) {
        var profileIsUser = true;
    }
    

    return (
        <article className="profile">
            <Container>
                <Row>
                    <Col>
                        <UserBadge profile_picture={ profile.profile_picture } />
                    </Col>        
                    <Col>
                        <Row>
                            <h3>{ account.username }</h3>
                        </Row>
                        <Row>
                            <p>{ profile.full_name }</p>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <p>{ profile.bio }</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <EditProfile profile={profile} isUser={profileIsUser} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ClipFeed clip_id_list={clips} auth={auth} />
                    </Col>
                </Row>
            </Container>
            
        </article>
    )
} 