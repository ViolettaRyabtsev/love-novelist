import "./App.css";
import HomeReviews from "./HomeReviews";
function Home() {
  return (
    <div className="home-container">
      <div style={{ display: "flex" }}>
        <div className="communication-form">
          <div>
            <h2>Amazing deals on bestselling ebooks</h2>
          </div>
          <span>Join for FREE to never miss a deal:</span>
          <form>
            <input type="text" placeholder="Enter your email address"></input>
            <button type="submit">Get Started</button>
          </form>
        </div>
        <img
          className="books"
          width="500px"
          height="500px"
          src="./book.png"
          alt="books"
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          "margin-left": "30px",
          "margin-top": "200px",
          "margin-bottom": "200px",
        }}
      >
        <img
          className="coffee"
          width="400px"
          height="400px"
          src="./coffe.png"
          alt="books"
        ></img>
        <div
          style={{
            "margin-left": "150px",
            width: "800px",
            "margin-top": "40px",
          }}
        >
          {" "}
          <h2>Begin each day with personalized recommendations</h2>
          <h4>
            {" "}
            Each day you'll receive a selection of discounted titles, handpicked
            to match your reading taste.
          </h4>
        </div>
      </div>
      <div style={{ margin: "auto" }}>
        <h3>Most relevant reviews </h3>
      </div>
      <HomeReviews />
    </div>
  );
}

export default Home;
