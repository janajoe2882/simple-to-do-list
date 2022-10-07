import React from "react";
import SingleTodo from "./SingleTodo";
import { DailyModel } from "../model/daily_model";
import "./styles.css";

interface Props {
  todos: DailyModel[];
  setTodos: React.Dispatch<React.SetStateAction<DailyModel[]>>;
}
const TodayList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="today__todos">
      {todos.map((todo, i) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
          index={i}
        />
      ))}
    </div>
  );
};

export default TodayList;
