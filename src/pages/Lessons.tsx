// src/pages/Lessons.tsx
import React, { useState } from "react";
import { List, Card, Space, Input, Select, Typography, Button } from "antd";
import {
  SearchOutlined,
  BookOutlined,
  PlayCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { lessons } from "../data/lessons";
import { Lesson } from "../types";

const { Title, Text, Paragraph } = Typography;
const { Search } = Input;

const Lessons: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === "all" || lesson.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  const getLevelStyles = (level: Lesson["level"]) => {
    const styles = {
      beginner: { color: "#6b8e23", bg: "#f4f8ec", label: "Cơ bản" },
      intermediate: { color: "#dca73a", bg: "#fdf6e7", label: "Trung cấp" },
      advanced: { color: "#c05a5a", bg: "#f9eeee", label: "Nâng cao" },
    };
    return styles[level];
  };

  return (
    <div>
      <Title
        level={2}
        style={{ color: "#332b26", fontWeight: 800, marginBottom: "32px" }}
      >
        <BookOutlined style={{ marginRight: "12px", color: "#b05d3a" }} />
        Danh sách bài học
      </Title>

      <Space
        direction="vertical"
        style={{ width: "100%", marginBottom: "32px" }}
      >
        <Space wrap>
          <Search
            placeholder="Tìm kiếm bài học..."
            allowClear
            size="large"
            style={{ width: 300 }}
            onChange={(e) => setSearchTerm(e.target.value)}
            prefix={<SearchOutlined style={{ color: "#b05d3a" }} />}
          />
          <Select
            defaultValue="all"
            size="large"
            style={{ width: 160 }}
            onChange={(value) => setLevelFilter(value)}
            options={[
              { value: "all", label: "Tất cả cấp độ" },
              { value: "beginner", label: "Cơ bản" },
              { value: "intermediate", label: "Trung cấp" },
              { value: "advanced", label: "Nâng cao" },
            ]}
          />
        </Space>
      </Space>

      <List
        grid={{
          gutter: 24,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={filteredLessons}
        renderItem={(lesson, index) => {
          const levelStyle = getLevelStyles(lesson.level);
          return (
            <List.Item
              style={{
                display: "flex",
                height: "100%",
              }}
            >
              <Card
                bordered={false}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  background: "#ffffff",
                }}
                bodyStyle={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <div style={{ marginBottom: "16px" }}>
                  <Text strong style={{ fontSize: "16px", color: "#332b26" }}>
                    Bài {index + 1}: {lesson.title}
                  </Text>
                </div>

                <Paragraph
                  style={{ color: "#6d5d54", flex: 1, marginBottom: "20px" }}
                >
                  {lesson.description}
                </Paragraph>

                <div style={{ marginTop: "auto" }}>
                  <Space
                    direction="vertical"
                    style={{ width: "100%", marginBottom: "20px" }}
                  >
                    <Space>
                      <span
                        style={{
                          background: levelStyle.bg,
                          color: levelStyle.color,
                          padding: "4px 10px",
                          borderRadius: "6px",
                          fontSize: "13px",
                          fontWeight: 600,
                        }}
                      >
                        {levelStyle.label}
                      </span>
                      <Text
                        style={{
                          color: "#6d5d54",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        <ClockCircleOutlined style={{ marginRight: 4 }} />{" "}
                        {lesson.duration}
                      </Text>
                    </Space>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        marginTop: "8px",
                      }}
                    >
                      {lesson.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            background: "#f5f0ec",
                            color: "#5c4e45",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            fontSize: "12px",
                            fontWeight: 500,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Space>

                  <Button
                    type="primary"
                    icon={<PlayCircleOutlined />}
                    size="large"
                    onClick={() => navigate(`/lessons/${lesson.id}`)}
                    style={{
                      width: "100%",
                      fontWeight: 600,
                      borderRadius: "8px",
                      background: "#b05d3a",
                    }}
                  >
                    Học ngay
                  </Button>
                </div>
              </Card>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default Lessons;
