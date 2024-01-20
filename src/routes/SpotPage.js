import { useLoaderData, useOutletContext } from "react-router-dom";
import { getSpotClips } from "../components/Clips"
import Spot, { getSpot } from "../components/Spot";


export async function loader({ params }) {
    const clips = await getSpotClips(params.id);
    const spot = await getSpot(params.id);
    return { clips, spot };
}

export default function SpotPage(props) {

    const data = useLoaderData();
    const clip_id_list = data.clips.clips.clip_id_list;
    const context = useOutletContext();
    const auth = context.auth;
    const spot = data.spot.spot;

    return (
        <Spot clip_id_list={clip_id_list} auth={auth} spot={spot} />
    )
}