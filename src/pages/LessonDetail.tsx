// src/pages/LessonDetail.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Space,
  Tag,
  Divider,
  Card,
  Progress,
  message,
  Radio,
  Alert,
} from "antd";
import {
  LeftOutlined,
  RightOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { getLessonById, lessons } from "../data/lessons";
import MarkdownRenderer from "../components/LessonContent/MarkdownRenderer";

const { Title, Text } = Typography;

const LessonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // States
  const [completed, setCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [showErrors, setShowErrors] = useState(false);

  const lesson = id ? getLessonById(id) : undefined;

  // Reset local state and read completed status from localStorage when navigating to a new lesson
  useEffect(() => {
    if (lesson) {
      const storedCompleted = JSON.parse(
        localStorage.getItem("completedLessons") || "[]",
      );
      if (storedCompleted.includes(lesson.id)) {
        setCompleted(true);
      } else {
        setCompleted(false);
      }
    } else {
      setCompleted(false);
    }

    setSelectedAnswers({});
    setShowErrors(false);
  }, [id, lesson]);

  if (!lesson) {
    return (
      <Card
        bordered={false}
        style={{ borderRadius: "12px", textAlign: "center", padding: "40px" }}
      >
        <Title level={3} style={{ color: "#4a423d" }}>
          Bài học không tồn tại
        </Title>
        <Button
          size="large"
          onClick={() => navigate("/lessons")}
          style={{ borderRadius: "8px", marginTop: "16px" }}
        >
          Quay lại danh sách bài học
        </Button>
      </Card>
    );
  }

  const currentIndex = lessons.findIndex((l) => l.id === id);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const handleComplete = () => {
    // Validate Quiz if questions exist
    if (lesson.questions && lesson.questions.length > 0) {
      let allCorrect = true;
      for (let i = 0; i < lesson.questions.length; i++) {
        if (selectedAnswers[i] !== lesson.questions[i].correctAnswer) {
          allCorrect = false;
          break;
        }
      }

      if (
        !allCorrect ||
        Object.keys(selectedAnswers).length < lesson.questions.length
      ) {
        setShowErrors(true);
        message.error(
          "Vui lòng trả lời đúng tất cả các câu hỏi để hoàn thành bài học!",
        );
        return;
      }
    }

    // Success flow
    setCompleted(true);

    // Save the completed lesson ID to localStorage
    const storedCompleted = JSON.parse(
      localStorage.getItem("completedLessons") || "[]",
    );
    if (!storedCompleted.includes(lesson.id)) {
      storedCompleted.push(lesson.id);
      localStorage.setItem("completedLessons", JSON.stringify(storedCompleted));
    }

    message.success({
      content: "Chúc mừng! Bạn đã hoàn thành bài học và mở khóa bài tiếp theo!",
      style: {
        marginTop: "10vh",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      },
    });
  };

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      beginner: "#6b8e23", // Olive green
      intermediate: "#dca73a", // Warm gold
      advanced: "#c05a5a", // Muted brick red
    };
    return colors[level] || "#b05d3a";
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", paddingBottom: "64px" }}>
      <Space style={{ marginBottom: "24px" }}>
        <Button
          type="text"
          icon={<LeftOutlined />}
          onClick={() => navigate("/lessons")}
          style={{ color: "#6d5d54", fontWeight: 600 }}
        >
          Quay lại danh sách
        </Button>
      </Space>

      {/* Header Card */}
      <Card
        bordered={false}
        style={{
          marginBottom: "24px",
          background: "#ffffff",
          borderRadius: "12px",
        }}
      >
        <Title
          level={1}
          style={{ color: "#332b26", fontWeight: 800, marginTop: 0 }}
        >
          {lesson.title}
        </Title>

        <Space style={{ marginBottom: "20px" }} wrap>
          <Tag
            color={getLevelColor(lesson.level)}
            style={{
              borderRadius: "6px",
              padding: "4px 12px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
            }}
          >
            {lesson.level === "beginner"
              ? "Cơ bản"
              : lesson.level === "intermediate"
                ? "Trung cấp"
                : "Nâng cao"}
          </Tag>
          <Text style={{ color: "#6d5d54", fontWeight: 500, fontSize: "15px" }}>
            <ClockCircleOutlined style={{ marginRight: 4 }} /> {lesson.duration}
          </Text>
          <Text style={{ color: "#6d5d54", fontWeight: 500, fontSize: "15px" }}>
            <FileTextOutlined style={{ marginRight: 4 }} /> Bài {lesson.order}
          </Text>
        </Space>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {lesson.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "#f5f0ec",
                color: "#5c4e45",
                padding: "4px 12px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>

      {/* Markdown Content Card */}
      <Card
        bordered={false}
        style={{ marginBottom: "24px", padding: "12px", borderRadius: "12px" }}
      >
        <MarkdownRenderer content={lesson.content} />
      </Card>

      {/* Quiz Section */}
      {lesson.questions && lesson.questions.length > 0 && (
        <Card
          bordered={false}
          style={{ marginBottom: "24px", borderRadius: "12px" }}
        >
          <Title level={3} style={{ marginTop: 0, color: "#332b26" }}>
            Kiểm tra kiến thức
          </Title>
          {!completed && (
            <Alert
              message="Bạn cần trả lời đúng tất cả các câu hỏi dưới đây để mở khóa bài tiếp theo."
              type="info"
              showIcon
              style={{ marginBottom: 24, borderRadius: "8px" }}
            />
          )}

          {lesson.questions.map((q, index) => {
            const isCorrect = selectedAnswers[index] === q.correctAnswer;
            const hasError = showErrors && !isCorrect;

            return (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  padding: "20px",
                  background: hasError ? "#fff2f0" : "#fafafa",
                  borderRadius: "8px",
                  border: hasError ? "1px solid #ffccc7" : "1px solid #f0f0f0",
                }}
              >
                <Text
                  strong
                  style={{
                    fontSize: "16px",
                    display: "block",
                    marginBottom: "16px",
                    color: "#332b26",
                  }}
                >
                  Câu {index + 1}: {q.question}
                </Text>
                <Radio.Group
                  onChange={(e) => {
                    setSelectedAnswers((prev) => ({
                      ...prev,
                      [index]: e.target.value,
                    }));
                    setShowErrors(false); // Hide errors once user tries again
                  }}
                  value={selectedAnswers[index]}
                  disabled={completed}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {q.options.map((opt) => (
                    <Radio key={opt} value={opt}>
                      <span style={{ fontSize: "15px", color: "#5c4e45" }}>
                        {opt}
                      </span>
                    </Radio>
                  ))}
                </Radio.Group>

                {/* Feedback Messages */}
                {showErrors && isCorrect && (
                  <Text
                    type="success"
                    style={{ display: "block", marginTop: 12, fontWeight: 500 }}
                  >
                    <CheckCircleOutlined /> Chính xác
                  </Text>
                )}
                {showErrors && !isCorrect && selectedAnswers[index] && (
                  <Text
                    type="danger"
                    style={{ display: "block", marginTop: 12, fontWeight: 500 }}
                  >
                    <CloseCircleOutlined /> Sai rồi, vui lòng chọn lại đáp án
                  </Text>
                )}
              </div>
            );
          })}
        </Card>
      )}

      {/* Completion Banner */}
      {completed && (
        <Card
          bordered={false}
          style={{
            marginBottom: "24px",
            background: "#f4f8ec",
            borderRadius: "12px",
          }}
        >
          <Space>
            <CheckCircleOutlined
              style={{ color: "#6b8e23", fontSize: "22px" }}
            />
            <Text strong style={{ color: "#4d6619", fontSize: "16px" }}>
              Tuyệt vời! Bạn đã hoàn thành bài học này.
            </Text>
          </Space>
        </Card>
      )}

      <Divider style={{ borderColor: "#f0e9e4" }} />

      {/* Navigation & Actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          {prevLesson && (
            <Button
              size="large"
              icon={<LeftOutlined />}
              onClick={() => navigate(`/lessons/${prevLesson.id}`)}
              style={{
                borderRadius: "8px",
                color: "#5c4e45",
                borderColor: "#eaddd5",
              }}
            >
              Bài trước
            </Button>
          )}
        </div>

        <Space>
          {!completed ? (
            <Button
              type="primary"
              size="large"
              icon={<CheckCircleOutlined />}
              onClick={handleComplete}
              style={{
                borderRadius: "8px",
                fontWeight: 600,
                background: "#b05d3a",
              }}
            >
              Nộp bài & Đánh dấu hoàn thành
            </Button>
          ) : (
            <div>
              {nextLesson && (
                <Button
                  size="large"
                  disabled={!completed} // Lock the button if not completed
                  onClick={() => navigate(`/lessons/${nextLesson.id}`)}
                  style={{
                    borderRadius: "8px",
                    color: completed ? "#5c4e45" : undefined,
                    borderColor: completed ? "#eaddd5" : undefined,
                  }}
                >
                  Bài sau <RightOutlined />
                </Button>
              )}
            </div>
          )}
        </Space>
      </div>

      {/* Progress Bar */}
      <Progress
        percent={Math.round(((currentIndex + 1) / lessons.length) * 100)}
        style={{ marginTop: "32px" }}
        strokeColor={{ "0%": "#dca73a", "100%": "#6b8e23" }}
        trailColor="#f5f0ec"
        strokeWidth={10}
        format={() => (
          <span
            style={{ color: "#6d5d54", fontWeight: 600 }}
          >{`${currentIndex + 1} / ${lessons.length} bài`}</span>
        )}
      />
    </div>
  );
};

export default LessonDetail;
