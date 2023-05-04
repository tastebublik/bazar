import logo from './logo.svg';
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import Authors from "./pages/Authors";
import Podcasts from "./pages/Podcasts";
import Auth from "./pages/Auth";
import Podcast from "./components/Podcast";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home></Home>

    </div>
  );
}

export default App;
