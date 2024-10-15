import { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './index.css';
import Navbar from '../Navbar';
import CollegeCard from '../CollegeCard';

// API status constants
const API_STATUS = {
    INITIAL: 'INITIAL',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
    IN_PROGRESS: 'IN_PROGRESS',
};

const Programs = () => {
    const [countriesList, setCountriesList] = useState([]);
    const [searchValue, updateSearchValue] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const [apiStatus, setApiStatus] = useState(API_STATUS.INITIAL);

    const getData = async () => {
        setApiStatus(API_STATUS.IN_PROGRESS);
        const url = `http://universities.hipolabs.com/search`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setCountriesList(data);
            setFilteredList(data);  // Initialize with all items
            setApiStatus(API_STATUS.SUCCESS);
        } catch (error) {
            console.error("Failed to fetch data:", error);
            setApiStatus(API_STATUS.FAILURE);
        }
    };

    const onSearch = (event) => {
        updateSearchValue(event.target.value);
    };

    const onSearchSubmit = (event) => {
        event.preventDefault();
        const updatedList = countriesList.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            (item.country && item.country.toLowerCase().includes(searchValue.toLowerCase()))
        );
        setFilteredList(updatedList);
    };

    useEffect(() => {
        getData();
    }, []);

    const renderContent = () => {
        switch (apiStatus) {
            case API_STATUS.INITIAL:
                return <p>Welcome! Start by searching for a university or country.</p>;
            case API_STATUS.IN_PROGRESS:
                return <p>Loading universities...</p>;
            case API_STATUS.FAILURE:
                return <p className="error-message">Failed to fetch universities. Please try again later.</p>;
            case API_STATUS.SUCCESS:
                return (
                    <>
                        {filteredList.length > 0 ? (
                            filteredList.map((eachItem, index) => (
                                <CollegeCard data={eachItem} key={index} />
                            ))
                        ) : (
                            <p>No results found for "{searchValue}".</p>
                        )}
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className='programs-container'>
            <Navbar />
            <div className='programs-content'>
                <form className='search-bar' onSubmit={onSearchSubmit}>
                    <input
                        className='search-input'
                        type='search'
                        placeholder='Search for a country or university'
                        value={searchValue}
                        onChange={onSearch}
                    />
                    <button type='submit' className='search-icon'><FaSearch /></button>
                </form>
                {renderContent()}
            </div>
        </div>
    );
};

export default Programs;
