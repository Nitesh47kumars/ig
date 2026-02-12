import React from "react";
import axios from "axios";

const CreatePost = () => {
  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      .post("http://localhost:3000/create-post", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form onSubmit={onHandleSubmit}>
        <input type="file" name="post" accept="image/*" />
        <input
          type="text"
          name="caption"
          required
          placeholder="Enter Caption"
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
