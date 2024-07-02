import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { error } = await signUp(email, password);
    if (error) {
      alert(error.message);
    } else {
      alert("You have successfully signed up!");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSignUp} className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/signin" className="link">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
