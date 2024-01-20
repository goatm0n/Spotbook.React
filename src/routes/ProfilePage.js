import { useLoaderData } from "react-router-dom";
import Profile, { getProfile } from "../components/Profile";
import { getAccount } from "../components/Account";
import { getClips } from "../components/Clips";
import { useOutletContext } from "react-router-dom";

export async function loader({ params }) {
    const profile = await getProfile(params.id);
    const account = await getAccount(params.id);
    const clips = await getClips(params.id);

    return { profile, account, clips };
}

export default function ProfilePage(props) {

    const data = useLoaderData();
    const profile = data.profile.profile;
    const account = data.account.account;
    const clips = data.clips.clips.clip_id_list;
    const context = useOutletContext();
    const auth = context.auth;
    const userId = context.userId;

    return (
        <Profile profile={ profile } account={ account } clips={ clips } auth={auth} userId={userId}/>
    )
}