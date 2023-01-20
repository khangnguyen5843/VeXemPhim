import React from "react";
import '../assets/VeXemPhim.css'
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGhe from '../Data/danhSachGhe.json'
import HangGhe from "./HangGhe";


export default function VeXemPhim() {
    const renderHangGhe = ()=>{
        return danhSachGhe.map((hangGhe,index)=>{
            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }
  return (
    <div
        className="bookingMovie"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: 'url("./img/VeXemPhim/bgmovie.jpg")',
        backgroundSize: "100%",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
                <h1 className="text-light text-center">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                    <div className="text-light mt-5 text-center" style={{fontSize:'25px'}}>Màn Hình</div>
                <div className="mt-1" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <div className="screen"></div>
                </div>
                {renderHangGhe()}

            </div>
            <div className="col-4" style={{textAlight:'left'}}>
            <div className="text-light mt-2 text-center" style={{fontSize:'30px'}}>DANH SÁCH GHẾ BẠN CHỌN</div>
            <ThongTinDatGhe/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
