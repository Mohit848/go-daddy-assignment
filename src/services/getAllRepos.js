import axios from "axios";
import { ENDPOINT_GET_ALL_REPOS } from "../constants/constants";
export const getAllRepos = async () => {
	try {
		const res = await axios.get(ENDPOINT_GET_ALL_REPOS);
		return res?.data;
	} catch (e) {}
};
