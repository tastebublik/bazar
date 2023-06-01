import {useSelector} from "react-redux";
import MusicLine from '../components/MusicLine'

import React from "react";

export default function ShowMusicLine(){
    const { podcasts,
            currentPodcastId,
            nextPodcastId,
            isPlaying,
            isMount,
    }= useSelector(state => state.player)

     console.log(isMount)
    if (isMount) {
        return <MusicLine/>

    }
    return null;
}