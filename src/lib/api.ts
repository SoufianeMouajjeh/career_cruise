import axios from 'axios';

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const RAPID_API_HOST = import.meta.env.VITE_RAPID_API_HOST || 'jsearch.p.rapidapi.com';

interface SearchJobsParams {
  query: string;
  page?: number;
  country?: string;
  datePosted?: string;
}

/**
 * Reusable function to search for jobs
 * Extracts duplicate API call logic into a single location
 */
export const searchJobs = async ({ 
  query, 
  page = 1, 
  country = 'us', 
  datePosted = 'all' 
}: SearchJobsParams) => {
  const response = await axios.request({
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query,
      page: page.toString(),
      num_pages: '1',
      country,
      date_posted: datePosted
    },
    headers: {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': RAPID_API_HOST
    }
  });

  return response.data;
};