import logo from './logo.svg';
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import Authors from "./pages/Authors";
import Podcasts from "./pages/Podcasts";
import Auth from "./pages/Auth";
import Podcast from "./pages/Podcast";
import {Route, Routes} from 'react-router-dom'
import Player from "./pages/Podcast";
import MusicLine from "./components/MusicLine";
import checkMusicPlaying from "./logic/ShowMusicLine";


function App() {
    const podcasts = [
        {
            title:'podcast1',
            src:'podcast1.mp3',
            id:0,
            author:'author1',
            img:'/podcast-1.jpg',
            category:'category1',
        },
        {
            title:'podcast2',
            src:'/podcast2.mp3',
            id:1,
            author:'author2',
            img:'/podcast-2.jpg',
            category:'category2',

        },
    ]

    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route index element={<Home musicLine={<MusicLine/>}></Home>}></Route>
                <Route path='authors' element={<Authors musicLine={<MusicLine/>}></Authors>}></Route>
                <Route path='podcasts' element={<Podcasts musicLine={<MusicLine/>} podcasts={podcasts}></Podcasts>}/>
                <Route path="podcasts/podcast" element ={<Podcast></Podcast>}/>
                <Route path='auth' element={<Auth></Auth>}></Route>
            </Routes>


        </div>
    );
}

export default App;
