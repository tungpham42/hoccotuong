// src/components/LessonContent/MarkdownRenderer.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Typography, Card, Alert } from "antd";

const { Title, Paragraph, Text } = Typography;

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <Title
              level={1}
              style={{
                color: "#332b26",
                fontWeight: 800,
                borderBottom: "2px solid #f0e9e4",
                paddingBottom: "12px",
                marginBottom: "24px",
              }}
            >
              {children}
            </Title>
          ),
          h2: ({ children }) => (
            <Title
              level={2}
              style={{ color: "#4a423d", marginTop: "32px", fontWeight: 700 }}
            >
              {children}
            </Title>
          ),
          h3: ({ children }) => (
            <Title level={3} style={{ color: "#5c4e45", marginTop: "24px" }}>
              {children}
            </Title>
          ),
          p: ({ children }) => (
            <Paragraph
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: "#4a423d",
                marginBottom: "1.5em",
              }}
            >
              {children}
            </Paragraph>
          ),
          strong: ({ children }) => (
            <Text strong style={{ color: "#b05d3a", fontWeight: 700 }}>
              {children}
            </Text>
          ),
          ul: ({ children }) => (
            <ul
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: "#4a423d",
                paddingLeft: "24px",
              }}
            >
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: "#4a423d",
                paddingLeft: "24px",
              }}
            >
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li style={{ marginBottom: "12px" }}>{children}</li>
          ),
          code: ({ children, className }) => {
            if (className?.includes("language-chess")) {
              return (
                <Card
                  size="small"
                  bordered={false}
                  style={{
                    background: "#2d2622",
                    margin: "24px 0",
                    borderRadius: "12px",
                  }}
                >
                  <pre
                    style={{
                      margin: 0,
                      whiteSpace: "pre-wrap",
                      color: "#e8e3df",
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    {children}
                  </pre>
                </Card>
              );
            }
            return (
              <Text
                code
                style={{
                  background: "#f5f0ec",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  color: "#b05d3a",
                }}
              >
                {children}
              </Text>
            );
          },
          blockquote: ({ children }) => (
            <Alert
              message={
                <div style={{ fontSize: "1.05rem", color: "#6d5d54" }}>
                  {children}
                </div>
              }
              type="warning"
              style={{
                margin: "24px 0",
                background: "#fdfaf7",
                borderColor: "#eaddd5",
                borderRadius: "12px",
              }}
            />
          ),
        }}
      >
        {/* We actually pass the content down here! */}
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
