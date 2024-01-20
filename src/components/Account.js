import axios from "axios";
import { ACCOUNTS_API_URL } from "../constants";

export async function getAccount(id) {
    const url = ACCOUNTS_API_URL + "detail/" + id;
    let res = await axios.get(url);
    let account = res.data;
    return { account };
}