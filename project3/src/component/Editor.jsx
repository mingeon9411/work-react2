import { useState } from "react";
import "./Editor.css";
import Button from "./Button";
import { getFormattedDate } from "../util";

const Editor = ({ initData, onSubmit }) => {
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        {/* 날짜 */}
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          value={state.date}
          onChange={handleChangeDate}
        />
      </div>

      <div className="editor_section">
        {/* 감정 */}
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          감정 선택 영역
        </div>
      </div>

      <div className="editor_section">
        {/* 일기 */}
        <h4>오늘의 일기</h4>
        <textarea
          value={state.content}
          onChange={handleChangeContent}
          placeholder="오늘은 어땠나요?"
        />
      </div>

      <div className="editor_section bottom_section">
        {/* 작성 완료, 취소 */}
        <Button text={"취소하기"} />
        <Button
          text={"작성 완료"}
          type={"positive"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Editor;