import './index.css'

const BenefitCard = props => {
    const data = props
    const {title, description} = data
    return (
        <div className='benefit-card'>
            <h1 className='benefit-title'>{title}</h1>
            <p className='benefit-description'>{description}</p>
        </div>
    )
}

export default BenefitCard