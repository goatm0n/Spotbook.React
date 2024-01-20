import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Likes from "./Likes";

class LikesModal extends Component {
    state = {
        modal: false,
        name: "Likes",
        type: "",
    };

    componentDidMount() {
        if (this.props.name) {
            this.setState({name: this.props.name})
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
            buttonText += ": " + this.props.count;
        } 

        const id = this.props.id;

        return (
            <Fragment>
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                >
                    {buttonText}
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
                    <ModalBody>
                        <Likes 
                            id={id} 
                            type={this.state.type}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default LikesModal;