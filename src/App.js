import { data } from "./db.js";
import "./App.css";
import AlbumList from "./components/AlbumList/Index.js";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() =>{
    async function fetchAlbumData() {
      const response = await fetch("https://neuefische-spotify-proxy.vercel.app/api/featured");
      const albumData = await response.json();
      setData(albumData);
    }
    fetchAlbumData();
  }, [])

  return (
    <div>
      <main>
        <div className="App">
          <AlbumList albums={data} data={data}/>
        </div>
      </main>
    </div>
  );
}
