import logo from './logo.svg';
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import Authors from "./pages/Authors";
import Podcasts from "./pages/Podcasts";
import Auth from "./pages/Auth";
import Podcast from "./components/Podcast";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/authors' element={<Authors></Authors>}></Route>
            <Route path='/podcasts' element={<Podcasts></Podcasts>}></Route>
            <Route path='/auth' element={<Auth></Auth>}></Route>
        </Routes>

    </div>
  );
}

export default App;
