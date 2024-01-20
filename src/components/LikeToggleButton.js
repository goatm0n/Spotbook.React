import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { CLIPS_API_URL } from "../constants";
import { SPOTS_API_URL } from "../constants";

class LikeToggleButton extends Component {

    state = {
        liked: false
    }

    componentDidUpdate(prevProps) {
        if (prevProps.auth !== this.props.auth) {
            this.doesUserLike();
        }
    }

    doesUserLike() {
        let accessToken = this.props.auth;
        let auth = "Bearer " + accessToken;
        let url = "";
        let id = this.props.id;
        if (this.props.type === "spot") {
            url = SPOTS_API_URL + "does-user-like/" + id + "/";
        }
        if (this.props.type === "clip") {
            url = CLIPS_API_URL + "does-user-like/" + id + "/";
        }
        axios({
            method: 'get',
            url: url,
            headers: {
                Authorization: auth
            }
        }).then((res) => {
            this.setState({liked: res.data.data});
        });
    }
    
    handleLike = e => {
        e.preventDefault();
        let accessToken = this.props.auth;
        let auth = "Bearer " + accessToken;
        let url = "";
        let id = this.props.id;
        if (this.props.type === "spot") {
            url = SPOTS_API_URL + "like-toggle/" + id + "/"; 
        }
        if (this.props.type === "clip") {
            url = CLIPS_API_URL + "like-toggle/" + id + "/"; 
        }
        axios({
            method: 'post',
            url: url,
            headers: {
                Authorization: auth
            }
        }).then((res) => {
            //pass
            //console.log(res.status);
        }).catch((err) => {console.log(err)});
        
        let newLikedState = !this.state.liked;
        this.setState({liked: newLikedState});
    }

    render() {
        let button = <Button></Button>
        if (this.props.auth === "") {
            button = <Button
                color="secondary"
                className="float-right"
                onClick={function(){alert("login")}}
            >
                Like
            </Button>
        } else {
            let text = "Like"
            if (this.state.liked === true) {
                text = "Unlike";
            }
            button = (
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.handleLike}
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

export default LikeToggleButton;