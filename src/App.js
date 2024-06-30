import React, { useState, useEffect } from "react";
import styles from "./style";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Dashboard, Subscription, Wallet, Setting } from "./components";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";
import NewPassword from "./components/NewPassword";
import ConfirmPassword from "./components/ConfirmPassword";
import AnalysisBoard from "./components/AnalysisBoard";
import Webinar from "./components/Webinar";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showSidebar, setShowSidebar] = useState(!isSmallScreen);
  const location = useLocation();
  const signUp = sessionStorage.getItem('visitedSignUp');
  const isSignUpPage = location.pathname === "/signup";
  const isResetPage = location.pathname === "/reset";
  const isNewPasswordPage = location.pathname === "/forget";
  const isConfirmPasswordPage = location.pathname === "/set-new-password";

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
    <div className={`bg-gradient overflow-hidden ${styles.boxWidth} ${styles.paddingX} overflow-hidden`}>
      <div className="flex">
        <div className="flex-grow">
          <>
            {!isSignUpPage && !isResetPage && !isNewPasswordPage && !isConfirmPasswordPage && (
              <Navbar activeTab={activeTab} toggleSidebar={toggleSidebar} />
            )}
            {!isSignUpPage && !isResetPage && !isNewPasswordPage && !isConfirmPasswordPage && showSidebar && (
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
              <Route path="/analysis_board" element={<AnalysisBoard />} />
              <Route path="/webinar" element={<Webinar />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
            <Routes>
              <Route
                path="/signup"
                element={<SignUp setIsSignedUp={() => sessionStorage.setItem('visitedSignUp', 'true')} />}
              />
              <Route path="/reset" element={<ForgetPassword />} />
              <Route path="/forget" element={<NewPassword />} />
              <Route path="/set-new-password" element={<ConfirmPassword />} />
            </Routes>
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
