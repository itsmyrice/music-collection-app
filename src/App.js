import "./App.css";
import AlbumList from "./components/AlbumList/Index.js";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() =>{
    async function fetchAlbumData() {
      try {
      const response = await fetch("https://neuefische-spotify-proxy.vercel.app/api/featured");
      const albumData = await response.json();
      setData(albumData);
      } catch (error) {
      console.error(error);
      }

    }
    fetchAlbumData();
  }, [])

  return (
    <div>
      <main>
        <div className="App">
          <AlbumList albums={data} />
        </div>
      </main>
    </div>
  );
}
