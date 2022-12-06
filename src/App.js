import "./styles.css";
import React, { useState } from "react";
const movies = {
  Horror: [
    { name: "Bones and All", year: "2022", rating: "4.8/5" },
    { name: "X(part2)", year: "2022", rating: "3.5/5" }
  ],
  RomCom: [
    { name: "The Girl Next Door", year: "2004", rating: "5/5" },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      year: "2001",
      rating: "4.3/5"
    }
  ],
  Suspense: [
    { name: "The Dark Knight", year: "2008", rating: "4.5/5" },
    { name: "Se7en", year: "1995", rating: "4.2/5" }
  ],
  Thriller: [
    { name: "The Silence of the Lambs", year: "1991", rating: "3.7/5" },
    { name: "The Usual Suspects ", year: "1995", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Suspense");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App" style={{ margin: "auto", maxWidth: "50rem" }}>
      <h1>Best Movies</h1>
      <h2 style={{}}>The best of Entertainment</h2>
      <hr />
      <div>
        {Object.keys(movies).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "1" }}>
          {movies[selectedGenre].map((mov) => (
            <li
              key={mov.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid ",
                width: "40%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {mov.name} </div>
              <div style={{ fontSize: "small" }}> {mov.year} </div>
              <div style={{ fontSize: "large" }}> {mov.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
