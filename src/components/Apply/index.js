import { useEffect, useState } from 'react';
import Navbar from "../Navbar";
import dataSet from '../data';
import { useAppliedData } from '../AppliedDataContext'
import Swal from 'sweetalert2'
import './index.css'

const Apply = (props) => {
    const { applyToCollege } = useAppliedData();
    const [data, setData] = useState(null);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        selectedCourse: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const collegeId = parseInt(props.match.params.id, 10);
        const collegeData = dataSet.find((college) => college.id === collegeId);
        if (collegeData) {
            setData(collegeData);
        } else {
            console.error('College not found');
        }
    }, [props.match.params.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const validate = () => {
        const errors = {};
        if (!formValues.firstName.trim()) {
            errors.firstName = 'First Name is required';
        }
        if (!formValues.lastName.trim()) {
            errors.lastName = 'Last Name is required';
        }
        if (!formValues.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formValues.selectedCourse) {
            errors.selectedCourse = 'Please select a course';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const appliedInfo = {
                ...formValues,
                college: data 
            };
            applyToCollege(appliedInfo);  // Save applied data to context
            console.log('Form submitted:', appliedInfo);
            
            // Clear form input fields
            setFormValues({
                firstName: '',
                lastName: '',
                email: '',
                selectedCourse: ''
            });
        }
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Application sent successfully",
            showConfirmButton: false,
            timer: 1500
          });
    };

    return (
        <div  className="container">

            <Navbar />
            <div className="apply-content">
                {data && (
                    <form onSubmit={handleSubmit}>
                        <h2 className='apply-heading'>Apply to {data.collegeName}</h2>
                        
                        <div className='input-cont'>
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formValues.firstName}
                                onChange={handleChange}
                                className='input'
                            />
                            {errors.firstName && <span className="error">{errors.firstName}</span>}
                        </div>

                        <div className='input-cont'>
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formValues.lastName}
                                onChange={handleChange}
                                className='input'
                            />
                            {errors.lastName && <span className="error">{errors.lastName}</span>}
                        </div>

                        <div className='input-cont'>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                className='input'
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>

                        <div className='input-cont'>
                            <label>Course</label>
                            <select
                                name="selectedCourse"
                                value={formValues.selectedCourse}
                                onChange={handleChange}
                            >
                                <option value="">Select a course</option>
                                {Object.entries(data.courses).map(([degree, courses]) => (
                                    <optgroup key={degree} label={degree}>
                                        {courses.map((course, index) => (
                                            <option key={index} value={course.name}>
                                                {course.name} - {course.fees}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                            {errors.selectedCourse && <span className="error">{errors.selectedCourse}</span>}
                        </div>

                        <button type="submit" className='submit-btn'>Apply</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Apply;
