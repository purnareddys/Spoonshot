import React from "react";
import DBCard from "./DBCard";
export default function DBCards({ data, setCount }) {
  const tempData = data;
  console.log(tempData);
  let finalArray =
    tempData &&
    tempData.reduce((a, b) => {
      var i = a.findIndex((x) => x.id === b.id);
      return (
        i === -1
          ? a.push({
              id: b.id,
              image: b.image,
              title: b.title,
              subtitle: b.subtitle,
              times: 1,
            })
          : a[i].times++,
        a
      );
    }, []);
  console.log(finalArray);
  return (
    <div className="custom-cards-container ml-md-2">
      {" "}
      {finalArray &&
        finalArray.map((item, idx) => {
          return <DBCard data={item} setCount={setCount} />;
        })}
    </div>
  );
}
