import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";
import SignInPage from "./pages/SignInPage";
import DashboardLayout from "./Layouts.js/DashboardLayout";
import CoursesPage from "./pages/CoursesPage";

const App = () => {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {

  // }, []);



  return (
    // <Routes>
    //   <Route path="/" element={} />
      

    // </Routes>

    <SignInPage />
    // <CoursesPage />
  );
}
export default App;
