import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { ACCOUNTS_API_URL } from "../constants";

class NewAccountForm extends React.Component {
    state = {
        email: "",
        username: "",
        password: "",
    };

    componentDidMount() {
        if (this.props.account) {
            const {email, username, password} = this.props.account;
            this.setState({email, username, password});
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createAccount = e => {
        e.preventDefault();
        axios.post(ACCOUNTS_API_URL + "create/", this.state).then(() => {
                if (this.props.resetState) {
                    this.props.resetState();
                }
                this.props.toggle();
            });
    };

    editAccount = e => {
        e.preventDefault();
        axios.put(ACCOUNTS_API_URL + "create/", this.state).then(() => {
            if (this.props.resetState) {
                this.props.resetState();
            }
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render () {
        return (
            <Form onSubmit={this.props.account ? this.editAccount : this.createAccount}>
                <FormGroup>
                    <Label for="username">Username:</Label>
                    <Input
                        type="text"
                        name="username"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.username)}
                    />
                </FormGroup>
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
                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewAccountForm;