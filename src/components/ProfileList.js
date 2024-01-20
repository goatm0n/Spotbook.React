import React, { Component } from "react";
import { Table } from "reactstrap";
import EditProfileModal from "./EditProfileModal";
import FollowersModal from "./FollowersModal";
import FollowToggleButton from "./FollowToggleButton";

class ProfileList extends Component {
    render() {
        const profiles = this.props.profiles;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Full Name</th>
                        <th>Bio</th>
                        <th>Follow</th>
                        <th>Followers</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!profiles || profiles.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                        profiles.map(profile => (
                            <tr key={profile.user}>
                                <td>{profile.user}</td>
                                <td>{profile.full_name}</td>
                                <td>{profile.email}</td>
                                <td>
                                    <FollowToggleButton
                                        auth={this.props.auth}
                                        type="profile"
                                        id={profile.user} 
                                    />
                                </td>
                                <td align="center">
                                    <FollowersModal
                                        type="profile"
                                        id={profile.user}
                                        count={profile.followers.length}
                                    />
                                </td>
                                <td align="center">
                                    <EditProfileModal
                                        profile={profile}
                                    />
                                    &nbsp;&nbsp;
                                </td>
                            </tr>
                        ))
                    )};    
                </tbody>
            </Table>
        );
    }
}

export default ProfileList;