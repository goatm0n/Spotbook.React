import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import AccountList from "./AccountList";
import axios from "axios";
import { SPOTS_API_URL } from "../constants";
import { PROFILES_API_URL } from "../constants";


class Followers extends Component {
    state = {
        accounts: []
    };

    componentDidMount() {
        this.resetState();
    }

    getFollowers = () => {
        if (this.props.type === "spot") {
            axios.get(SPOTS_API_URL + "followers/" + this.props.id + "/").then(res => this.setState({accounts: res.data}));
        }
        if (this.props.type === "profile") {
            axios.get(PROFILES_API_URL + "followers/" + this.props.id + "/").then(res => this.setState({accounts: res.data}));
        }    

    }

    resetState = () => {
        this.getFollowers();
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

export default Followers;