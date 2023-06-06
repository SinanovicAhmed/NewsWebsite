import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const apiToken = process.env.REACT_APP_API_TOKEN;

const newsApi = axios.create({
	baseURL,
});

export const getNews = async ({ endpoint, options }) => {
	try {
		const response = await newsApi.get(endpoint, {
			params: {
				...options,
				apiKey: apiToken,
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};
