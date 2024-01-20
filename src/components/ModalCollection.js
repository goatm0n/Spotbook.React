import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import LoginModal from './LoginModal';
import NewClipModal from './NewClipModal';
import NewSpotModal from './NewSpotModal'; 
import EditProfileModal from './EditProfileModal';
import ProfilesModal from './ProfilesModal';
import AccountsModal from './AccountsModal';
import ClipsModal from './ClipsModal';
import SpotsModal from './SpotsModal'; 


class ModalCollection extends Component {

    state = {
        name: "Modals"
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
                    {this.state.name}
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
                    <ModalBody>
                        <div className='ModalCollection'>
                            <LoginModal onLogin={this.props.onLogin} />
                            <NewClipModal accessToken={this.props.auth} /> 
                            <NewSpotModal auth={this.props.auth} />
                            <EditProfileModal />
                            <ProfilesModal auth={this.props.auth} />
                            <AccountsModal />
                            <ClipsModal auth={this.props.auth} />
                            <SpotsModal auth={this.props.auth} /> 
                        </div>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default ModalCollection;