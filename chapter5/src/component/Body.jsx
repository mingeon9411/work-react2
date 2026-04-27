import { useState } from "react";
import "./Body.css";

function Body() {
    const [date, setDate] = useState("");
    const handleOnChange = (e) => {
        console.log("변경된 값: ", e.target.value);
        setDate(e.target.value);
    };
    return (
       <div className="body">
        <input type="date" value={date} onChange={handleOnChange}/>
       </div>
    );
}
export default Body;