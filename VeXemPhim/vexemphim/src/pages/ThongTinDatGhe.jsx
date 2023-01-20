import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { huyGhe } from "../redux/DatVeReducer";

export default function ThongTinDatGhe(props) {
    let {danhSachGheDangDat} = useSelector(state=>state.DatVeReducer)
    const dispatch = useDispatch();
    
  return (
    <div className="mt-5" style={{ textAlight: "left" }}>
      <div>
        <button className="gheDuocChon textleft"></button>
        <span className="text-light mx-2">Ghế Đã Đặt</span>
        <br />
        <button className="gheDangChon textleft mt-2"></button>
        <span className="text-light mx-2">Ghế Đang Đặt</span>
        <br />
        <button
          className="ghe textleft mt-2"
          style={{ marginLeft: 0 }}
        ></button>
        <span className="text-light mx-2">Ghế Chưa Đặt</span>
      </div>
      <div>
        <div className="mt-5" >
          <table className="table" border='2'>
            <thead>
              <tr className="text-light">
                <th>Số Thứ Tự</th>
                <th>Số Ghế</th>
                <th >Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning"> 
              {danhSachGheDangDat.map((gheDangDat,index)=>{
                const handleHuy = (e)=>{
                  e.preventDefault();
                  const action = huyGhe(gheDangDat)
                  dispatch(action);
                }
                return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{gheDangDat.soGhe}</td>
                        <td>{gheDangDat.gia}</td>
                        <td><button onClick={handleHuy}>Huỷ</button></td>
                       </tr>
                        
              })}
            </tbody>
            <tfoot className="text-warning">
              <tr>
                <td></td>
                <td></td>
                <td>Tổng Tiền</td>
                <td>{danhSachGheDangDat.reduce((tongTien,gheDangDat)=>{
                  return tongTien += gheDangDat.gia;
                },0)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
