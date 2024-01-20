import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Spots from './Spots';

class SpotsModal extends Component {
    state = {
        modal: false,
        spots: false,
        name: "Spots"
    };

    componentDidMount() {
        if (this.props.spots) {
            this.setState({spots: this.props.spots});
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
                        <Spots spots={this.state.spots} auth={this.props.auth} />
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default SpotsModal;