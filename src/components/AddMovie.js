import React, { useState } from "react";
import "./AddMovie.css";

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({
      id: Math.random(),
      title,
      description,
      posterUrl,
      rate,
    });
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input_text"
        placeholder="Enter the movie title..."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        required
      />{" "}
      <br />
      <input
        type="text"
        className="input_text"
        placeholder="Add some description..."
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        required
      />{" "}
      <br />
      <input
        type="text"
        className="input_text"
        placeholder="Add the poster url..."
        onChange={(e) => {
          setPosterUrl(e.target.value);
        }}
        required
      />{" "}
      <br />
      <input
        type="number"
        min="1"
        max="5"
        className="input_text"
        placeholder="Add a rate..."
        onChange={(e) => {
          setRate(parseInt(e.target.value));
        }}
        required
      />{" "}
      <br />
      <input type="submit" value="Add movie" className="btn" />
    </form>
  );
};

export default AddMovie;
