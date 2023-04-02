import React, { useState } from "react";
import axios from "axios";

export default function VideoUpload() {
  const uploadFile = async (e) => {
    e.preventDefault();
    const frm = document.getElementById("fm");
    const formData = new FormData(frm);

    try {
      const res = await axios.post(
        process.env.REACT_APP_API_CALL_ADDRESS + "/uploadMovie",
        formData
      );
      console.log("no error");
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <form onSubmit={uploadFile} id="fm">
        <input type="text" name="movieName" placeholder="movie Name" />
        <br />
        <input type="text" name="releaseDate" placeholder="release Date" />
        <br />
        <input type="text" name="genre" placeholder="Movie Genre" />
        <br />
        <input type="text" name="casts" placeholder="Cast name" />
        <br />
        <input type="text" name="description" placeholder="Description" />
        <br />
        <input type="file" name="movieThumbnail" />
        <input type="file" name="movieFile" />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
}
