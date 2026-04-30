import { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content.trim()) {
      inputRef.current.focus();
      return;
    }

    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>오늘의 할 일 리스트 작성하기 ✍️</h4>

      <div className="editor_wrapper">
        <div className="input_wrapper">
          <input
            ref={inputRef}
            value={content}
            onChange={onChangeContent}
            onKeyDown={onKeyDown}
            placeholder="새로운 Todo..."
          />
        </div>

        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;