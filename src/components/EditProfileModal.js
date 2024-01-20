import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import EditProfileForm from "./EditProfileForm";

class EditProfileModal extends Component {
    state = {
        modal: false
    };

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
                    Edit Profile
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Editing Profile</ModalHeader>
                    <ModalBody>
                        <EditProfileForm 
                            toggle={this.toggle}
                            profile={this.props.profile}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default EditProfileModal;