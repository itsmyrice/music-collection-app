// import { useEffect } from "react";
import AlbumCard from "../AlbumCard/Index";
import "./AlbumList.css";

export default function AlbumList({ albums }) {

    // useEffect(() => {
    //     async function loadData() {
    //         try {
    //         const response = await fetch("https://neuefische-spotify-proxy.vercel.app/api/featured");
    //         const data = await response.json();
    //         setData(data);
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
            <h1>Music Collection</h1>
            {albums.map((album) => 
            <AlbumCard key={album.id} album={album} /> 
            )}
        </div>
    )

}

