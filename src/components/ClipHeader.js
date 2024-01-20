import UserBadge from "./UserBadge"
import { Col } from "reactstrap"

export default function ClipHeader(props) {

    return (
        <>
            <Col>
                <UserBadge profile_picture={ props.profile_picture }/>
            </Col>
            <Col>
                <h3 className="username">{ props.username }</h3>
            </Col>
        </>
    )
}