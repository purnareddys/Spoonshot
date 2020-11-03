import "./App.css";
import React, { useContext, useState, useEffect } from "react";
import MainNavbar from "./components/Navbar/Navbar";
import { ThemeContext } from "./context/Context";
import { Button, Form, FormControl } from "react-bootstrap";
import Cards from "./components/Cards/Cards";
import DBCards from "./components/DBCards/DBCards";
function App() {
  const [searchText, setSearchText] = useState("");
  const [fetchedData, setFetchedData] = useState(null);
  const [DBData, setDBData] = useState(null);
  const [count, setCount] = useState(0);
  const APIkey = "AIzaSyCwKAFeQfna7Dr60uy_9m0G1Mcr4AldrW0";
  const context = useContext(ThemeContext);
  console.log(context.theme);
  const fetchDataDB = () => {
    fetch(`http://localhost:8080/books`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDBData(data);
      });
  };
  const fetchData = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=${APIkey}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setFetchedData(data);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchDataDB();
    console.log(count);
  }, [count]);
  return (
    <>
      <div className={`content ${context.theme}`}>
        <MainNavbar />

        <h2
          style={{
            textAlign: "center",
          }}
        >
          Books Inventory
        </h2>
        {/* For fetching already existing books in database */}
        <h3
          style={{
            textAlign: "center",
          }}
        >
          <span>Current Books in Inventory</span>
        </h3>
        <DBCards data={DBData} setCount={setCount} />
        {/* Searching for books using google API */}
        <h4
          style={{
            textAlign: "center",
          }}
        >
          Search for books
        </h4>
        <br />
        <br />
        <div style={{ textAlign: "center" }} className="custom-search-box">
          <Form
            inline
            style={{ display: "inline-block" }}
            onSubmit={(e) => {
              e.preventDefault();
              fetchData();
            }}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-md-2 ml-md-2 "
              size="lg"
              style={{
                width: "85vw",
              }}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <Button
              size="lg"
              variant="outline-primary"
              onClick={() => {
                fetchData();
              }}
            >
              Search
            </Button>
          </Form>
        </div>
        <Cards data={fetchedData} setCount={setCount} />
      </div>
    </>
  );
}

export default App;
