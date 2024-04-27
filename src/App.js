import React from "react";
import styles from "./style";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Subscription, Webinar } from './components'

function App() {
  return (
    <div className={`bg-gradient overflow-hidden ${styles.boxWidth} ${styles.paddingX}`}>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/webinar" element={<Webinar />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
