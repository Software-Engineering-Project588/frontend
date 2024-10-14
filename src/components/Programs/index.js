import { useEffect, useState } from 'react';
import './index.css';
import Navbar from '../Navbar';
import CollegeCard from '../CollegeCard';

const Programs = () => {
    const [countriesList, setCountriesList] = useState([]);
    const [searchValue, updateSearchValue] = useState('');

    const getData = async () => {
        const url = `http://universities.hipolabs.com/search`;
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
    };

    useEffect(() => {
        getData();
    }, []);

    const filteredList = countriesList.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        (item.country && item.country.toLowerCase().includes(searchValue.toLowerCase()))
    );

    return (
        <div className='programs-container'>
            <Navbar />
            <div className='programs-content'>
                <div className='search-bar'>
                    <input
                        className='search-input'
                        type='search'
                        placeholder='Search for a country or university'
                        value={searchValue}
                        onChange={onSearch}
                    />
                </div>
                {filteredList.map((eachItem, index) => (
                    <CollegeCard data={eachItem} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Programs;
