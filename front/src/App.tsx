import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import User from "./Pages/User/User";
import "./App.css";
import { useEffect } from "react";
import { fetchUserInformations } from "./store/userSlice";
import PrivateRoute from "./Components/routes/PrivateRoute";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (token) dispatch(fetchUserInformations(token));
  }, [token, dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<User />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
