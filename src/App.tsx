import React, { useState, useEffect } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import TodayList from "./components/TodayList";
import InputField from "./components/InputField";
import { DailyModel } from "./model/daily_model";
import { BiDownArrow } from "react-icons/bi";
import TotalList from "./components/TotalList";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<DailyModel[]>([]);
  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const respone = await axios.post("/add", todos);
      console.log(respone);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(todo);
    console.log(todos);
  }, []);
  return (
    <RecoilRoot>
      <div className="App">
        <div className="heading">
          <span>오늘 뭐하지</span>
          <button className="toolbar" onClick={handleSave}>
            HELLO
          </button>
        </div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodayList todos={todos} setTodos={setTodos} />
        <hr className="divider" />

        <div className="history">
          <span>어제는 뭐했지</span>
          <span className="history_icon">
            <BiDownArrow />
          </span>
        </div>
        <TotalList />
      </div>
    </RecoilRoot>
  );
}

export default App;
