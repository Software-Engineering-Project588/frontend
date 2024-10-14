import './index.css'

const CollegeCard = props => {
    const {data} = props
    const {alpha_two_code, country, name, web_pages} = data
    return (
        <div className='college-card'>
            <h1>{name}</h1>
            <h2>{country}</h2>
            <a href={web_pages[0]} target='_blank'>{web_pages[0]}</a>
        </div>
    )
}

export default CollegeCard