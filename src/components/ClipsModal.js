import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Clips from './Clips';

class ClipsModal extends Component {
    state = {
        modal: false,
        clips: false,
        name: "Clips"
    };

    componentDidMount() {
        if (this.props.clips) {
            this.setState({clips: this.props.clips});
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
                        <Clips clips={this.state.clips} auth={this.props.auth}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default ClipsModal;