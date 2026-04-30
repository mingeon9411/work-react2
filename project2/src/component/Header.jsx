import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("ko-KR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",

  });

  const formattedDate = time.toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
});

  return (
    <div className="Header">
      <h3>
        오늘은 📅
        <span className="clock">{formattedTime}</span>
      </h3>

      <h1 className="date-title">{formattedDate}</h1>
    </div>
  );
};

export default Header;