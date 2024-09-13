import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import StudentLogin from "./components/StudentLogin";
import StudentDashboard from "./components/StudentDashboard";
import EventManagement from "./components/EventManagement";
import ChangePassword from "./components/ChangePassword";
import EventList from "./components/EventList";
import Home from "./components/Home";
import UpdateEvent from "./components/UpdateEvent";
import RegisterForEvent from "./components/RegisterForEvent";
import EventTable from "./components/EventTable";
import "./index.css";
import UserRegistration from "./components/UserRegistration";
import AddNewEvent from "./components/AddNewEvent";
import MyEvent from "./components/MyEvent";
import UserTable from "./components/UserTable";
import AdminUserAdd from "./components/AdminUserAdd";
import NotificationBell from "./components/NotificationBell";
import UserDetailsModal from "./components/UserDetailsModal";
import ManageAccount from "./components/ManageAccount";
import AdminUserUpdate from "./components/AdminUserUpdate";
import EventDetailModal from "./components/EventDetailModal";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="//AdminDashboard" element={<AdminDashboard />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/EventManagement" element={<EventManagement />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/EventList" element={<EventList />} />
        <Route path="/UpdateEvent/:id" element={<UpdateEvent />} />
        <Route path="/RegisterForEvent" element={<RegisterForEvent />} />
        <Route path="/EventTable" element={<EventTable />} />
        <Route path="/UserRegistration" element={<UserRegistration />} />
        <Route path="/AddNewEvent" element={<AddNewEvent />} />
        <Route path="/MyEvent" element={<MyEvent />} />
        <Route path="/UserTable" element={<UserTable />} />
        <Route path="/AdminUserAdd" element={<AdminUserAdd />} />
        <Route path="/NotificationBell" element={<NotificationBell />} />
        <Route path="/UserDetailsModal" element={<UserDetailsModal />} />
        <Route path="/ManageAccount" element={<ManageAccount />} />
        <Route path="/AdminUserUpdate" element={<AdminUserUpdate />} />
        <Route path="/EventDetailModal" element={<EventDetailModal />} />
      </Routes>
    </Router>
  );
}

export default App;
