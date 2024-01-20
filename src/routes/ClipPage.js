import { useLoaderData } from "react-router-dom";
import Clip, { getClip } from "../components/Clip";
import { useOutletContext } from "react-router-dom";



export async function loader({ params }) {
    const clip = await getClip(params.id);
    return { clip };
}

export default function ClipPage(props) {

    const data = useLoaderData();
    const clip = data.clip.clip;

    const auth = useOutletContext();

    return (
        <Clip clip={ clip } auth={ auth.auth }/>
    )
}