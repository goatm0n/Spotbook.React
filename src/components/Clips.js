import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ClipList from "./ClipList";
import axios from "axios";
import { CLIPS_API_URL } from "../constants";

export async function getClips(userId) {
    const url = CLIPS_API_URL + "list-user-id/" + userId;
    const res = await axios.get(url);
    const clips = res.data;
    return { clips }
}

export async function getSpotClips(spotId) {
    const url = CLIPS_API_URL + "list-spot/" + spotId;
    const res = await axios.get(url);
    const clips = res.data;
    return { clips }
}

class Clips extends Component {
    state = {
        clips: []
    };

    componentDidMount() {
        this.resetState();
    }

    getClips = () => {
        if (this.props.clips) {
            this.setState({clips: this.props.clips})
        } else {
            axios.get(CLIPS_API_URL + "list/").then(res => this.setState({clips: res.data}));
        }
    }

    resetState = () => {
        this.getClips();
    }

    render() {
        return (
            <Container style={{marginTop: "20px"}}>
                <Row>
                    <Col>
                        <ClipList
                            clips={this.state.clips}
                            resetState={this.resetState}
                            auth={this.props.auth}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Clips;