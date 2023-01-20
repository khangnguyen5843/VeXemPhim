import {configureStore} from '@reduxjs/toolkit';
import DatVeReducer from './DatVeReducer';




export const store= configureStore({
    reducer:{
        DatVeReducer:DatVeReducer
    }
})