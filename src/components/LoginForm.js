import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL, PROFILES_API_URL } from "../constants";

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    login = e => {
        e.preventDefault();
        const url = PROFILES_API_URL + "get-user-id-from-email/" + this.state.email;
        axios.get(url).then((res) => {
            const userId = res.data.userId;
            axios.post(API_URL + "api/users/token/", this.state).then((authToken) => {  
                this.props.toggle();
                this.props.onLogin(authToken.data, userId);
            });    
        });
    };

    render () {
        return (
            <Form >
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input
                        type="text"
                        name="email"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.email)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password:</Label>
                    <Input
                        type="text"
                        name="password"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.password)}
                    />
                </FormGroup>
                <Button onClick={this.login}>Send</Button>
            </Form>
        );
    }
}

export default LoginForm;