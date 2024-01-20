import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { CLIPS_API_URL } from "../constants";

class NewClipForm extends Component {
    state = {
        textContent: "",
        spot: "",
        auth: "",
        image: null,
    };

    componentDidMount() {
        if (this.props.spot) {
            const spot = this.props.spot;
            this.setState({spot});
        }
        if (this.props.auth) {
            const accessString = this.props.auth;
            const auth = "Bearer " + accessString;
            this.setState({auth})
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleImageChange = e => {
        this.setState({image: e.target.files[0]});
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    create = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: CLIPS_API_URL + "create/",
            headers: {
                Authorization: this.state.auth,
                'Content-Type': 'multipart/form-data',
            },
            data: {
                spot: this.state.spot,
                textContent: this.state.textContent,
                image: this.state.image,
            }
        }).then((res) => {this.props.toggle()}).catch((err) => {console.log(err)});
    };

    render () {

        return (
            <Form>
                <FormGroup>
                    <Label for="textContent">TextContent:</Label>
                    <Input
                        type="text"
                        name="textContent"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.textContent)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image</Label>
                    <Input
                        type="file"
                        name="image"
                        onChange={this.handleImageChange}
                        accept="image/png, image/jpeg"
                    />
                </FormGroup>
                <Button onClick={this.create}>Send</Button>
            </Form>
        );
    }
}

export default NewClipForm;