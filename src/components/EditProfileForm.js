import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { PROFILES_API_URL } from "../constants";

function extractFilename(path) {
    if (path.substr(0, 12) === "C:\\fakepath\\")
      return path.substr(12); // modern browser
    var x;
    x = path.lastIndexOf('/');
    if (x >= 0) // Unix-based path
      return path.substr(x+1);
    x = path.lastIndexOf('\\');
    if (x >= 0) // Windows-based path
      return path.substr(x+1);
    return path; // just the filename
}

class EditProfileForm extends React.Component {
    state = {
        user: "",
        full_name: "",
        bio: "",
        profile_picture: null,
    };

    componentDidMount() {
        if (this.props.profile) {
            const {user, full_name, bio, profile_picture} = this.props.profile;
            if (!full_name) {
                this.setState({full_name: ""})
            } else {
                this.setState({full_name})
            }
            if (!bio) {
                this.setState({bio: ""})
            } else {
                this.setState({bio})
            }
            this.setState({user, profile_picture});
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    handleProfilePictureChange = e => {
        this.setState({profile_picture: e.target.files[0]});
    };

    editProfile = e => {
        e.preventDefault();
        const url = PROFILES_API_URL + 'update/' + this.state.user + '/';
        let form_data = new FormData();
        form_data.append('user', this.state.user);
        form_data.append('full_name', this.state.full_name);
        form_data.append('bio', this.state.bio);
        if (this.state.profile_picture.name !== undefined) {
            const file_name = extractFilename(this.state.profile_picture.name);
            form_data.append('profile_picture', this.state.profile_picture, file_name);
        }
        

        axios.post(url, form_data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            this.props.toggle();
        }).catch(err => console.log(err))
    };

    render() {
        return (
            <Form onSubmit={this.editProfile}>
                <FormGroup>
                    <Label for="full_name">Full name:</Label>
                    <Input
                        type="text"
                        name="full_name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.full_name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="bio">Bio:</Label>
                    <Input
                        type="text"
                        name="bio"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.bio)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="profile_picture">Profile picture</Label>
                    <Input
                        type="file"
                        name="profile_picture"
                        onChange={this.handleProfilePictureChange}
                        value={this.defaultIfEmpty("")}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
            
        );
    }
}

export default EditProfileForm;