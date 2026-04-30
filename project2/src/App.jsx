import { useRef, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Todo 앱 만들기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "런닝 하러가기",
    date: new Date().getTime(),
  },
  {
    id: 4,
    isDone: false,
    content: "독서하기",
    date: new Date().getTime(),
  },
  {
    id: 5,
    isDone: false,
    content: "알고리즘 풀기",
    date: new Date().getTime(),
  },
  {
    id: 6,
    isDone: false,
    content: "CSS 복습하기",
    date: new Date().getTime(),
  },
  {
    id: 7,
    isDone: false,
    content: "JS 복습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(8);

  const petals = Array.from({ length: 12 });

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item) =>
        item.id === targetId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((item) => item.id !== targetId));
  };

  return (
    <div className="App">
      <div className="sakura-container">
        {petals.map((_, index) => (
          <span key={index} className={`petal petal${index + 1}`}></span>
        ))}
      </div>

      <div className="app-content">
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;