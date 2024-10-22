import { Link } from 'react-router-dom'
import './index.css'

const CollegeCard = props => {
    const {data} = props
    const {country, collegeName, id, location} = data
    return (
        <Link className="link-button" to={`/college/${id}`}>
        <div className='colleges-page'>
        <div className='college-card'>
            <h1 className='college-heading'>{collegeName}</h1>
            <h3 className='college-country'>{country}</h3>
            <p>{location}</p>
        </div>
        </div>
        </Link>
    )
}

export default CollegeCard