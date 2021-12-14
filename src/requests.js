const API_KEY = '8c02d6c5749f214053125f68abfc4b14';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMoveis: `/movie/top_rated?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMoveis: `/movie/top_rated?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMoveis: `/movie/top_rated?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMoveis: `/movie/top_rated?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/movie/top_rated?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
