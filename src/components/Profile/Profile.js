import React, { useRef } from "react";
import "./Profile.css";

const Profile = () => {
  const fullNameRef = useRef();
  const profileUrlRef = useRef();

  const tokenId = localStorage.getItem("idToken");
  console.log(tokenId);

  const profileUpdateHandler = (e) => {
    e.preventDefault();

    const enteredFullName = fullNameRef.current.value;
    const eneteredProfileUrl = profileUrlRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCEyT2fsRkG4dMvDlT-PAlCUi7vZzqHQ88",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: tokenId,
          displayName: enteredFullName,
          photoUrl: eneteredProfileUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        alert("Profile Updated");
        return res.json();
      } else {
        return res.json((data) => {
          console.log(data, "----error-data");
          alert(data.error.message);
        });
      }
    });
  };
  return (
    <div className="profile">
      <form className="form" onSubmit={profileUpdateHandler}>
        <h2>Contact Details</h2>
        <div>
          <label>FullName</label>
          <input type="text" id="fullname" required ref={fullNameRef} />
        </div>
        <div>
          <label>Profile Photo URL</label>
          <input type="text" id="profileURL" required ref={profileUrlRef} />
        </div>
        <div>
          <button type="submit" className="btn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;