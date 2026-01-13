import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'developer',
    page: '1',
    num_pages: '1',
    country: 'us',
    date_posted: 'all'
  },
  headers: {
    'x-rapidapi-key': process.env.RAPID_API_KEY,
    'x-rapidapi-host': process.env.RAPID_API_HOST
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}