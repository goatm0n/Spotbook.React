import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewAccountForm from "./NewAccountForm";


class NewAccountModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;
        var title = "Editing Account";
        var button = <Button onClick={this.toggle}>Edit</Button>;
        if (create) {
            title = "Creating New Account";
            button = (
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "200px" }}
                >
                    Create New
                </Button>
            );
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>
                        <NewAccountForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            account={this.props.account}
                        >
                        </NewAccountForm>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewAccountModal;