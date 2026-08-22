'use client';
import React from "react";

const Posts = ({params}) => {
  const resolved = React.use(params)
  return (
    <>
      <h2>Blog: {resolved.posts[0]}</h2>
      <h2>Post: {resolved .posts[1]}</h2>
    </>
  )
}

export default Posts;