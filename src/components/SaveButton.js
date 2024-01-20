import { Fragment } from "react";
import { Button } from "reactstrap";


export default function SaveButton(props) {

    let button = <Button></Button>
        if (props.auth === "") {
            button = <Button
                color="secondary"
                className="float-right"
                onClick={function(){alert("login")}}
            >
                Save
            </Button>
        } else {
            button = (
                <Button
                    color="primary"
                    className="float-right"
                >
                    Save
                </Button>
            );
        }

    return (
        <Fragment>
            { button }
        </Fragment>
    )
}