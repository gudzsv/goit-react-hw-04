import axios from 'axios';

const ACCESS_KEY = 'q72nAJPDJmd0hslaAYvxmPS4yn0SAT7HrdZetaHoRVI';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers = {
	Authorization: `Client-ID ${ACCESS_KEY}`,
	'Accept-Version': 'v1',
};
axios.defaults.params = {
	per_page: 8,
	orientation: 'landscape',
};

const fetchGalleryPhotos = async (query, page) => {
	const response = await axios.get('/search/photos', {
		params: {
			query,
			page,
		},
	});

	return response.data;
};

export default fetchGalleryPhotos;
