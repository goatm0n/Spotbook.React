import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import AccountList from "./AccountList";
import axios from "axios";
import { SPOTS_API_URL } from "../constants";
import { CLIPS_API_URL } from "../constants";


class Likes extends Component {
    state = {
        accounts: [],
    };

    componentDidMount() { 
       this.resetState();
    }

    getLikes = () => {
        if (this.props.type === "spot") {
            axios.get(SPOTS_API_URL + "likes/" + this.props.id + "/").then(res => this.setState({accounts: res.data}));
        }
        if (this.props.type === "clip") {
            axios.get(CLIPS_API_URL + "likes/" + this.props.id + "/").then(res => this.setState({accounts: res.data}));
        }    

    }

    resetState = () => {
        this.getLikes();
    }

    render() {
        return (
            <Container style={{marginTop: "20px"}}>
                <Row>
                    <Col>
                        <AccountList
                            accounts={this.state.accounts}
                            resetState={this.resetState}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Likes;