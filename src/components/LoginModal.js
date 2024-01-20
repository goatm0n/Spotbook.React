import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import LoginForm from "./LoginForm";
import NewAccountModal from "./NewAccountModal";

class LoginModal extends Component {
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
                    Login
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Logging in</ModalHeader>
                    <ModalBody>
                        <LoginForm
                            toggle={this.toggle}
                            account={this.props.account}
                            onLogin={this.props.onLogin}
                        >
                        </LoginForm>
                        <NewAccountModal create />
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default LoginModal;