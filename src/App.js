//import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CommitteeDashBoard from "./Components/DashBoard/ProjectCommitteeDashboard/CommitteeDashBoard";
import StudentDash from "./Components/DashBoard/StudentDashboard/StudentDash";
import TeacherDashboard from "./Components/DashBoard/SuperVisorDashboard/TeacherDashboard";
import OptionWindow from "./Components/DashBoard/SuperVisorDashboard/OptionWindow";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";
import Protected from "./Components/Protected";
import Login from "./Components/Login";
function App() {
  const [userDetails, setUserDetails] = useState({});
  const [studentList, setStudentList] = useState([]);
  return (
    <>
      <LoginContext.Provider
        value={{ userDetails, setUserDetails, studentList, setStudentList }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/StudentDash"
            element={<Protected Component={StudentDash} />}
          />
          <Route
            path="/TeacherDashboard"
            element={<Protected Component={TeacherDashboard} />}
          />
          <Route
            path="/CommitteeDashBoard"
            element={<Protected Component={CommitteeDashBoard} />}
          />
          <Route
            path="/Selection"
            element={<Protected Component={OptionWindow} />}
          />
          <Route
            path="/Selection/TeacherDashboard"
            element={<Protected Component={TeacherDashboard} />}
          />
          <Route
            path="/Selection/CommitteeDashBoard"
            element={<Protected Component={CommitteeDashBoard} />}
          />
        </Routes>
      </LoginContext.Provider>
    </>
  );
}

export default App;
