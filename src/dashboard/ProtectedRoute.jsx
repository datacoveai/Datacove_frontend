import { Navigate, Outlet, useLocation } from "react-router-dom"; // Adjust the import based on your project structure
import useAppStore from "../store/useAppStore";

const ProtectedRoute = () => {
  const { user } = useAppStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const correctPath = `/dashboard/${user.name}`;
  if (location.pathname !== correctPath) {
    return <Navigate to={correctPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
