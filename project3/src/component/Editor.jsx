import "./Editor.css";

const Editor = ({ initData, onSubmit }) => {
  return (
    <div className="Editor">
      <div className="editor_section">
        {/* 날짜 */}
        <h4>오늘의 날짜</h4>
        <input type="date" />
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
        <textarea placeholder="오늘은 어땠나요?" />
      </div>

      <div className="editor_section bottom_section">
        {/* 작성 완료, 취소 */}
        <button>취소하기</button>
        <button>작성완료</button>
      </div>
    </div>
  );
};

export default Editor;