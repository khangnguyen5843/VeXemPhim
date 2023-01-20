import { createSlice ,current} from '@reduxjs/toolkit'

const initialState = {
    danhSachGheDangDat:[
        
    ]
}

const DatVeReducer = createSlice({
  name: 'DatVeReducer',
  initialState,
  reducers: {
    changeGhe:(state,action)=>{
        //Lấy dữ liệu gửi lên
        const gheClick = action.payload;
        // state.danhSachGheDangDat.push(gheClick)
        let index = state.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe === gheClick.soGhe);
        if(index!==-1){
            state.danhSachGheDangDat.splice(index,1);
        }else{
            state.danhSachGheDangDat.push(gheClick);
        }
    },

    huyGhe:(state,action)=>{
        const gheHuy = action.payload;
        // let index = state.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===gheHuy.soGhe);
        // state.danhSachGheDangDat.splice(index,1)
        const danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
        state.danhSachGheDangDat = danhSachGheDangDatUpdate.filter(gheDangDat=>gheDangDat.soGhe!==gheHuy.soGhe);
    }
  }
});

export const {changeGhe,huyGhe} = DatVeReducer.actions

export default DatVeReducer.reducer







