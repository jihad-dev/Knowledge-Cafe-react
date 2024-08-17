import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddBookMarks = (blog) => {
    const newBlogs = [...bookMarks, blog];
    setBookMarks(newBlogs);
  };
  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddBookMarks={handleAddBookMarks}
        />
        <BookMarks readingTime={readingTime} bookMarks={bookMarks} />
      </div>
    </>
  );
}

export default App;
