import { useState } from "react";
import Button from "./Button";

const Editor = ({ initData, onSubmit }) => {
  const [data, setData] = useState({
    date: initData ? new Date(initData.date).toISOString().slice(0, 10) : "",
    content: initData ? initData.content : "",
    emotionId: initData ? initData.emotionId : 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(data);
  };

  return (
    <div>
      <input type="date" name="date" value={data.date} onChange={handleChange} />
      <textarea name="content" value={data.content} onChange={handleChange} />
      <input type="number" name="emotionId" value={data.emotionId} onChange={handleChange} />
      <Button text={"작성 완료"} onClick={handleSubmit} />
    </div>
  );
};

export default Editor;