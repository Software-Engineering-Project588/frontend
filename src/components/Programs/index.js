import { useEffect, useState } from 'react';
import './index.css';
import Navbar from '../Navbar';
import CollegeCard from '../CollegeCard';

const Programs = () => {
    const [countriesList, setCountriesList] = useState([]);
    const [searchValue, updateSearchValue] = useState('');

    const getData = async () => {
        const url = `http://universities.hipolabs.com/search?country=${searchValue}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setCountriesList(data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    const onSearch = (event) => {
        const newValue = event.target.value;
        updateSearchValue(newValue);
        getData(); // Fetch data when search value changes
    };

    useEffect(() => {
        getData();
    }, []);

    

    return (
        <div className='programs-container'>
            <Navbar />
            <div className='programs-content'>
                <div className='search-bar'>
                    <input
                        className='search-input'
                        type='search'
                        placeholder='Search for a country'
                        value={searchValue}
                        onChange={onSearch}
                    />
                </div>
                {countriesList.map((eachItem, index) => (
                    <CollegeCard data={eachItem} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Programs;
