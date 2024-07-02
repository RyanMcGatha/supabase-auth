import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      alert(error.message);
    } else {
      navigate("/signin");
    }
  };

  return (
    <button onClick={handleSignOut} className="button">
      Sign Out
    </button>
  );
};

export default SignOut;
