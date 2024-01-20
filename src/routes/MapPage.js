import { useOutletContext } from "react-router-dom";
import SpotMap from "../components/SpotMap";

export default function MapPage(props) {
    const context = useOutletContext();
    const auth = context.auth;

    return (
        <SpotMap auth={auth} />
    )
}