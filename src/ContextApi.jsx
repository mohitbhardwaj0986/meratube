import { createContext, useContext, useState } from "react";

// Create the context
const DataContext = createContext();

// Create the Provider component
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [card, setCardData] = useState();
  const [channel, setChannel] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const [saved, setSaved] = useState([]);

  const value = {
    data,
    setData,
    card,
    setCardData,
    channel,
    setChannel,
    darkMode,
    setDarkMode,
    saved,
    setSaved,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Custom hook to use context
const useData = () => {
  const context = useContext(DataContext);
  return context;
};

export { DataContext, DataProvider, useData };
