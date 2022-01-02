import { actions,originals,comedy,horror,romance } from './urls';
import './App.css';
import NavBar from './components/navBar/navBar';
import Banner from './components/banner/banner';
import RowPost from './components/rowPost/rowPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" url={originals}/>
      <RowPost title="Actions" url={actions} isSmall />
      <RowPost title="Comedy" url={comedy} isSmall />
      <RowPost title="Horror" url={horror} isSmall />
      <RowPost title="Romance" url={romance} isSmall />
    </div>
  );
}

export default App;
