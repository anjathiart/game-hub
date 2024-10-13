import axios from 'axios';

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

export default axios.create({
	params: {
		key: 'edf311049df844cd8b8d148d37f70547',
	},
	baseURL: 'https://api.rawg.io/api',
});
