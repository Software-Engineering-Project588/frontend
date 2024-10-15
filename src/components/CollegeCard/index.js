import './index.css'

const CollegeCard = props => {
    const {data} = props
    const {alpha_two_code, country, name, web_pages} = data
    return (
        <div className='colleges-page'>
        <div className='college-card'>
            <h1 className='college-heading'>{name}</h1>
            <h3 className='college-country'>{country}</h3>
            <a href={web_pages[0]} target='_blank'>visit us</a>
        </div>
        </div>
    )
}

export default CollegeCard