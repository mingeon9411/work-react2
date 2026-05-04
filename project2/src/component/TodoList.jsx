import { useContext, useMemo, useState } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const storeData = useContext(TodoContext);

  const { todo, onUpdate, onDelete } = storeData;

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  const searchResult = getSearchResult();

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>

      <div className="analyze_wrapper">
        <div>총 개수: {totalCount}</div>
        <div>완료된 일: {doneCount}</div>
        <div>아직 완료하지 못한 일: {notDoneCount}</div>
      </div>

      <input
        className="searchbar"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />

      <div className="List_wrapper">
        {searchResult.map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;