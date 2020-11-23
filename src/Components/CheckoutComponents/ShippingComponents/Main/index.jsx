import React,{useEffect,useState} from "react";
import axios from 'axios';
import { NavLink,Redirect } from "react-router-dom";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Collapse from '@material-ui/core/Collapse';

import "./style.css";

const Main = (props) => {

    const [typeAdrress,setTypeAddress]=useState('Nhà riêng / Chung cư')
    const [name,setName]=useState('lê ngọc tuấn');
    const [phoneNumber,setPhoneNumber]=useState('0392363634')
    const [address,setAddress]=useState('325 Lý Tự Trọng,Phuong 6,quan 1,TP.HCM')
    const [showed, setShowed] = useState(false);
    const [Ok,setOk]=useState(false);
  
    const [province, setProvince] = useState('')
    const [provinces,setProvinces]=useState([])

    const [district,setDistrict]=useState('')
    const [districts,setDistricts]=useState([])
    const [districtsId,setDistrictsId]=useState()
    
    const [ward,setWard]=useState('')
    const [wards,setWards]=useState([])
    const [wardsId,setWardsId]=useState()

    const [openProvince, setOpenProvince] = useState(false)
    const [openDistrict,setOpenDistrict]=useState(false)
    const [openWard,setOpenWard]=useState(false)

    useEffect(()=>{
        axios.get('https://vapi.vnappmob.com/api/province')
        .then(res=>{
            const Provinces=res.data.results
            let provinces=[]
            for(let el in Provinces){
                provinces.push({
                    name:Provinces[el].province_name,
                    id:Provinces[el].province_id
                })
            }
            setProvinces(provinces)
        })
        .catch(err=>console.log(err))
    },[])

    useEffect(()=>{
        if(districtsId!==undefined&&districtsId!==null){
    axios.get(`https://vapi.vnappmob.com/api/province/district/${districtsId}`)
        .then(res=>{
            const Districts=res.data.results;
            let districts=[];
            for(let el in Districts){
                districts.push({
                    name:Districts[el].district_name,
                    id:Districts[el].district_id
                })    
            }
            setDistricts(districts)
        })
        }
    
    },[province,districtsId])

    useEffect(()=>{
        if(wardsId!==undefined&&wardsId!==null){
    axios.get(`https://vapi.vnappmob.com/api/province/ward/${wardsId}`)
        .then(res=>{
            const Wards=res.data.results
            let wards=[];
            for(let el in Wards){
                wards.push({
                    name:Wards[el].ward_name,
                    id:Wards[el].ward_id
                })    
            }
            setWards(wards)
        })
        }
    
    },[district,wardsId])

    const handleChangeProvince = (event) => {
        setProvince(event.target.value);
        let District=provinces.filter(el=>el.name===event.target.value);
        let DistrictId=District[0].id;
        setDistrictsId(DistrictId)
      };
    
      const handleCloseProvince = () => {
        setOpenProvince(false);
      };
    
      const handleOpenProvince = () => {
        setOpenProvince(true);
      };

    const handleChangeDistrict = (event) => {
        setDistrict(event.target.value);
        let Ward=districts.filter(el=>el.name===event.target.value);
        let WardId=Ward[0].id;
        setWardsId(WardId)
      };
    
      const handleCloseDistrict = () => {
        setOpenDistrict(false);
      };
    
      const handleOpenDistrict = () => {
        setOpenDistrict(true);
      };

      const handleChangeWard = (event) => {
        setWard(event.target.value);
      };
    
      const handleCloseWard = () => {
        setOpenWard(false);
      };
    
      const handleOpenWard = () => {
        setOpenWard(true);
      };

      const handleChangeTypeAddress=(event)=>{
        setTypeAddress(event.target.value)
      }
      const handleChangeShow = () => {
        setShowed((prev) => !prev);
      };
      const newFormDone=async()=>{
      setShowed((prev) => !prev);
      setOk(true)
      }
      let newForms
     
      if(Ok){
        newForms={
          name:name,
          phoneNumber:phoneNumber,
          fullAddress:address+","+ward+","+district+","+province
        }
      }
      if(!Ok){
        newForms={
          name:'lê ngọc tuấn',
          phoneNumber:'0392363634',
          fullAddress:'325 Lý Tự Trọng,Phuong 6,quan 1,TP.HCM'
        }
      }
      const goToPayment=()=>{
        localStorage.setItem('address',JSON.stringify(newForms))       
        }  
        let main=<Redirect to="/" />
        if(props.isAuth){
          main=(<main style={{ background: "none" }}>
          <div
            className="container Container-itwfbd-0 jFkAwY"
            style={{ width: "1170px" }}
          >
            <div className="AddressList__StyledAddressList-lm7k31-0 jNYLsd">
              <h3 className="title">2. Địa chỉ giao hàng</h3>
              <h5 className="address-list-text">
                Chọn địa chỉ giao hàng có sẵn bên dưới:
              </h5>
              <div className="address-list">
                <div className="styles__StyledAddressItem-y17c35-0 hheNUT">
                  <p className="name">{name}</p>
                  <p
                    className="address"
                  >
                    Địa chỉ: {ward!==null&&district!==null&&province!==null ?( address+","+ward+","+district+","+province):address}
                  </p>
                  <p className="address">Việt Nam</p>
                  <p className="phone">Điện thoại:{phoneNumber}</p>
                  <p className="action">
                    <NavLink to="/payment" onClick={()=>goToPayment()} className="btn saving-address">
                      Giao đến địa chỉ này
                    </NavLink>
                    <button type="button" onClick={handleChangeShow} className="btn edit-address">
                      {" "}
                      Sửa
                    </button>
                  </p>
                  <span className="default">Mặc định</span>
                </div>
              </div>
            </div>
            <p className="ShippingPage__AddNewAddress-sc-4zu5jt-0 gPtlxm">
              Bạn muốn giao hàng đến địa chỉ khác?{" "}
              <span>Thêm địa chỉ giao hàng mới</span>
            </p>
           
               <Collapse in={showed}>
            <div className="styles__StyledAddressForm-y1ursh-1 koCjgj">
              <div className="form-container">
                <div className="styles__FormItem-y1ursh-0 gLBfyC">
                  <label>Họ tên</label>
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Nhập họ tên"
                    maxLength={50}
                    className="Input-sc-17i9bto-0 bYlDgr"
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                  />
                </div>
                <div className="styles__FormItem-y1ursh-0 gLBfyC">
                  <label>Điện thoại di động</label>
                  <input
                    type="text"
                    name="telephone"
                    value={phoneNumber}
                    onChange={(event)=>setPhoneNumber(event.target.value)}
                    className="Input-sc-17i9bto-0 bYlDgr"
                    
                  />
                </div>
                <div className="styles__FormItem-y1ursh-0 gLBfyC">
                  <label>Tỉnh/Thành phố</label>
        <FormControl >
          {(province)?null:<InputLabel id="controlled-open-select-label">Tỉnh/Thành phố</InputLabel>}  
            <Select  className="Input-sc-17i9bto-0 bYlDgr"
              labelId="controlled-open-select-label"
              id="controlled-open-select"
              open={openProvince}
              onClose={handleCloseProvince}
              onOpen={handleOpenProvince}
              value={province}
              onChange={handleChangeProvince}
            >
            {provinces.map(el=>(
                 <MenuItem key={el.id} value={el.name}>{el.name}</MenuItem>
            ))}
            </Select>
        </FormControl>
                </div>
                <div className="styles__FormItem-y1ursh-0 gLBfyC">
                  <label>Quận/Huyện</label>
                <FormControl >
            {(district)?null:<InputLabel id="controlled-open-select-label">Quận/Huyện</InputLabel>}
            <Select className="Input-sc-17i9bto-0 bYlDgr"
              labelId="controlled-open-select-label"
              id="controlled-open-select"
              open={openDistrict}
              onClose={handleCloseDistrict}
              onOpen={handleOpenDistrict}
              value={district}
              onChange={handleChangeDistrict}
            >
            {districts.map(el=>(
                 <MenuItem key={el.id} value={el.name}>{el.name}</MenuItem>
            ))}
            </Select>
        </FormControl>
                 
                </div>
                <div className="styles__FormItem-y1ursh-0 gLBfyC">
                  <label>Phường/Xã</label>
                <FormControl >
           {ward?null:<InputLabel id="controlled-open-select-label">Phường/Xã</InputLabel>} 
            <Select className="Input-sc-17i9bto-0 bYlDgr"
              labelId="controlled-open-select-label"
              id="controlled-open-select"
              open={openWard}
              onClose={handleCloseWard}
              onOpen={handleOpenWard}
              value={ward}
              onChange={handleChangeWard}
            >
            {wards.map(el=>(
                 <MenuItem key={el.id} value={el.name}>{el.name}</MenuItem>
            ))}
            </Select>
        </FormControl>
                </div>
                <div className="styles__FormItem-y1ursh-0 gLBfyC">
                  <label>Địa chỉ</label>
                  <textarea
                  style={{paddingLeft:'0.5rem'}}
                    type="textarea"
                    name="street"
                    placeholder="Ví dụ: 52, đường Trần Hưng Đạo"
                    className="Input__TextArea-sc-17i9bto-1 doFXqy"
                    value={address}
                    onChange={(event)=>setAddress(event.target.value)}
                  />
                </div>
                <div className="styles__FormItem-y1ursh-0 gLBfyC">
                  <label />
                  <span className="hint">
                    Để nhận hàng thuận tiện hơn, bạn vui lòng cho Winkel biết loại địa
                    chỉ.
                  </span>
                </div>
                <div className="styles__FormItem-y1ursh-0 gLBfyC">
                <label>Loaị Địa chỉ</label>
      
                <FormControl component="fieldset" style={{display:'inline-block',backgroundColor:'#f7f7f7'}}>
                      <RadioGroup aria-label="TypeAddress" name="TypeAddress" value={typeAdrress} onChange={handleChangeTypeAddress}>
                        <FormControlLabel value="Nhà riêng / Chung cư" control={<Radio />} label="Nhà riêng / Chung cư" />
                        <FormControlLabel value="Cơ quan / Công ty" control={<Radio />} label="Cơ quan / Công ty" />
                      </RadioGroup>
                    </FormControl>
                </div>
                <div
                  className="styles__FormItem-y1ursh-0 gLBfyC"
                  style={{ marginBottom: "0px" }}
                >
                  <label />
                  <div className="button-group">
                    <button className="cancel" onClick={handleChangeShow}>Huỷ bỏ</button>
                    <button  className="create-update" onClick={()=>newFormDone()}>Cập nhật</button>
                  </div>
                </div>
              </div>
            </div>        
            </Collapse>
          </div>
        </main>)}
  return (
    <React.Fragment>
       {main}
    </React.Fragment>
  );
};
export default Main;