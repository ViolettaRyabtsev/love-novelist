import { useSelector } from "react-redux";
import "./browse-component.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentSection from "../comment-section/CommentSection";

const BrowseComponent = () => {
  const store = useSelector((state) => state);

  //   const [comments, setComments] = useState({});

  //   useEffect(() => {
  //     axios.get("http://localhost:3001").then((response) => {
  //       console.log(response.data, "data from server");
  //       setComments({ ...comments, data: response.data });
  //     });
  //   }, []);

  return (
    <>
      <div
        style={{
          "font-family": "Lucida Sans",
          "font-size": "30px",
          marginLeft: "30px",
          letterSpacing: "0.3rem",
          opacity: "0.7",
        }}
      >
        <h3>{store.names.name}</h3>
      </div>
      <div className="grid-container">
        {store.books.map((item) => (
          <div className="book-container">
            <img
              width="130px"
              height="200px"
              src={item.book_image}
              alt="book"
            ></img>
            <div className="book-detail">
              <h3>{item.author}</h3>
              <p>{item.description}</p>
            </div>
            <a href={item.buy_links[1].url}> BUY</a>
          </div>
        ))}
      </div>
      <CommentSection />
    </>
  );
};

export default BrowseComponent;
