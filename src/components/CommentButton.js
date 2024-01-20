import { Fragment } from "react";
import { Button } from "reactstrap";


export default function CommentButton(props) {

    let button = <Button></Button>
        if (props.auth === "") {
            button = <Button
                color="secondary"
                className="float-right"
                onClick={function(){alert("login")}}
            >
                Comment
            </Button>
        } else {
            button = (
                <Button
                    color="primary"
                    className="float-right"
                >
                    Comment
                </Button>
            );
        }

    return (
        <Fragment>
            { button }
        </Fragment>
    )
}