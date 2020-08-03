import axios from "axios";

export const getUser = async () => {
	try {
		const data = await axios("https://randomuser.me/api/");
		return data;
	} catch (error) {
		return error;
	}
};
