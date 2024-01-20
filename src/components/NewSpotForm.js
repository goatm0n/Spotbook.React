import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { SPOTS_API_URL } from "../constants";

class NewSpotForm extends Component {
    state = {
        title: "",
        spotType: "Street",
        description: "",
        lat: "",
        lon: "",
        auth: ""
    };

    componentDidMount() {
        if (this.props.auth) {
            const accessString = this.props.auth;
            const auth = "Bearer " + accessString;
            this.setState({auth});
        }
        if (this.props.position) {
            this.setState({lat: this.props.position.lat});
            this.setState({lon: this.props.position.lng});
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    create = e => {
        e.preventDefault();
        const lon = parseFloat(this.state.lon);
        const lat = parseFloat(this.state.lat);
        
        axios({
            method: 'post',
            url: SPOTS_API_URL + "create/",
            headers: {
                Authorization: this.state.auth,
            },
            data: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [lon, lat]
                },
                properties: {
                    title: this.state.title,
                    spotType: "Street",
                    description: this.state.description
                }
            }
        });
    };

    render() {

        return (
            <Form>
                <FormGroup>
                    <Label for="title">Title:</Label>
                    <Input
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.title)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description:</Label>
                    <Input
                        type="text"
                        name="description"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.description)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="spotType">SpotType:</Label>
                    <Input 
                        type="select"
                        name="spotType"
                    >
                        <option value={"Street"}>Street</option>
                        <option value={"D.I.Y"}>D.I.Y</option>
                        <option value={"Skatepark"}>Skatepark</option>
                    </Input>
                </FormGroup>
                <Button onClick={this.create}>Send</Button>
            </Form>
        );
    };

}

export default NewSpotForm;