// src/pages/Home.tsx
import React from "react";
import {
  Card,
  Row,
  Col,
  Statistic,
  Button,
  Space,
  Typography,
  Progress,
} from "antd";
import {
  BookOutlined,
  TrophyOutlined,
  PlayCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { lessons } from "../data/lessons";

const { Title, Paragraph, Text } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const completedLessons = 0;
  const totalLessons = lessons.length;
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <div style={{ maxWidth: "1000px" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "48px",
          paddingTop: "24px",
        }}
      >
        <Title level={1} style={{ fontWeight: 800, color: "#332b26" }}>
          Chào mừng đến với{" "}
          <span style={{ color: "#b05d3a" }}>Khóa học Cờ Tướng</span>
        </Title>
        <Paragraph
          style={{
            fontSize: "18px",
            color: "#6d5d54",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Nâng cao tư duy chiến thuật và rèn luyện kỹ năng của bạn qua từng bài
          học được thiết kế chuyên sâu và dễ hiểu.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]} style={{ marginBottom: "40px" }}>
        <Col xs={24} sm={12}>
          <Card bordered={false} style={{ background: "#ffffff" }}>
            <Statistic
              title="Bài học"
              value={totalLessons}
              prefix={<BookOutlined />}
              suffix="bài"
              valueStyle={{ color: "#b05d3a", fontWeight: 700 }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card bordered={false} style={{ background: "#ffffff" }}>
            <Statistic
              title="Đã hoàn thành"
              value={completedLessons}
              prefix={<TrophyOutlined />}
              suffix={`/ ${totalLessons}`}
              valueStyle={{ color: "#dca73a", fontWeight: 700 }}
            />
          </Card>
        </Col>
      </Row>

      <Card
        title={
          <Title level={4} style={{ margin: 0 }}>
            Tiến độ học tập
          </Title>
        }
        bordered={false}
        style={{ marginBottom: "40px" }}
      >
        <Progress
          percent={Math.round(progress)}
          status={progress === 100 ? "success" : "active"}
          strokeColor={{ "0%": "#dca73a", "100%": "#6b8e23" }}
          trailColor="#f5f0ec"
          strokeWidth={12}
        />
      </Card>

      <Title level={3} style={{ marginBottom: "24px" }}>
        Bắt đầu học ngay
      </Title>
      <Row gutter={[24, 24]}>
        {lessons.slice(0, 3).map((lesson, index) => (
          <Col xs={24} md={8} key={lesson.id}>
            <Card
              hoverable
              bordered={false}
              title={
                <Text strong style={{ fontSize: "16px" }}>
                  Bài {index + 1}: {lesson.title}
                </Text>
              }
              extra={
                <span
                  style={{
                    padding: "4px 10px",
                    background:
                      lesson.level === "beginner" ? "#f4f8ec" : "#fdf6e7",
                    borderRadius: "8px",
                    color: lesson.level === "beginner" ? "#6b8e23" : "#dca73a",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {lesson.level === "beginner" ? "Cơ bản" : "Trung cấp"}
                </span>
              }
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              bodyStyle={{ flex: 1, display: "flex", flexDirection: "column" }}
            >
              <Paragraph
                ellipsis={{ rows: 2 }}
                style={{ color: "#6d5d54", flex: 1 }}
              >
                {lesson.description}
              </Paragraph>
              <Space style={{ marginBottom: "20px" }} wrap>
                {lesson.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#f5f0ec",
                      color: "#5c4e45",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </Space>
              <Button
                type="primary"
                icon={<PlayCircleOutlined />}
                size="large"
                style={{ width: "100%", fontWeight: 600 }}
                onClick={() => navigate(`/lessons/${lesson.id}`)}
              >
                Học ngay
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Button
          size="large"
          icon={<RightOutlined />}
          onClick={() => navigate("/lessons")}
          style={{
            borderRadius: "24px",
            padding: "0 32px",
            fontWeight: 600,
            color: "#b05d3a",
            borderColor: "#b05d3a",
          }}
        >
          Xem tất cả bài học
        </Button>
      </div>
    </div>
  );
};

export default Home;
