import AlbumCard from "../AlbumCard/Index.js";
import "./AlbumList.css";
import { GiMusicSpell } from "react-icons/gi";

export default function AlbumList({ albums }) {
  return (
    <div>
      <h1>
        Music Collection <GiMusicSpell />
      </h1>
      <h2>Featured</h2>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}
