import { data}   from '../../db.js';
import { useEffect} from "react";
import "../AlbumCard/AlbumCard.css";
// import SongList from '../SongList/index.js';


export default function AlbumCard() {
useEffect (() => {
  // console.log(data)
  // const [list, setList] = useState(false);

  }, []);
  return (
    <div className='Container'>
      <h1>Music Collection</h1>
      {data.map((album) => (
        <div key={album.id} className='Card'>
          <button type='button' className='button'>
            <img className="img" src={album.image.url} alt="" width="200" />
            </button>
          <h3>{album.title}</h3>
          <h4>{album.artist}</h4>
          
        </div>
        ))};
    </div>
  );
  }


