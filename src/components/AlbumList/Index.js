import { useEffect, useState } from "react";
import AlbumCard from "../AlbumCard/Index.js";
import "./AlbumList.css";
import { GiMusicSpell } from "react-icons/gi";



export default function AlbumList({ albums }) {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     async function loadData() {
    //         try {
    //         const response = await fetch("https://neuefische-spotify-proxy.vercel.app/api/featured");
    //         const data = await response.json();
    //         setData(data)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     loadData();

    // }, []);

    // if (!data) {
    //     return null;
    // }

    return (
        <div>
            <h1>Music Collection <GiMusicSpell /></h1>
            <h2>Featured</h2>
            {albums.map((album) => 
            <AlbumCard key={album.id} album={album} /> 
            )}
        </div>
    )

}

