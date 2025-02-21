import { Navigate, Outlet, useLocation } from "react-router-dom"; // Adjust the import based on your project structure
import useAppStore from "../store/useAppStore";

const ProtectedRoute = () => {
  const { user } = useAppStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Allow ALL subroutes under `/dashboard/${user.name}` instead of forcing redirection
  const baseDashboardPath = `/dashboard/${user.name}`;
  if (!location.pathname.startsWith(baseDashboardPath)) {
    return <Navigate to={baseDashboardPath} replace />;
  }

  return <Outlet />; // Allows rendering of child routes (history, documents, etc.)
};

export default ProtectedRoute;
