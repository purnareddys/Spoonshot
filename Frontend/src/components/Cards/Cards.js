import React from "react";
import CustomCard from "./Card";
export default function Cards({ data, setCount }) {
  console.log(data && data.items);
  return (
    <div className="custom-cards-container ml-md-2">
      {data &&
        data.items.map((item) => (
          <CustomCard item={item} setCount={setCount} />
        ))}
    </div>
  );
}
