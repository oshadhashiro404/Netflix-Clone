import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Row from './Components/Row';
import requests from './requests';

function App() {
	return (
		<div className="app">
			<Navbar />

			<Banner />

			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rating" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMoveis} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMoveis} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMoveis} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMoveis} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
