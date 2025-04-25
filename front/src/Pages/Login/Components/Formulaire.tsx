// Formulaire.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/authSlice.ts";
import { RootState } from "../../../store/store";
import { UserCredentials } from "../../../Models/User";
import "../Login.css";

const Formulaire: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Récupération de l'état Redux
  const { loading, error, token } = useSelector(
    (state: RootState) => state.auth
  );

  const Submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const credentials: UserCredentials = { email, password, remember };
    dispatch(loginUser(credentials) as any);
  };

  // Redirection si l'utilisateur est connecté
  if (token) {
    navigate("/");
  }

  return (
    <form onSubmit={Submit}>
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />

        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className="sign-in-button" type="submit" disabled={loading}>
        {loading ? "Connexion..." : "Sign In"}
      </button>

      {error && (
        <div id="error-message-div" className="error-message">
          {error}
        </div>
      )}
    </form>
  );
};

export default Formulaire;
