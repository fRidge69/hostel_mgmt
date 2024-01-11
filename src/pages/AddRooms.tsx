import Sidebar from "@/components/SideBar";
import TopBar from "@/components/AdminTopBar";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
interface SidebarProps {
  isOpen: boolean;
}
const TestPage: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  //function to handle user button click

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <TopBar onSidebarToggle={handleSidebarToggle} />
      <div className="flex">
        <div
          className={`md:block md:w-1/6 bg-white h-screen shadow-lg ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <Sidebar isOpen={isSidebarOpen} />
        </div>
        <div className="md:block md:w-5/6 bg-slate-200 h-screen w-full ">
          Make changes here
          <div>


          </div>


        </div>
      </div>
    </div>
  );
};

export default TestPage;
