import React, { Fragment } from "react";
import danhSachGhe from "../Data/danhSachGhe.json";
import { useSelector,useDispatch } from "react-redux";
import DatVeReducer from "../redux/DatVeReducer";
import { changeGhe } from "../redux/DatVeReducer";

export default function HangGhe(props) {

  const {danhSachGheDangDat} = useSelector(state=>state.DatVeReducer);
  const dispatch = useDispatch();
  const renderGhe = () => {
    return props.hangGhe.danhSachGhe.map((ghe, index) => {
      // Xét trường hợp ghế đã đặt và cài đặt Css cho nó
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      // Xét trạng thái vé đang đặt và cài đặt Css
      let cssGheDangDat = '';
      let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe ===ghe.soGhe);
      if(indexGheDangDat!== -1){
        cssGheDangDat = 'gheDangChon';
      }

      const handleSubmit = (e)=>{
        e.preventDefault();
        const action = changeGhe(ghe);
        dispatch(action);
      }
      return (
        <button key={index}
          onClick={handleSubmit}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  const renderSoHang =()=>{
    return props.hangGhe.danhSachGhe.map((hang)=>{
        return <button className="rowNumber">
            {hang.soGhe}
        </button>
    })
        
    
  }
  const renderHangGhe = () => {
    if (props.soHangGhe === 0) {
      return <div style={{marginLeft:'20px'}}>
      {props.hangGhe.hang} {renderSoHang()}
    </div>
    } else {
      return (
        <div>
          {props.hangGhe.hang} {renderGhe()}
        </div>
      );
    }
  };
  return (
    <div className="text-light mt-2 ml-4 text-left">{renderHangGhe()}</div>
  );
}
