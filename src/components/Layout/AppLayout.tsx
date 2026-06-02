// src/components/Layout/AppLayout.tsx
import React from "react";
import { Layout, Menu, Typography, Space } from "antd";
import { HomeOutlined, BookOutlined, TrophyOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Header, Content } = Layout; // Đã bỏ Sider
const { Title } = Typography;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: "/", icon: <HomeOutlined />, label: "Trang chủ" },
    { key: "/lessons", icon: <BookOutlined />, label: "Bài học" },
  ];

  return (
    <Layout style={{ minHeight: "100vh", background: "#fdfbf7" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#ffffff",
          padding: "0 32px",
          borderBottom: "1px solid #f0e9e4",
          boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        {/* Vùng Logo & Tiêu đề */}
        <Space align="center" style={{ marginRight: "48px" }}>
          <div
            style={{
              background: "#fff4ec",
              padding: "8px",
              borderRadius: "10px",
              display: "flex",
              marginRight: "12px",
            }}
          >
            <TrophyOutlined style={{ fontSize: "22px", color: "#b05d3a" }} />
          </div>
          <Title
            level={3}
            style={{ color: "#332b26", margin: 0, fontWeight: 700 }}
          >
            Khóa học Cờ Tướng
          </Title>
        </Space>

        {/* Menu Điều hướng nằm ngang */}
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          style={{
            flex: 1,
            minWidth: 0,
            borderBottom: "none", // Bỏ viền dưới mặc định của menu ngang
            background: "transparent",
            fontSize: "15px",
            fontWeight: 600,
          }}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Header>

      {/* Vùng Nội dung (Đã bỏ Sider) */}
      <Layout
        style={{
          background: "transparent",
          maxWidth: "1000px", // Thu gọn một chút để trải nghiệm đọc bài tốt hơn
          margin: "0 auto",
          width: "100%",
          padding: "32px 24px 48px",
        }}
      >
        <Content
          style={{
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
