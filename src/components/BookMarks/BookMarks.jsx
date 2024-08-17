import React from "react";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks ,readingTime}) => {
  return (
    <div className="">
      <h1 className="font-bold text-2xl">BookMarks : {bookMarks.length}</h1>
      <h1 className="font-bold text-2xl">readingTime :  {readingTime}</h1>
      <div>
        {bookMarks.map((bookMark,i) => (
          <BookMark key={i} bookMark={bookMark}></BookMark>
        ))}
      </div>
    </div>
  );
};

export default BookMarks;
