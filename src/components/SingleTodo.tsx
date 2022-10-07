import React, { useEffect, useRef, useState } from "react";
import { DailyModel } from "../model/daily_model";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdDownloadDone } from "react-icons/md";
import "./styles.css";

interface Props {
  todo: DailyModel;
  todos: DailyModel[];
  setTodos: React.Dispatch<React.SetStateAction<DailyModel[]>>;
  index: number;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos, index }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, [edit]);

  // 텍스트 수정하기
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    console.log(todos);
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editText } : todo))
    );
    // setEdit(false);
  };

  // 텍스트 완료하기
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // 텍스트 삭제하기
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <form className="daily__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      <span className="index">{index + 1}</span>
      {edit ? (
        <input
          ref={inputRef}
          className="daily__single--edit"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="daily__single--text">{todo.todo}</s>
      ) : (
        <span className="daily__single--text">{todo.todo}</span>
      )}
      <span className="icon" onClick={() => setEdit(!edit)}>
        <FiEdit3 />
      </span>
      <span className="icon" onClick={(e) => handleDelete(todo.id)}>
        <RiDeleteBin7Line />
      </span>
      <span className="icon" onClick={(e) => handleDone(todo.id)}>
        <MdDownloadDone />
      </span>
    </form>
  );
};

export default SingleTodo;
