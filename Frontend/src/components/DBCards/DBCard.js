import React from "react";
import { Button, Card } from "react-bootstrap";
export default function DBCard({ data, setCount }) {
  console.log(data);
  const handleAddBook = async (data) => {
    // const data = {
    //   id: item.id,
    //   title: item.volumeInfo.title,
    //   subtitle: item.volumeInfo.subtitle,
    //   image: item.volumeInfo.imageLinks.thumbnail,
    // };
    // console.log(data);
    fetch("http://localhost:8080/books/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        setCount((prevState) => {
          return prevState + 1;
        });
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const handleDeleteBook = (data) => {
    console.log(data.title);
    fetch("http://localhost:8080/books/remove", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        setCount((prevState) => {
          return prevState + 1;
        });
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="custom-card-item">
      <Card style={{ width: "18rem", height: "auto" }}>
        <Card.Img
          variant="top"
          src={
            data.image ? data.image : "https://dummyimage.com/250/ffffff/000000"
          }
          style={{ height: 250 }}
        />
        <Card.Body>
          <Card.Title>
            <strong>{data && data.title}</strong>
          </Card.Title>
          <Card.Text>
            <p>
              <strong>Subtitle:</strong> {data && data.subtitle}
            </p>
            <p>
              <strong style={{ color: "red" }}>Count:</strong>{" "}
              {data && data.times > 0 ? data.times : "Out of Stock"}
            </p>
          </Card.Text>
          <div className="buttons-container">
            <Button
              onClick={() => {
                handleAddBook(data);
              }}
              style={{ margin: "0 auto" }}
              variant="success"
            >
              Add +
            </Button>
            <Button
              onClick={() => {
                handleDeleteBook(data);
              }}
              style={{ margin: "0 auto" }}
              variant="danger"
            >
              Remove -
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
