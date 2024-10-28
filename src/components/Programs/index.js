import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './index.css';
import Navbar from '../Navbar';
import CollegeCard from '../CollegeCard';
import dataSet from '../data';

// API status constants
const API_STATUS = {
    INITIAL: 'INITIAL',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
    IN_PROGRESS: 'IN_PROGRESS',
};

const Programs = () => {
    const [countriesList] = useState(dataSet); // Using dataSet directly
    const [searchValue, updateSearchValue] = useState('');
    const [filteredList, setFilteredList] = useState(dataSet); // Initialize with all items
    const [apiStatus, setApiStatus] = useState(API_STATUS.SUCCESS); // No API, so directly set SUCCESS

    const onSearch = (event) => {
        updateSearchValue(event.target.value);
    };

    const onSearchSubmit = (event) => {
        event.preventDefault();
        const updatedList = countriesList.filter((item) =>
            item.collegeName.toLowerCase().includes(searchValue.toLowerCase()) ||
            (item.country && item.country.toLowerCase().includes(searchValue.toLowerCase()))
        );
        setFilteredList(updatedList);
    };

    const renderContent = () => {
        switch (apiStatus) {
            case API_STATUS.INITIAL:
                return <p>Welcome! Start by searching for a university or country.</p>;
            case API_STATUS.SUCCESS:
                return (
                    <>
                        {filteredList.length > 0 ? (
                            filteredList.map((eachItem) => (
                                <CollegeCard data={eachItem} key={eachItem.id} />
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
