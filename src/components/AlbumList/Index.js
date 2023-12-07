import AlbumCard from "../AlbumCard/Index.js";
import "./AlbumList.css";

export default function AlbumList({ albums, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {albums?.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}
