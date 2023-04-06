import React from "react";
import EditReferee from "./EditReferee";
import EditReferrer from "./EditReferrer";

const EditProfileCard = ({token, data,setData, type, signup, setSignUp }) => {
  let profile = null;


  // console.log("editProfile");

  if (type.toLowerCase() === "referee") {
    profile = <EditReferee token={token} data={data} setData={setData} heading="Edit Profile" buttonLabel="Send" setSignUp={setSignUp} signup={signup}/>;
  } else if (type.toLowerCase() === "referrer") {
    profile = <EditReferrer data={data} setData={setData} heading="Edit Profile" buttonLabel="Send" setSignUp={setSignUp} signup={signup}/>;
  }

  return <>{profile}</>;
};

export default EditProfileCard;
