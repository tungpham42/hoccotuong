// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import LessonDetail from "./pages/LessonDetail";
import "./App.css";

const App: React.FC = () => {
  return (
    <ConfigProvider
      locale={viVN}
      theme={{
        token: {
          colorPrimary: "#b05d3a", // Warm terracotta
          colorSuccess: "#6b8e23", // Olive green
          colorWarning: "#dca73a", // Warm gold
          colorError: "#c05a5a", // Muted brick red
          colorTextBase: "#332b26", // Warm dark gray
          borderRadius: 12,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          colorBgBase: "#ffffff",
          colorBgContainer: "#ffffff",
        },
        components: {
          Card: {
            headerBg: "transparent",
          },
          Menu: {
            itemBg: "transparent",
            itemSelectedBg: "#f8f4f0",
            itemSelectedColor: "#b05d3a",
          },
        },
      }}
    >
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:id" element={<LessonDetail />} />
          </Routes>
        </AppLayout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
