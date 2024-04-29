import React, {useState} from "react";
import styles from "./style";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Subscription, Wallet, Setting } from './components'

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className={`bg-gradient overflow-hidden ${styles.boxWidth} ${styles.paddingX}`}>
      <Navbar activeTab={activeTab}/>
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
