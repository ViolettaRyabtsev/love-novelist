import { NavLink } from "react-router-dom";
import ListNames from "./list-id.json";
import { Link } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const apiKey = "7jx760knTn1ryx0GHhxgijkgeQoruRWG";

const Header = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const { setBooks, setNames } = bindActionCreators(actionCreators, dispatch);
  console.log(store);

  const getBooksApi = async (item) => {
    var axios = require("axios").default;
    var options = {
      method: "GET",
      url: `https://api.nytimes.com/svc/books/v3/lists/current/${item}.json?api-key=${apiKey}`,
    };

    await axios
      .request(options)
      .then(function (response) {
        setNames({ name: response.data.results.list_name });
        console.log(response.data.results.list_name, "results");
        setBooks(response.data.results.books);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const keys = Object.keys(ListNames);
  console.log(keys);

  return (
    <div className="header">
      <img src="../beyond.png" width="250px" height="200px" alt="logo" />
      <div className="navigation">
        <NavLink to="/">Home</NavLink>
        <div className="dropdown-menu">
          <NavLink to="/">Browse</NavLink>
          <div className="menu-content">
            {keys.map((item) => (
              <NavLink to={`/categories/${item}`}>
                {" "}
                <li className="links-hidden" onClick={() => getBooksApi(item)}>
                  {item}
                </li>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
