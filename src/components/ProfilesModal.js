import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Profiles from "./Profiles";

class ProfilesModal extends Component {
    state = {
        modal: false,
        profiles: false,
        name: "Profiles"
    };

    componentDidMount() {
        if (this.props.profiles) {
            this.setState({profiles: this.props.profiles});
        }
        if (this.props.name) {
            this.setState({name: this.props.name})
        }
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        return (
            <Fragment>
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "200px" }}
                >
                    {this.state.name}
                </Button>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
                    <ModalBody>
                        <Profiles profiles={this.state.profiles} auth={this.props.auth} />
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default ProfilesModal;