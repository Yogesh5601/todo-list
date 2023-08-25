import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Note from "./Note";
import Time from "./Time";







const CreateArea = () => {
  const [todo, setTodo] = useState({
note: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const submittodo = (event) => {
    axios.post("http://localhost:5000/note/addnote", todo).then((res) => {
      console.log(res);
    });
    setTodo({
      note: "",
    });
    event.preventDefault();
  };

  return (
    <>
      <main>
        <div className="heading box">
          <h1><Time/></h1>
        </div>
        <div className="box">
          <form method="post" className="item">
            <input
              className="newItem"
              name="note"
              onChange={handleChange}
              value={todo.note}
              placeholder="Title"
            />

            <button className="i-btn" type="submit" onClick={submittodo}>
              +
            </button>
          </form>
          <Note />
        </div>
      </main>
    </>
  );
};

export default CreateArea;
