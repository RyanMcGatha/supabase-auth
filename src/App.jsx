import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import ProtectedRoute from "./ProtectedRoute";

const Home = () => (
  <div>
    <h2>Home</h2>
    <h3>You are currently signed in </h3>
    <SignOut />
  </div>
);

const App = () => (
  <Router>
    <AuthProvider>
      <div className="container">
        <h1>Supabase Auth Demo</h1>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </AuthProvider>
  </Router>
);

export default App;
