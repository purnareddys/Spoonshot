import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CustomCard({ item, setCount }) {
  //   console.log(item);
  // console.log(item.volumeInfo);

  const handleAddBook = async (item) => {
    const data = {
      id: item.id,
      title: item.volumeInfo.title,
      subtitle: item.volumeInfo.subtitle,
      image: item.volumeInfo.imageLinks.thumbnail,
    };
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
  console.log(
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
  );
  return (
    <div className="custom-card-item">
      <Card style={{ width: "18rem", height: "auto" }}>
        <Card.Img
          variant="top"
          src={
            item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
              ? item.volumeInfo.imageLinks.thumbnail
              : "https://dummyimage.com/250/ffffff/000000"
          }
          style={{ height: 250 }}
        />
        <Card.Body>
          <Card.Title>
            <strong>{item && item.volumeInfo.title}</strong>
          </Card.Title>
          <Card.Text>
            <p>
              <strong>Author:</strong> {item && item.volumeInfo.authors}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {item && item.volumeInfo.averageRating
                ? item.volumeInfo.averageRating
                : "NA"}
            </p>
          </Card.Text>
          <Button
            onClick={() => {
              handleAddBook(item);
            }}
            style={{ margin: "0 auto" }}
            variant="primary"
          >
            Add to Inventory
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
