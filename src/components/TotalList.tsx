import React from "react";
import AllTodo from "./AllTodo";
import "./styles.css";

const TotalList: React.FC = () => {
  return (
    <div className="total__todos">
      {[1, 2, 3, 4].map((item) => (
        <AllTodo key={item} />
      ))}
    </div>
  );
};

export default TotalList;
