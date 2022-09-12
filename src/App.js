import React from "react";
import SignUp from "./components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome";
import Header from "./components/Layout/Header";
import Profile from "./components/Profile/Profile";
import { useState } from "react";

function App() {
  // const [displayName, setDisplayName] = useState('');
  // const [photoUrl, setPhotoUrl] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCEyT2fsRkG4dMvDlT-PAlCUi7vZzqHQ88',{
  //     method:'POST',
  //     body:JSON.stringify({
  //       idToken:localStorage.getItem('idToken')
  //     }),
  //     headers:{
  //       'Content-Type':'applicatio/json'
  //     }
  //   }).then((res) => {
  //     if(res.ok){
  //       return res.json();
  //     }else{
  //       return res.json((data) => {
  //         throw new Error(data.error.message)
  //       })
  //     }
  //   }).then((data) => {
  //     setDisplayName(data.displayName);
  //     setPhotoUrl(data.photoUrl)
  //   }).catch((error) => {
  //     alert(error);
  //   })
  // },[])

  return (
    <>
      <Header login={isLogin} setLogin={setIsLogin} />
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/login" element={<Login setLogin={setIsLogin} />} />
        <Route exact path="/completeprofile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
