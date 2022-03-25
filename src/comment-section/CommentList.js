import React from "react";
import "./Comments.css";

const CommentList = (props) => {
  const renderComments = () => {
    const comments = props.datafromMySql || [];
    return (
      <div>
        {comments.map((message) => (
          <div className="list-group-item">
            <div className="name-data">
              <img
                width="30px"
                height="30px"
                src="../user.png"
                alt="avatar"
              ></img>
              <div style={{ display: "flex", height: "60px" }}>
                <h5 style={{ "margin-right": "5px" }}>{message.name}</h5>
                <h6>data</h6>
              </div>
            </div>
            <p style={{ "padding-left": "20px" }}>{message.body}</p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <div className="list-group">{renderComments()}</div>
    </div>
  );
};

export default CommentList;
