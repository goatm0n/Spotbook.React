import { Component, Fragment } from "react";
import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import { ROOT_URL } from "../constants";


export default class ShareModal extends Component {

    state = {
        modal: false,
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    }

    render() {
        let button = <Button></Button>
        if (this.props.auth === "") {
            button = <Button
                color="secondary"
                className="float-right"
                onClick={function(){alert("login")}}
            >
                Share
            </Button>
        } else {
            button = (
                <>
                    <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    >
                        Share
                    </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>url</ModalHeader>
                        <ModalBody>
                            <Input type="text" value={ROOT_URL + "clip/" + this.props.clipId}/>
                        </ModalBody>
                    </Modal>
                </>
                
            );
        }

    return (
        <Fragment>
            <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    >
                        Share
                    </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>url</ModalHeader>
                        <ModalBody>
                            <Input type="text" value={ROOT_URL + "clip/" + this.props.clipId}/>
                        </ModalBody>
                    </Modal>
        </Fragment>
    )
    }
    
}