import { Component } from "react";
import Clip from "./Clip";
import axios from "axios";
import { CLIPS_API_URL } from "../constants";


export default class ClipFeed extends Component {

    state = {
        clip_id_list: [],
    }
    
    getClipIdList = () => {
        if (this.props.spotId) {
            axios.get(CLIPS_API_URL + "list-spot/" + this.props.spotId)
            .then(res => this.setState({clip_id_list: res.data.clip_id_list}))
            .catch((err) => console.log(err));    
        } else {
            this.setState({clip_id_list: this.props.clip_id_list});
        }
        
    }

    resetState = () => {
        this.getClipIdList();
    }

    componentDidMount() {
        this.resetState();
    }

    render() {
        const clip_id_list = this.state.clip_id_list;
        const auth = this.props.auth;

        return (
            <div className="clip-feed">
                <ul>
                    {
                        clip_id_list.map(function(clipId, index) {
                            return <Clip clipId={clipId} key={index} auth={auth}/>
                        })
                    }
                </ul>
            </div>
        )    
    }
    
}