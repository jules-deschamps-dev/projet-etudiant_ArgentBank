import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const PrivateRoute = () => {
  // ne pas appeler redux ici mais récupérer le token directement depuis le localstorage

  // rediriger vers Home si déjà connecter
  const token = useSelector((state: RootState) => state.auth.token);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
