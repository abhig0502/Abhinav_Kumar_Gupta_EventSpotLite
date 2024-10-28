import { createContext } from "react";
import { useState } from "react";
export const SearchContext = createContext({
  eventSearchTerm: "",
});

const SearchContextProvider = ({children}) => {
  const [eventSearchTerm, setEventSearchTerm] = useState("");

  return <SearchContext.Provider value={{eventSearchTerm,setEventSearchTerm}}>
    {children}
  </SearchContext.Provider>
};

export default SearchContextProvider;
