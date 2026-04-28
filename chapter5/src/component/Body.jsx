import { useRef, useState } from "react";
import "./Body.css";

function Body() {
    const [text, setText] = useState("");
    const textRef = useRef();
    
    const handleOnChange = (e) => {
        setText(e.target.value);
    };
    const handleOnClick = () => {
        alert(text);
        textRef.current.value = "";
    };

    return (
        <div className="body">
            <input ref={textRef} value={text} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>작성완료</button>
        </div>
    );
}
export default Body;