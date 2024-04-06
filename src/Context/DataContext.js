import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext(null);

function DataProvider({children}){
    const [isTimeActive, setIsTimeActive] = useState(false)
    const [selectedDate, setSelectedDate] = useState(``)
    return <DataContext.Provider value={{
        isTimeActive,
        setIsTimeActive,
        selectedDate, 
        setSelectedDate
    }}>
        {children}
    </DataContext.Provider>
}
export default DataProvider