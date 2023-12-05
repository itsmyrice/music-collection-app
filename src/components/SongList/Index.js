import './SongList.css';

export default function SongList({ tracks }) {
  
    return (
        <>
        <ul>
          {tracks.tracks.map((song) => (
            <li key={song.id}>
             <span>{song.track_number}</span>
             <span>{song.name}</span>
             <span>{song.duration}</span>     
            </li>
          ))}
        </ul>
        </>
      );
}