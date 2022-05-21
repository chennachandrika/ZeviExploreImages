import { useState } from "react";
import FetchImages from "../FetchImages";
import { SearchWrapper, InputWrapper } from "./styledComponents";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const changeInput = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <SearchWrapper>
      <InputWrapper
        type={"search"}
        value={searchText}
        placeholder={"Search Images"}
        onChange={changeInput}
      />
      <FetchImages searchText={searchText} />
    </SearchWrapper>
  );
};
export default Search;
