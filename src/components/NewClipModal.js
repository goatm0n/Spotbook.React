import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewClipForm from "./NewClipForm";


class NewClipModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    loginAlert = () => {
        alert("Login");
    }

    render() {    
        return (
            <Fragment>
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.props.accessToken ? this.toggle : this.loginAlert}
                    style={{ minWidth: "200px" }}
                >
                    Create Clip
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Creating Clip</ModalHeader>
                    <ModalBody>
                        <NewClipForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            spot={this.props.spot}
                            auth={this.props.accessToken}
                        >
                        </NewClipForm>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewClipModal;