import "./App.css";
import AlbumList from "./components/AlbumList/Index.js";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/Index.js";
import { GiMusicSpell } from "react-icons/gi";

export default function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState("FEATURES")
  console.log(searchQuery);

  useEffect(() =>{
    async function fetchAlbumData() {
      const url = currentPage === "FEATURES" ? "https://neuefische-spotify-proxy.vercel.app/api/featured" : `https://neuefische-spotify-proxy.vercel.app/api/search?artist=${searchQuery}`;
      try {
      const response = await fetch(url);
      const albumData = await response.json();
      setData(albumData);
      console.log(albumData);
      } catch (error) {
      console.error(error);
      }

    }
    fetchAlbumData();
  }, [currentPage, searchQuery])

  function handleSearch(searchName) {
    setSearchQuery(searchName);
    setCurrentPage("SEARCH");
  }
  return (
    <div>
      <h1>
        Music Collection <GiMusicSpell />
      </h1>
      <SearchBar onSubmit={handleSearch} />
      <main>
        <div className="App">
          <AlbumList albums={data} title={currentPage === "FEATURES" ? "Featured" : `Results for: ${searchQuery}`} />
        </div>
      </main>
    </div>
  );
}

