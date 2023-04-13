import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/Dashoard/DashboardPage";
import ExamsPage from "./components/Dashoard/ExamList";
import ExamPage from "./components/ExamPage";
import { ToastProvider } from "react-toast-notifications";
import ExamReportPage from "./components/ExamRepo";
import AccountInfoPage from "./components/AccInfro";
import ExaminerDashboard from "./components/Examiner Dashboard/Dashboard";
import AddExam from "./components/Examiner Dashboard/ExamPage";
import ExamListPage from "./components/Examiner Dashboard/ExamList";
import MonitoringPage from "./components/Examiner Dashboard/MonitoringPage";
import RegisterPage from "./components/Examiner Dashboard/AddUser";
import UserListPage from "./components/Examiner Dashboard/UserList";
import SubscriptionPage from "./components/Examiner Dashboard/Subscription";
import AnimatedCursor from "./Assets/AnimatedCursor";
import SideNavigation from "./components/System admin/SideNav";
import AdminList from "./components/System admin/AdminList";
import ManageUsers from "./components/System admin/UserList";
import ExamListPageSys from "./components/System admin/ExamHealth";
import ExamDetails from "./components/System admin/ExamDetail";
import ExamHistory from "./components/System admin/ExamHistory";
import DetailExam from "./components/System admin/ExamHistoryDetail";
import SubscriptionPageSys from "./components/System admin/Subscription";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <AnimatedCursor/>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
          <Route exact path="/exdashboard" element={<ExaminerDashboard />} />
          <Route exact path="/examlist" element={<ExamListPage />} />
          <Route exact path="/monitor" element={<MonitoringPage />} />
          <Route exact path="/adduser" element={<RegisterPage />} />
          <Route exact path="/userlist" element={<UserListPage />} />
          <Route exact path="/addexam" element={<AddExam />} />
          <Route exact path="/exam" element={<ExamPage />} />
          <Route path="/report" element={<ExamReportPage />} />
          <Route path="/accountinfo" element={<AccountInfoPage />} />
          <Route path="/exams" element={<ExamsPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/side" element={<SideNavigation />} />
          <Route path="/adminlist" element={<AdminList/>} />
          <Route path="/manageusers" element={<ManageUsers />} />
          <Route path="/examhealth" element={<ExamListPageSys />} />
          <Route path="/examdetail" element={<ExamDetails />} />
          <Route path="/examhistory" element={<ExamHistory />} />
          <Route path="/examhistory/detail" element={<DetailExam />} />
          <Route path="/subscriptionlist" element={<SubscriptionPageSys />} />
        </Routes>
      </div>
    </ToastProvider>
  );
}

export default App;
