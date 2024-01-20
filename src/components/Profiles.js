import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ProfileList from "./ProfileList";
import axios from "axios";
import { PROFILES_API_URL } from "../constants";

class Profiles extends Component {
    state = {
        profiles: []
    };

    componentDidMount() {
        this.resetState();
    }

    getProfiles = () => {
        if (this.props.profiles) {
            this.setState({profiles: this.props.profiles})
        } else {
            axios.get(PROFILES_API_URL + "list/").then(res => this.setState({profiles: res.data}));
        }
        
    }

    resetState = () => {
        this.getProfiles();
    }

    render() {
        return (
            <Container style={{marginTop: "20px"}}>
                <Row>
                    <Col>
                        <ProfileList
                            profiles={this.state.profiles}
                            resetState={this.resetState}
                            auth={this.props.auth}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profiles;