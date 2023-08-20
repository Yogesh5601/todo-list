import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Update = () => {
  const [todo, setTodo] = useState({
    note: "",
  });

   const navigate = useNavigate();
   let params = useParams();


console.log(params.id)

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
    axios
      .put("http://localhost:5000/note/" + params.id, todo)
      .then((res) => {
        console.log(res);
        navigate("/createArea");
      })
      .catch((err) => {
        console.log(err);
      });
    setTodo({
      note: "",
    });
    event.preventDefault();
  };
    useEffect(() => {
      axios
        .get("http://localhost:5000/note/" + params.id)
        .then((res) => {
          console.log(res);
          setTodo(res.data.msg.note);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  return (
    <>
      <main>
        <div className="box">
          <form className="item">
            <input
              className="newItem"
              name="note"
              onChange={handleChange}
              value={todo.note}
              placeholder="Title"
            />

            <button className="i-btn my-5" type="submit" onClick={submittodo}>
              +
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Update;
