import * as React from "react";
import { createRoot } from 'react-dom/client';
import MyProfile from '../components/MyProfile';
import Policies from '../components/Policies';
import Achievements from '../components/Achievements';
import Announcement from '../components/Announcement';
import Organization from '../components/Organization';
import EmployeeInfo from '../components/EmployeeInfo';
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import "../../styles/index.css";

const root = createRoot(document.getElementById("content-area") as HTMLElement);
root.render(
  <>
    
    <div className="xyz-management">
      <HashRouter>
        <div className="xyz-management-content" style={{ width: '100%' }}>
          <div className="row">
            <div className="col-md-2 sidebar">
            <div className="title">NexGen7 Software</div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    My Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/organization">
                    Organization
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/policies">
                    Policies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/achievements">
                    Achievements
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/announcement">
                    Announcement
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-10 main-content">
              <Routes>
                <Route path="/" element={<MyProfile />} />
                <Route path="/organization" element={<Organization />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/announcement" element={<Announcement />} />
                <Route path="/employeeinfo" element={<EmployeeInfo />} />
              </Routes>
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  </>
);
