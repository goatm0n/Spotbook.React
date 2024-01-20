import { CLIPS_API_URL } from "../constants";
import axios from "axios";
import './Clip.css';
import { Col, Container, Row } from "reactstrap";
import LikeToggleButton from "./LikeToggleButton";
//import CommentButton from "./CommentButton";
//import SaveButton from "./SaveButton";
import LikesModal from "./LikesModal";
import CommentSection from "./CommentSection";
import ClipTextContent from "./ClipTextContent";
import ClipImage from './ClipImage'
import ClipHeader from "./ClipHeader";
import { Component } from "react";
import ShareModal from "./ShareModal";

export async function getClip(id) {
    const url = CLIPS_API_URL + "detail/" + id;
    const res =  await axios.get(url);
    const clip = res.data;
    return { clip };
}

export default class Clip extends Component {

    state = {
        clip: {
            likes: []
        },
    }

    getClip = () => {
        if (this.props.clip) {
            this.setState({clip: this.props.clip})
        } else {
            axios.get(CLIPS_API_URL + "detail/" + this.props.clipId)
                .then((res) => this.setState({clip: res.data}));
        }
        
    }

    resetState = () => {
        this.getClip();
    }

    componentDidMount() {
        this.resetState();
    }

    render() {
        const clip = this.state.clip;

        return (
            <article className="clip">
                <Container>
                    <Row>
                        <ClipHeader user={clip.user} username={clip.username} profile_picture={clip.profile_picture}/>
                    </Row>
                    <Row>
                        <Col>
                            <ClipImage src={clip.image}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ClipTextContent textContent={clip.textContent} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <LikeToggleButton type="clip" id={clip.id} auth={this.props.auth} />
                        </Col>
                        {/* <Col>
                            <CommentButton auth={this.props.auth} />
                        </Col> */}
                        <Col>
                            <ShareModal auth={this.props.auth} clipId={clip.id}/>
                        </Col>
                        {/* <Col>
                            <SaveButton auth={this.props.auth} />
                        </Col> */}
                    </Row>
                    <Row>
                        <Col>
                            <LikesModal name='Likes' id={clip.id} type='clip' count={clip.likes.length} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CommentSection />
                        </Col>
                    </Row>
                </Container>
                
            </article>
        )
    }

    
}