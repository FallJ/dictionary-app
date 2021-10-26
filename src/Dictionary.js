import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);


  function handleResponse(response) {
    setResults(response.data[0]);
  }

function search() {
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault();
search();
    
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

function load() {
  setLoaded(true);
  search();
}

if (loaded) {
return (
  <div className="dictionary">
    <section>
      <h1>What word would you like to look up?</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
      </form>
      <div className="hint">
        Suggested words: airport, plant, yogurt, ocean ...
      </div>
    </section>
    <Results results={results} />
  </div>
);

} else {
  load();
}

 
}
