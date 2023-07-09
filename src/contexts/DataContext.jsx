import { createContext, useContext, useState } from "react";
import { data } from "../data/Data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [continentsData, setContinentsData] = useState(data);
  return (
    <DataContext.Provider value={{ continentsData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
