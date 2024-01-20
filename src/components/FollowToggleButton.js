import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { SPOTS_API_URL } from "../constants";
import { PROFILES_API_URL } from "../constants";

class FollowToggleButton extends Component {

    state = {
        follows: false
    }

    componentDidUpdate(prevProps) {
        if (prevProps.auth !== this.props.auth) {
            this.doesUserFollow();
        }
    }

    doesUserFollow() {
        let accessToken = this.props.auth;
        let auth = "Bearer " + accessToken;
        let url = "";
        let id = this.props.id;
        if (this.props.type === "spot") {
            url = SPOTS_API_URL + "does-user-follow/" + id + "/";
        }
        if (this.props.type === "profile") {
            url = PROFILES_API_URL + "does-user-follow/" + id + "/";
        }
        axios({
            method: 'get',
            url: url,
            headers: {
                Authorization: auth
            }
        }).then((res) => {
            this.setState({follows: res.data.data});
        });
    }
    
    handleFollow = e => {
        e.preventDefault();
        let accessToken = this.props.auth;
        let auth = "Bearer " + accessToken;
        let url = "";
        let id = this.props.id;
        if (this.props.type === "spot") {
            url = SPOTS_API_URL + "follow-toggle/" + id + "/"; 
        }
        if (this.props.type === "profile") {
            url = PROFILES_API_URL + "follow-toggle/" + id + "/"; 
        }
        axios({
            method: 'post',
            url: url,
            headers: {
                Authorization: auth
            }
        });
        let newFollowsState = !this.state.follows;
        this.setState({follows: newFollowsState});
    }

    render() {
        let button = <Button></Button>
        if (this.props.auth === "") {
            button = <Button
                color="secondary"
                className="float-right"
                onClick={function(){alert("login")}}
            >
                Follow
            </Button>
        } else {
            let text = "Follow"
            if (this.state.follows === true) {
                text = "Unfollow";
            }
            button = (
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.handleFollow}
                >
                    {text}
                </Button>
            );
        }
        return (
            <Fragment>
                {button}
            </Fragment>
        );
    }
}

export default FollowToggleButton;