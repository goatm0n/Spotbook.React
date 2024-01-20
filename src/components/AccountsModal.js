import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Accounts from "./Accounts";

class AccountsModal extends Component {
    state = {
        modal: false,
        accounts: false,
        name: "Accounts"
    };

    componentDidMount() {
        if (this.props.accounts) {
            this.setState({accounts: this.props.accounts});
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
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
                    <ModalBody>
                        <Accounts accounts={this.state.accounts}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default AccountsModal;