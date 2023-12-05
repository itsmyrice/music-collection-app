
import { useEffect, useState } from "react";
import "../AlbumCard/AlbumCard.css";
import SongList from "../SongList/Index.js";


export default function AlbumCard({ album }) {
 const [list, setList] = useState(false);

 function handleToggle() {
  setList(!list)
 }

  useEffect (() => {
  }, []);

  return (
    <div className='Container'>
      
        <div key={album.id} className='Card'>
          <button type='button' className='button' onClick={handleToggle}>
            <img className="img" src={album.image.url} alt="" width="200" />
            <p className="lists">Play Songlist</p>
            </button>
          <h3>{album.title}</h3>
          <h4>{album.artist}</h4>
          {list && <SongList tracks={album} />}
        </div>
    </div>
  );
  }


