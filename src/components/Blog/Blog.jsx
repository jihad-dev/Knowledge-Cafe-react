import React from "react";

const Blog = ({ blog, handleAddBookMarks, handleMarkAsRead }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    hashtags,
    reading_time,
  } = blog;

  return (
    <div className="lg:w-[800px] border m-5 mb-20">
      <div>
        <img className="w-[845px] " src={cover} alt="" />
        <div className="flex justify-between">
          <div className="flex gap-3 items-center p-2">
            <img className="w-14 h-14" src={author_img} alt="" />

            <div>
              <h2>{author}</h2>
              <h2>{posted_date}</h2>
            </div>
          </div>
          <div>
            <h2>
              {reading_time} min read
              <button onClick={() => handleAddBookMarks(blog)}>📑</button>
            </h2>
          </div>
        </div>
        <p className="text-2xl font-serif font-extrabold">{title}</p>
        <p>
          {hashtags.map((hst, idx) => (
            <a key={idx} href="">
              #{hst}
            </a>
          ))}
        </p>
        <button
          onClick={() => handleMarkAsRead(reading_time)}
          className="bg-gray-500 rounded-sm px-3 py-3"
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
};

export default Blog;
