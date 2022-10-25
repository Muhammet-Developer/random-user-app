import React from "react";
import mailSvg from "./assets/mail.svg";
//import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
//import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import axios from "axios";
import {useState,useEffect} from "react";
import AddUser from "./components/footer/AddUser";

function App() {
  const [user, setUser] = useState([]);
  const [value, setValue] = useState("");
  const [detail,setDetail] = useState("")
  const [data,setData]=useState([])
  const [res,setRes]=useState(true)
  const users = ()=>{
    const url = "https://randomuser.me/api/";
    axios(url).then((data)=>setUser(data.data.results)).catch(e=> console.log(e))
  }

  useEffect(() => {
  users()
  }, []);

 
const handleAddUserClick =()=>{
  if(data.filter((item)=>item.email===user[0].email).length>0){
    return
  }else{
    setData([...data,user[0]])
  } 
}
const handleNewUser = ()=>{
  users()
  setValue("")
  setDetail("");
}

  return (
    <main>
      <div className="block bcg-orange">
      </div>
      <div className="block">
        <div className="container">
          <img src={user[0]?.picture.medium} alt="random user" className="user-img" />
          {/* <p className="user-title" >My-{user[0]?.name.first +" "+ user[0]?.name.last} -is</p> */}
           <p className="user-title"  >My-{detail} -is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={(e)=> {setValue(user[0]?.name.first +" "+ user[0]?.name.last);setDetail("name")}}>
              <img src={womanSvg} alt="user" id="iconImg" />
            </button>
            <button className="icon" data-label="email" onMouseOver={(e)=> {setValue(user[0]?.email);setDetail("email")}}>
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button className="icon" data-label="age" onMouseOver={(e)=> {setValue(user[0]?.dob.age);setDetail("age")}}>
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button className="icon" data-label="street" onMouseOver={(e)=> {setValue(user[0]?.location.street.name);setDetail("street")}}>
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button className="icon" data-label="phone" onMouseOver={(e)=> {setValue(user[0]?.phone);setDetail("phone")}}>
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button className="icon" data-label="password" onMouseOver={(e)=> {setValue(user[0]?.login.password);setDetail("password")}}>
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={()=> handleNewUser()}>
              new user
            </button>
            <button className="btn" type="button" onClick={()=> handleAddUserClick()}>
              add user
            </button>
          </div>
          <AddUser data={data} setData={setData} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />

      </div>
    </main>
  );
}

export default App;
