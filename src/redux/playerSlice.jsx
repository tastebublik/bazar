import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    podcasts: [
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
    ],
    currentPodcastId:null,
    nextPodcastId:null,
    isPlaying:false,
    isMount:false// duty for first render
}

export const playerSlice = createSlice({
    name:'player',
    initialState,
    reducers:{
        setCurrentPodcast: (state,action)=>{
            state.currentPodcastId=action.payload;
        },
        setNextPodcast : (state,action)=>{
            state.nextPodcastId=action.payload;
        },
        setIsPlaying : (state,action)=>{
            state.nextPodcastId=action.payload;
        },
    }
})
export const {setCurrentPodcast,setNextPodcast,setIsPlaying}=playerSlice.actions;

export default playerSlice.reducer;