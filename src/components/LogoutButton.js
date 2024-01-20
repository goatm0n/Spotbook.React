import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";


class LogoutButton extends Component {

    render() {
        return (
            <Fragment>
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.props.onLogout}
                    style={{ minWidth: "200px" }}
                >
                    Logout
                </Button>
            </Fragment>
        )
    }
}

export default LogoutButton;