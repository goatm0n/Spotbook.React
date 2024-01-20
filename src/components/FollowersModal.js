import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Followers from "./Followers";

class FollowersModal extends Component {
    state = {
        modal: false,
        name: "Followers",
        id: "",
        type: "",
    };

    componentDidMount() {
        if (this.props.name) {
            this.setState({name: this.props.name})
        }
        if (this.props.id) {
            this.setState({id: this.props.id});
        }
        if (this.props.type) {
            this.setState({type: this.props.type});
        }

    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        let buttonText = this.state.name;
        if (this.props.count) {
            buttonText = this.props.count;
        }

        return (
            <Fragment>
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "100px" }}
                >
                    {buttonText}
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
                    <ModalBody>
                        <Followers 
                            id={this.state.id} 
                            type={this.state.type}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default FollowersModal;