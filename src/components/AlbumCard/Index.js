import { useEffect, useState } from "react";
import "../AlbumCard/AlbumCard.css";
import SongList from "../SongList/Index.js";
import { MdOutlinePlaylistPlay } from "react-icons/md";

export default function AlbumCard({ album }) {
  const [showList, setShowList] = useState(false);

  function handleToggle() {
    setShowList(!showList);
  }

  useEffect(() => {}, []);

  return (
    <div className="Container">
      <div key={album.id} className="Card">
        <button type="button" className="button" onClick={handleToggle}>
          <img className="img" src={album.image.url} alt="" width="200" />
          <p className="lists">
            {" "}
            <MdOutlinePlaylistPlay /> Show Songlist
          </p>
        </button>
        <h3>{album.title}</h3>
        <h4>{album.artist}</h4>
        {showList && <SongList tracks={album} />}
      </div>
    </div>
  );
}
