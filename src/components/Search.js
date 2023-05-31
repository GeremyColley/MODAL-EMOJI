import React from "react";


const Search = ({ searchResult }) => {
 // const [name, setName] = useState("");
  
  return (
    <div className="header">
      <span role="img" aria-label="Sunglasses man">
        😎 EmojiSearch 😎
      </span>
      <input
        onChange={event => searchResult(event)}
        placeholder="What emoji are you looking for ?"
      />
    </div>
  );
};

export default Search;
