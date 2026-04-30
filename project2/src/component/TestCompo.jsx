import { useState } from "react";
import "./TestCompo.css";

function TestCompo() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  const onReset = () => {
    setCount(0);
  };

  return (
    <div className="TestCompo">
      <h4>테스트 컴포넌트 🌸</h4>

      <div className="counter_box">
        <strong className="count_number">{count}</strong>

        <div className="counter_buttons">
          <button onClick={onDecrease}>-</button>
          <button onClick={onIncrease}>+</button>
          <button className="reset_btn" onClick={onReset}>
            초기화
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestCompo;