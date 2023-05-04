import About from "../components/About";
import {Navbar} from "../components/Navbar";
import ExamplePodcasts from "../components/ExamplePodcasts";
import ExampleAuthors from "../components/ExampleAuthors";

export function Home() {
    return (
        <>
            <About></About>
            <ExamplePodcasts></ExamplePodcasts>
            <ExampleAuthors></ExampleAuthors>
        </>
    )
}