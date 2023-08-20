import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Note = () => {
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  // update data
  const editRoute = (id) => {
    navigate("/update/" + id);
  };

  // delete post
  const deleteData = (id) => {
    axios
      .delete(`http://localhost:5000/note/${id}`)
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = () => {
    axios
      .get("http://localhost:5000/note")
      .then((res) => {
        console.log(res);
        setNotes(res.data.msg);
        navigate("/createArea");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="list">
        {notes?.map((data) => {
          return (
            <Noteitem
              key={data._id}
              detail={data}
              deleteRequest={deleteData}
              editRequest={editRoute}
            />
          );
        })}
      </div>
    </>
  );
};

const Noteitem = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <p>{props.detail.note}</p>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col">
              <button
                className="m-btn"
                onClick={() => {
                  props.editRequest(props.detail._id);
                }}
              >
                <EditIcon />
              </button>
            </div>
            <div className="col">
              <button
                className="m-btn"
                onClick={() => {
                  props.deleteRequest(props.detail._id);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
