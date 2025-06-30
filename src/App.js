import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./Components/Dashboard";
import Layout from "./Components/PageLayout";
import AdminPanel from "./Components/AdminPanel";
import UserData from "./Components/UserData";
import ApprovalStatus from "./Components/ApprovalStatus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="admin" element={<AdminPanel/>} />
          <Route path="userdata" element={<UserData/>} />
          <Route path="approvals" element={<ApprovalStatus/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
