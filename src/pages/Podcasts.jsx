import React from 'react';
import PodcastsItem from "../components/PodcastsItem";
import ShowMusicLine from "../logic/ShowMusicLine";
import {useSelector} from 'react-redux'


const Podcasts = () => {

    let podcasts =useSelector(state => state.player.podcasts)

    return (
        <>
        <section className="flex flex-row flex-wrap mx-auto">
            {
                podcasts.map(item=>{
                    return<PodcastsItem img={item.img} author={item.author} src={item.src} title={item.title} id={item.id} category={item.category}></PodcastsItem>
                })
            }

        </section>
        <ShowMusicLine/>
    </>
    );
};

export default Podcasts;