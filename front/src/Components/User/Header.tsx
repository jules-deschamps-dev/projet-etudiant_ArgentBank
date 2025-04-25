import React, { useEffect, useState } from "react";

import { UserInformations } from "../../Models/User";
import { useSelector } from "react-redux";
import { updateUserInformations } from "../../store/userSlice";
import { RootState, useAppDispatch } from "../../store/store";

const Header: React.FC<{ user: UserInformations | null }> = ({ user }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);

  
  /**
   * Met à jour le profil utilisateur
   */
  const handleSave = () => {
    if (user && token) {
      const updatedUser = { ...user, firstName, lastName };
      dispatch(updateUserInformations({ token, user: updatedUser }));
      setEditing(false);
    }
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {editing ? (
          <>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </>
        ) : (
          user && user.firstName + " " + user.lastName + " !"
        )}
      </h1>

      
      {editing ? (
        <>
          <button
            className="edit-button cancel"
            onClick={() => setEditing(!editing)}
          >
            Cancel
          </button>
          <button className="edit-button save" onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <button className="edit-button" onClick={() => setEditing(!editing)}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default Header;
