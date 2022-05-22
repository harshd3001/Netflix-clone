import './App.css';
import Row from './sections/row/Row'
import  url from './sections/request'
import Banner from './sections/banner/Banner';
import Nav from './sections/navbar/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchurl={url.fetchNetflixOriginals} />
      <Row title='Top Rated' fetchurl={url.fetchTopRated} />
      <Row title='Trensding Now' fetchurl={url.fetchTrending} />
      <Row title='Action Movies' fetchurl={url.fetchActionMovies} />
      <Row title='Comedy Movies' fetchurl={url.fetchComedyMovies} />
      <Row title='Horror Movies' fetchurl={url.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchurl={url.fetchRomanceMovies} />
      <Row title='Documentaries' fetchurl={url.fetchDocumantaries} />
    </div>
  );
}

export default App;
