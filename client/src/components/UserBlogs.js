import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");

  const sendRequest = useCallback(async () => {
    const res = await axios
    .get(`https://blog-mern-backend-a58w.onrender.com/api/blog/user/${id}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  }, [id]);
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, [sendRequest]);
  console.log(user);
  return (
    <div>
      {" "}
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            key={index}
            isUser={true}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={user.name}
          />
        ))}
    </div>
  );
};

export default UserBlogs;
