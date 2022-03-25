import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Comments.css";
import CommentList from "./CommentList.js";
const CommentSection = () => {
  const [localComment, setLocalComment] = useState({
    name: "",
    body: "",
    id: "",
  });

  const [comments, setComments] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:3001/addComment", {
        name: localComment.name,
        body: localComment.body,
        id: localComment.id,
      })
      .then((response) => {
        console.log(response.config.data, "send data");
      })
      .catch((err) => console.error("We have a post error", err));
  };

  useEffect(() => {
    axios.get("http://localhost:3001").then((response) => {
      console.log(response.data, "data from server");
      setComments({ ...comments, data: response.data });
    });
  }, []);

  return (
    <>
      <div className="comment">
        <h3>Tell us what you think</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={localComment.name}
            type="text"
            onChange={(e) =>
              setLocalComment({ ...localComment, name: e.target.value })
            }
            className="name-input"
            placeholder="First name"
          ></input>
          <input
            type="text"
            value={localComment.body}
            onChange={(e) =>
              setLocalComment({
                ...localComment,
                body: e.target.value,
                id: toString(Math.floor(Math.random() * 100)),
              })
            }
            className="comment-input"
            placeholder="Leave your comment"
          ></input>
          <button type="submit">Submit Your Comment</button>
        </form>
      </div>
      <div></div>
      <CommentList datafromMySql={comments.data} />
    </>
  );
};

export default CommentSection;
