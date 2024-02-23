import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";

export default function DashBoard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* ------------left------------------------- */}
      <div className="md:w-56">
        {/* side bar  */}
        <DashSideBar />
      </div>

      {/* ------------right---------------------- */}

      {/* profile...... */}
      {tab === "profile" && <DashProfile />}
      {/* posts........ */}
      {tab === "posts" && <DashPosts />}
      {/* users........ */}
      {tab === "users" && <DashUsers />}
    </div>
  );
}
