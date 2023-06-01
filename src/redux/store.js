import {configureStore} from '@reduxjs/toolkit';
import player from './playerSlice'

export const store =configureStore({
    reducer:{
        player,
    },
})