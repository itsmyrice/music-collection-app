import "../SearchBar/SearchBar.css";
import { TbMusicSearch } from "react-icons/tb";

export default function SearchBar({ onSubmit }) {
      function handleSubmit(event) {
      event.preventDefault();
      const searchName = event.target.name.value;

      onSubmit(searchName);
      event.target.reset();
      }


  return (
    <div>
      <form className="form_value" onSubmit={handleSubmit}>
        <TbMusicSearch id="search_icon" />
        <input type="text" placeholder="Search for artist ..." name="name" />
        <button type="submit" className="search_button">
          Search
        </button>
      </form>
    </div>
  );
}
