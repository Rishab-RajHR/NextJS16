"use client";

import { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState();
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(file);
  }
  return (
    <>
      <h2>Upload Image in Next JS</h2>
      <form onSubmit={handleSubmit}>
          <input type='file' name='file' onChange={(e) => setFile(e.target.value)}/> <br /> <br />
          <button type='submit'>Upload</button>
      </form>
    </>
  )
}

export default UploadImage