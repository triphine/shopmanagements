import { Navigate, Outlet } from "react-router-dom";
import DashLayout from "../components/Dashlayout";

const DashRoutes = () => {
  let auth = { token: true };

  return auth.token ? (
    <DashLayout>
      <Outlet />
    </DashLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default DashRoutes;