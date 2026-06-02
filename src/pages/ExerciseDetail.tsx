// src/pages/ExerciseDetail.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Space,
  Card,
  message,
  Alert,
  Rate,
  Tag,
  Divider,
} from "antd";
import {
  LeftOutlined,
  BulbOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { exercises } from "../data/exercises";

const { Title, Text, Paragraph } = Typography;

const ExerciseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showHint, setShowHint] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hintIndex, setHintIndex] = useState(0);

  const exercise = exercises.find((ex) => ex.id === id);

  if (!exercise) {
    return (
      <Card>
        <Title level={3}>Bài tập không tồn tại</Title>
        <Button onClick={() => navigate("/exercises")}>
          Quay lại danh sách bài tập
        </Button>
      </Card>
    );
  }

  const handleCheckAnswer = () => {
    // Simple check - in real app, this would be more sophisticated
    const isAnswerCorrect = exercise.solution.some(
      (sol) => sol.toLowerCase() === userAnswer.toLowerCase().trim(),
    );
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      message.success("Chính xác! Bạn đã tìm ra đáp án!");
    } else {
      message.error("Chưa chính xác. Hãy thử lại!");
    }
  };

  const handleShowHint = () => {
    if (hintIndex < exercise.hints.length - 1) {
      setHintIndex(hintIndex + 1);
    }
    setShowHint(true);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <Space style={{ marginBottom: "24px" }}>
        <Button icon={<LeftOutlined />} onClick={() => navigate("/exercises")}>
          Quay lại
        </Button>
      </Space>

      <Card style={{ marginBottom: "24px" }}>
        <Title level={2}>{exercise.title}</Title>
        <Space style={{ marginBottom: "16px" }}>
          <Tag
            color={
              exercise.type === "checkmate"
                ? "#f5222d"
                : exercise.type === "strategy"
                  ? "#fa8c16"
                  : exercise.type === "puzzle"
                    ? "#722ed1"
                    : "#13c2c2"
            }
          >
            {exercise.type === "checkmate"
              ? "Chiếu hết"
              : exercise.type === "strategy"
                ? "Chiến lược"
                : exercise.type === "puzzle"
                  ? "Câu đố"
                  : "Tàn cuộc"}
          </Tag>
          <Rate disabled defaultValue={exercise.difficulty} count={5} />
        </Space>
        <Paragraph>{exercise.description}</Paragraph>
      </Card>

      {/* Chessboard placeholder - would use Chessgroundx here */}
      <Card style={{ marginBottom: "24px" }}>
        <div
          style={{
            background: "#f0f2f5",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <Text type="secondary">
            Chessboard Component - FEN: {exercise.fen}
          </Text>
        </div>
      </Card>

      <Card style={{ marginBottom: "24px" }}>
        <Title level={4}>Đáp án của bạn</Title>
        <Space direction="vertical" style={{ width: "100%" }}>
          <input
            type="text"
            placeholder="Nhập nước đi của bạn (VD: e2e4)"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "1px solid #d9d9d9",
              borderRadius: "6px",
              marginBottom: "12px",
            }}
          />
          <Space>
            <Button
              type="primary"
              icon={<CheckCircleOutlined />}
              onClick={handleCheckAnswer}
            >
              Kiểm tra
            </Button>
            <Button icon={<BulbOutlined />} onClick={handleShowHint}>
              Gợi ý {hintIndex > 0 && `(${hintIndex}/${exercise.hints.length})`}
            </Button>
          </Space>
        </Space>

        {showHint && exercise.hints[hintIndex] && (
          <Alert
            message={`Gợi ý ${hintIndex + 1}`}
            description={exercise.hints[hintIndex]}
            type="info"
            showIcon
            icon={<BulbOutlined />}
            style={{ marginTop: "16px" }}
          />
        )}

        {isCorrect !== null && (
          <Alert
            message={isCorrect ? "Chính xác!" : "Chưa chính xác"}
            description={
              isCorrect ? "Bạn đã tìm ra đáp án!" : "Hãy thử lại với gợi ý."
            }
            type={isCorrect ? "success" : "error"}
            showIcon
            icon={isCorrect ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
            style={{ marginTop: "16px" }}
          />
        )}
      </Card>

      {isCorrect && (
        <Card style={{ marginBottom: "24px", background: "#f6ffed" }}>
          <Title level={4}>
            <CheckCircleOutlined
              style={{ color: "#52c41a", marginRight: "8px" }}
            />
            Giải thích
          </Title>
          <Paragraph>{exercise.explanation}</Paragraph>
          <Divider />
          <Text strong>Đáp án: </Text>
          <Text code style={{ fontSize: "16px" }}>
            {exercise.solution.join(", ")}
          </Text>
        </Card>
      )}
    </div>
  );
};

export default ExerciseDetail;
