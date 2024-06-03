import React, { useState, useEffect } from "react";
import styles from "./style";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Dashboard, Subscription, Wallet, Setting } from "./components";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showSidebar, setShowSidebar] = useState(!isSmallScreen);
  const location = useLocation();
  const signUp = sessionStorage.getItem('visitedSignUp');

  const isSignUpPage = location.pathname === "/signup";
  const isResetPage = location.pathname === "/reset";

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-gradient overflow-hidden ${styles.boxWidth} ${styles.paddingX} overflow-hidden`}
    >
      <div className="flex">
        <div className="flex-grow">
          <>
            {!isSignUpPage && !isResetPage && (
              <Navbar activeTab={activeTab} toggleSidebar={toggleSidebar} />
            )}
            {!isSignUpPage && !isResetPage && showSidebar && (
              <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                setShowSidebar={setShowSidebar}
              />
            )}
            <Routes>
              <Route
                path="/"
                element={
                  signUp ? <Dashboard /> : <Navigate to="/signup" replace={true} />
                }
              />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
            <Routes>
              <Route
                path="/signup"
                element={<SignUp setIsSignedUp={() => sessionStorage.setItem('visitedSignUp', 'true')} />}
              />
              <Route
                path="/reset"
                element={<ForgetPassword />}
              />
            </Routes>
          </>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;