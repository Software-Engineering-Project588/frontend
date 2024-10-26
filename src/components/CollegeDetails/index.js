import { useEffect, useState, useContext } from 'react';
import './index.css';
import dataSet from '../data';
import Navbar from '../Navbar';
import { WishlistContext } from '../WishListContext';

const CollegeDetails = (props) => {
    const [data, setData] = useState(null);
    const [isFav, setFav] = useState(false);
    const { addToWishlist, removeFromWishlist, wishlist } = useContext(WishlistContext);

    useEffect(() => {
        const collegeId = parseInt(props.match.params.id, 10);
        const collegeData = dataSet.find(college => college.id === collegeId);
        if (collegeData) {
            setData(collegeData);
            // Check if college is already in wishlist
            setFav(wishlist.some((item) => item.id === collegeId));
        } else {
            console.error('College not found');
        }
    }, [props.match.params.id, wishlist]);

    if (!data) {
        return <p>Loading college details...</p>;
    }

    const { courses, accommodationDetails } = data;

    const toggleWishlist = () => {
        if (isFav) {
            removeFromWishlist(data.id);
        } else {
            addToWishlist(data);
        }
        setFav(!isFav);
    };

    return (
        <div className='college-details'>
            <Navbar />
            <div className='college-name'>
                <div className='names'>
                    <h2>{data.collegeName}</h2>
                    <p className='location'>Location: {data.location}</p>
                    <p className='desc'>{data.description}</p>
                    <button className='apply-btn'>Apply Now</button><br/>
                    <button className='apply-btn' onClick={toggleWishlist}>
                        {isFav ? 'Remove from wishlist' : 'Add to wishlist'}
                    </button>
                </div>
                <div className='image'>
                    <img src='https://images.apiabroad.com/image/upload/ar_16:9,c_fill,g_auto,w_1600,h_900/v1691176508/programLead/null/32846470376_0346117db5_o_hpmpmx.jpg' alt="College"/>
                </div>
            </div>
            <h1 className='heading'>Programs</h1>
            <div className='courses-section'>
                {courses.BTech && (
                    <div className='courses'>
                        <h3>B.Tech Programs</h3>
                        {courses.BTech.map((course, index) => (
                            <div key={index} className='course-item'>
                                <p>Course Name: <span>{course.name}</span></p>
                                <p>Fees: <span>{course.fees}</span></p>
                            </div>
                        ))}
                    </div>
                )}
                {courses.MTech && (
                    <div className='courses'>
                        <h3>M.Tech Programs</h3>
                        {courses.MTech.map((course, index) => (
                            <div key={index} className='course-item'>
                                <p>Course Name: <span>{course.name}</span></p>
                                <p>Fees: <span>{course.fees}</span></p>
                            </div>
                        ))}
                    </div>
                )}
                {courses.PhD && (
                    <div className='courses'>
                        <h3>Ph.D. Programs</h3>
                        {courses.PhD.map((course, index) => (
                            <div key={index} className='course-item'>
                                <p>Course Name: <span>{course.name}</span></p>
                                <p>Fees: <span>{course.fees}</span></p>
                            </div>
                        ))}
                    </div>
                )}
                {courses.MBA && (
                    <div className='courses'>
                        <h3>MBA Programs</h3>
                        {courses.MBA.map((course, index) => (
                            <div key={index} className='course-item'>
                                <p>Course Name: <span>{course.name}</span></p>
                                <p>Fees: <span>{course.fees}</span></p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <h3 className='heading'>Accommodation details</h3>
            <div className='accommodation-section'>
                {accommodationDetails.map((accommodation) => (
                    <div key={accommodation.id} className='accommodation-item'>
                        <p>Hostel Name: <span>{accommodation.hostelName}</span></p>
                        <p>Type of Room: <span>{accommodation.typeOfRoom}</span></p>
                        <p>Area: <span>{accommodation.areaName}</span></p>
                        <p>Cost: <span>{accommodation.cost}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollegeDetails;
