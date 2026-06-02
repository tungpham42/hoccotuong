// src/pages/Exercises.tsx
import React, { useState } from "react";
import { List, Card, Space, Select, Typography, Button, Rate } from "antd";
import { FormOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { exercises } from "../data/exercises";
import { Exercise } from "../types";

const { Title, Text, Paragraph } = Typography;

const Exercises: React.FC = () => {
  const navigate = useNavigate();
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<number | null>(null);

  const filteredExercises = exercises.filter((exercise) => {
    const matchesType = typeFilter === "all" || exercise.type === typeFilter;
    const matchesDifficulty =
      !difficultyFilter || exercise.difficulty === difficultyFilter;
    return matchesType && matchesDifficulty;
  });

  const getTypeStyles = (type: Exercise["type"]) => {
    const styles = {
      puzzle: { color: "#896e96", bg: "#f3eef5", label: "Câu đố" },
      checkmate: { color: "#c05a5a", bg: "#f9eeee", label: "Chiếu hết" },
      strategy: { color: "#dca73a", bg: "#fdf6e7", label: "Chiến lược" },
      endgame: { color: "#6a9c9c", bg: "#eff5f5", label: "Tàn cuộc" },
    };
    return styles[type];
  };

  return (
    <div>
      <Title
        level={2}
        style={{ color: "#332b26", fontWeight: 800, marginBottom: "32px" }}
      >
        <FormOutlined style={{ marginRight: "12px", color: "#6b8e23" }} />
        Bài tập thực hành
      </Title>

      <Space wrap style={{ marginBottom: "32px" }}>
        <Select
          defaultValue="all"
          size="large"
          style={{ width: 200 }}
          onChange={(value) => setTypeFilter(value)}
          options={[
            { value: "all", label: "Tất cả loại" },
            { value: "puzzle", label: "Câu đố" },
            { value: "checkmate", label: "Chiếu hết" },
            { value: "strategy", label: "Chiến lược" },
            { value: "endgame", label: "Tàn cuộc" },
          ]}
        />
        <Select
          placeholder="Độ khó"
          size="large"
          style={{ width: 160 }}
          allowClear
          onChange={(value) => setDifficultyFilter(value)}
          options={[
            { value: 1, label: "⭐ Rất dễ" },
            { value: 2, label: "⭐⭐ Dễ" },
            { value: 3, label: "⭐⭐⭐ Trung bình" },
            { value: 4, label: "⭐⭐⭐⭐ Khó" },
            { value: 5, label: "⭐⭐⭐⭐⭐ Rất khó" },
          ]}
        />
      </Space>

      <List
        grid={{ gutter: 24, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
        dataSource={filteredExercises}
        renderItem={(exercise) => {
          const typeStyle = getTypeStyles(exercise.type);
          return (
            <List.Item>
              <Card
                hoverable
                bordered={false}
                style={{
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
                    {exercise.title}
                  </Text>
                </div>

                <Space
                  direction="vertical"
                  style={{ width: "100%", flex: 1, marginBottom: "20px" }}
                >
                  <Paragraph style={{ color: "#6d5d54", margin: 0 }}>
                    {exercise.description}
                  </Paragraph>

                  <Space style={{ marginTop: "8px" }}>
                    <span
                      style={{
                        background: typeStyle.bg,
                        color: typeStyle.color,
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontWeight: 600,
                      }}
                    >
                      {typeStyle.label}
                    </span>
                  </Space>

                  <Rate
                    disabled
                    defaultValue={exercise.difficulty}
                    count={5}
                    style={{
                      fontSize: "14px",
                      color: "#dca73a",
                      marginTop: "8px",
                    }}
                  />
                </Space>

                <Button
                  type="primary"
                  icon={<PlayCircleOutlined />}
                  size="large"
                  onClick={() => navigate(`/exercises/${exercise.id}`)}
                  style={{
                    width: "100%",
                    fontWeight: 600,
                    borderRadius: "8px",
                    background: "#6b8e23",
                    borderColor: "#6b8e23",
                  }}
                >
                  Làm bài
                </Button>
              </Card>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default Exercises;
