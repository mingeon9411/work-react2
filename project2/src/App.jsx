import { createContext, useCallback, useRef, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import TestCompo from "./component/TestCompo";

export const TodoContext = createContext(null);

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

const petals = Array.from({ length: 12 });

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(8);

  const onCreate = useCallback((content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    setTodo((prevTodo) => [newItem, ...prevTodo]);
    idRef.current += 1;
  }, []);

  const onUpdate = useCallback((targetId) => {
    setTodo((prevTodo) =>
      prevTodo.map((it) =>
        it.id === targetId
          ? {
              ...it,
              isDone: !it.isDone,
            }
          : it
      )
    );
  }, []);

  const onDelete = useCallback((targetId) => {
    setTodo((prevTodo) => prevTodo.filter((it) => it.id !== targetId));
  }, []);

  return (
    <TodoContext.Provider value={{ todo, onCreate, onUpdate, onDelete }}>
      <div className="App">
        <div className="sakura-container">
          {petals.map((_, index) => (
            <span key={index} className={`petal petal${index + 1}`}></span>
          ))}
        </div>

        <div className="app-content">
          <Header />
          <TestCompo />
          <TodoEditor />
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;