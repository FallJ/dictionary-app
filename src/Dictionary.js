import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);


  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
setPhotos(response.data.photos);
  }

function search() {
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleDictionaryResponse);


let pexelsApiKey = "563492ad6f917000010000015a2d8f3e5d654418bc5cc34aa4ae4dc7";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
let headers = { Authorization: `Bearer ${pexelsApiKey}` };

axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
    <Photos photos={photos} />
  </div>
);

} else {
  load();
}

 
}
