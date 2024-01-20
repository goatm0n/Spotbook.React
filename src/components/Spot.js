import { Container, Row, Col } from "reactstrap"
import ClipFeed from "./ClipFeed"
import { SPOTS_API_URL } from "../constants";
import axios from "axios";
import FollowToggleButton from "./FollowToggleButton";
import LikeToggleButton from "./LikeToggleButton";
import NewClipModal from "./NewClipModal";

export async function getSpot(spotId) {
    const url = SPOTS_API_URL + "detail/" + spotId;
    const res =  await axios.get(url);
    const spot = res.data;
    return { spot };
}

export default function Spot(props) {

    const spot = props.spot;
    const auth = props.auth;

    return (
        
        <article className="spot">
            <Container>
                <Row>       
                    <Col>
                        <Row>
                            <h3>{ spot.properties.title }</h3>
                        </Row>
                        <Row>
                            <p>{ spot.properties.spotType }</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <FollowToggleButton auth={auth} type="spot" id={spot.id}/>
                        </Row>
                        <Row>
                            <LikeToggleButton auth={auth} type="spot" id={spot.id} />
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <p>{ spot.properties.description }</p>
                    </Col>
                    <Col>
                        <NewClipModal accessToken={auth} spot={spot.id}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ClipFeed clip_id_list={props.clip_id_list} auth={props.auth} />
                    </Col>
                </Row>
            </Container>
        </article>
    )
}