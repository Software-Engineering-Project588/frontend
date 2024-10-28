import { createContext, useContext, useState } from 'react';

// Create the context
const AppliedDataContext = createContext();

// Provider component
export const AppliedDataProvider = ({ children }) => {
    const [appliedData, setAppliedData] = useState([]); // Initialize as an array

    const applyToCollege = (data) => {
        setAppliedData(prevData => [...prevData, data]); // Append new application to the array
    };

    return (
        <AppliedDataContext.Provider value={{ appliedData, applyToCollege }}>
            {children}
        </AppliedDataContext.Provider>
    );
};

// Custom hook for accessing the context
export const useAppliedData = () => {
    return useContext(AppliedDataContext);
};
