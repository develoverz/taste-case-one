import React from "react";

const Profile = ({ loggedInVendor, handleProfileCross }) => {
  return (
    <div>
      <h3>{loggedInVendor.shopname}</h3>
      <h3>{loggedInVendor.name}</h3>
      <input type="button" value="x" onClick={handleProfileCross} />
    </div>
  );
};

export default Profile;
