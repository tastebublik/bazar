import React from 'react';
import Podcast from "../components/Podcast";

const Podcasts = () => {
    return (
        <section className="flex flex-row flex-wrap mx-auto">
            <Podcast></Podcast>
            <Podcast></Podcast>
            <Podcast></Podcast>
        </section>

    );
};

export default Podcasts;