import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // ✅ Import table support

interface Props {
  left: string;
  right: string;
}

const TwoColumn: React.FC<Props> = ({ left, right }) => {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{left}</ReactMarkdown> {/* ✅ Enable table support */}
      </div>
      <div style={{ flex: 1 }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{right}</ReactMarkdown> {/* ✅ Enable table support */}
      </div>
    </div>
  );
};

export default TwoColumn;
