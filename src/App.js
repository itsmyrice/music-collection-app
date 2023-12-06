import { data } from "./db.js";
import "./App.css";
import AlbumList from "./components/AlbumList/Index.js";

export default function App() {
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
