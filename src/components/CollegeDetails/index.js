import { useEffect, useState } from 'react';
import './index.css';
import dataSet from '../data';

const CollegeDetails = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const collegeId = parseInt(props.match.params.id, 10);
        const collegeData = dataSet.find(college => college.id === collegeId);
        if (collegeData) {
            setData(collegeData);
        } else {
            console.error('College not found');
        }
    }, [props.match.params.id]);

    // Show loading message if data is not yet fetched
    if (!data) {
        return <p>Loading college details...</p>;
    }

    const { courses, accommodationDetails } = data;

    return (
        <div>
            <div>
                <h2>{data.collegeName}</h2>
                <p>Location: {data.location}</p>
                <p>{data.description}</p>
            </div>
            <div className='courses-section'>
                {courses.BTech && (
                    <div>
                        <h3>B.Tech Programs</h3>
                        {courses.BTech.map((course, index) => (
                            <div key={index} className='course-item'>
                                <p>Course Name: {course.name}</p>
                                <p>Fees: {course.fees}</p>
                            </div>
                        ))}
                    </div>
                )}

                {courses.MTech && (
                    <div>
                        <h3>M.Tech Programs</h3>
                        {courses.MTech.map((course, index) => (
                            <div key={index} className='course-item'>
                                <p>Course Name: {course.name}</p>
                                <p>Fees: {course.fees}</p>
                            </div>
                        ))}
                    </div>
                )}

                {courses.PhD && (
                    <div>
                        <h3>Ph.D. Programs</h3>
                        {courses.PhD.map((course, index) => (
                            <div key={index} className='course-item'>
                                <p>Course Name: {course.name}</p>
                                <p>Fees: {course.fees}</p>
                            </div>
                        ))}
                    </div>
                )}

                {courses.MBA && (
                    <div>
                        <h3>MBA Programs</h3>
                        {courses.MBA.map((course, index) => (
                            <div key={index} className='course-item'>
                                <p>Course Name: {course.name}</p>
                                <p>Fees: {course.fees}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='accommodation-section'>
                <h3>Accommodation Details</h3>
                {accommodationDetails.map((accommodation) => (
                    <div key={accommodation.id} className='accommodation-item'>
                        <p>Hostel Name: {accommodation.hostelName}</p>
                        <p>Type of Room: {accommodation.typeOfRoom}</p>
                        <p>Area: {accommodation.areaName}</p>
                        <p>Cost: {accommodation.cost}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CollegeDetails;
