import { Link } from 'react-router-dom'
import BenefitCard from '../BenefitCard';
import Navbar from '../Navbar'
import './index.css'
import QuestionCard from '../QuestionCard'
import FacilitiesCard from '../FacilitiesCard'

const countriesList = [
  {
    id: 1,
    country: "United States",
    description: "Home to top universities like Harvard and MIT, the U.S. offers diverse programs and cultures. Experience a mix of innovation and tradition in education.",
    imageUrl: "https://img.freepik.com/free-photo/dunster-house-cambridge-usa_1268-14362.jpg?semt=ais_hybrid",
  },
  {
    id: 2,
    country: "United Kingdom",
    description: "Renowned for its rich history and prestigious institutions like Oxford and Cambridge, the UK provides a unique blend of academic excellence and cultural experiences.",
    imageUrl: "https://img.freepik.com/free-photo/tower-bridge-london-uk_268835-1403.jpg?semt=ais_hybrid"
  },
  {
    id: 3,
    country: "Canada",
    description: "Known for its welcoming environment and high-quality education, Canada is home to world-class universities like the University of Toronto.",
    imageUrl: "https://img.freepik.com/free-photo/ottawa-parliament-hill-building_649448-3632.jpg?semt=ais_hybrid"
  },
  {
    id: 4,
    country: "Australia",
    description: "With stunning landscapes and vibrant cities, Australia offers excellent education opportunities at institutions like the University of Melbourne.",
    imageUrl: "https://img.freepik.com/free-photo/beautiful-shot-sydney-harbor-bridge-with-light-pink-blue-sky_181624-16041.jpg?semt=ais_hybrid"
  },
  {
    id: 5,
    country: "Germany",
    description: "Famous for its strong engineering programs and no tuition fees for international students, Germany is a top choice for higher education.",
    imageUrl: "https://img.freepik.com/free-photo/building-with-columns_1160-803.jpg?semt=ais_hybrid"
  },
  {
    id: 6,
    country: "France",
    description: "A hub of culture and art, France is home to prestigious institutions like Sorbonne University, providing a rich educational experience.",
    imageUrl: "https://img.freepik.com/free-vector/sorbonne-university-paris-historic-european-landmark_1308-160042.jpg?semt=ais_hybrid"
  },
  {
    id: 7,
    country: "Japan",
    description: "Combining tradition and modernity, Japan offers excellent education with a focus on technology and innovation at universities like the University of Tokyo.",
    imageUrl: "https://img.freepik.com/free-photo/front-osaka-castle-japan-blue-sky_1150-10905.jpg?semt=ais_hybrid"
  },
  {
    id: 8,
    country: "Netherlands",
    description: "Renowned for its high-quality education system and a wide range of English-taught programs, the Netherlands is a popular destination for international students.",
    imageUrl: "https://img.freepik.com/free-photo/beautiful-shot-historic-binnenhof-castle-netherlands_181624-41940.jpg?semt=ais_hybrid"
  },
  {
    id: 9,
    country: "Singapore",
    description: "A global education hub, Singapore boasts top universities and a multicultural environment, making it an attractive destination for students.",
    imageUrl: "https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?semt=ais_hybrid"
  },
  {
    id: 10,
    country: "New Zealand",
    description: "Known for its stunning landscapes and friendly locals, New Zealand offers high-quality education at institutions like the University of Auckland.",
    imageUrl: "https://img.freepik.com/free-photo/closeup-shot-two-domed-towers-old-royal-naval-college-greenwich-london_181624-44376.jpg?semt=ais_hybrid" // University of Auckland
  },
  {
    id: 11,
    country: "Sweden",
    description: "Famous for its innovative education system and emphasis on research, Sweden is home to renowned institutions like Lund University.",
    imageUrl: "https://img.freepik.com/free-photo/wide-angle-shot-schonbrunn-palace-vienna-austria-with-cloudy-blue-sky_181624-9096.jpg?semt=ais_hybrid" // Lund University
  },
  {
    id: 12,
    country: "South Korea",
    description: "With a focus on technology and innovation, South Korea's top universities, such as Seoul National University, offer a unique learning environment.",
    imageUrl: "https://img.freepik.com/free-photo/gyeongbokgung-palace_74190-3232.jpg?semt=ais_hybrid" // Seoul National University
  },
  {
    id: 13,
    country: "Italy",
    description: "Rich in history and culture, Italy offers prestigious universities like the University of Bologna, providing a unique academic experience.",
    imageUrl: "https://img.freepik.com/free-photo/beautiful-shot-osborne-cloudy-skies-uk_181624-60233.jpg?semt=ais_hybrid" // University of Bologna
  },
  {
    id: 14,
    country: "Spain",
    description: "With a vibrant culture and world-class universities like the University of Barcelona, Spain is an attractive option for international students.",
    imageUrl: "https://img.freepik.com/free-photo/view-park-guell-winter-barcelona_1398-4411.jpg?semt=ais_hybrid" // University of Barcelona
  },
  {
    id: 15,
    country: "Switzerland",
    description: "Known for its high-quality education and research institutions like ETH Zurich, Switzerland combines academic rigor with stunning landscapes.",
    imageUrl: "https://img.freepik.com/free-photo/red-footbridge-saone-river-morning_268835-4013.jpg?semt=ais_hybrid" // ETH Zurich
  },
  {
    id: 16,
    country: "Ireland",
    description: "With a rich literary history and institutions like Trinity College Dublin, Ireland offers a warm welcome to international students.",
    imageUrl: "https://img.freepik.com/free-photo/cec-bank-building_1268-14720.jpg?semt=ais_hybrid" // Trinity College Dublin
  },
  {
    id: 17,
    country: "Finland",
    description: "Renowned for its innovative education system, Finland offers a unique approach to learning at universities like the University of Helsinki.",
    imageUrl: "https://img.freepik.com/free-photo/amazing-shot-buildings-unique-architecture-gamla-stan-stockholm-sweden_181624-48921.jpg?semt=ais_hybrid" // University of Helsinki
  },
  {
    id: 18,
    country: "Belgium",
    description: "Home to institutions like KU Leuven, Belgium provides a diverse educational landscape and is known for its multilingual environment.",
    imageUrl: "https://img.freepik.com/free-photo/low-angle-shot-famous-vieille-bourse-lille-france_181624-16249.jpg?semt=ais_hybrid" // KU Leuven
  },
  {
    id: 19,
    country: "Austria",
    description: "With a rich cultural heritage and universities like the University of Vienna, Austria offers a unique blend of education and history.",
    imageUrl: "https://img.freepik.com/free-photo/wide-angle-shot-schonbrunn-palace-vienna-austria-with-cloudy-blue-sky_181624-9096.jpg?semt=ais_hybrid" // University of Vienna
  },
  {
    id: 20,
    country: "Norway",
    description: "Known for its stunning natural beauty and free education for international students, Norway is an attractive destination for higher learning.",
    imageUrl: "https://img.freepik.com/free-photo/aerial-shot-houses-buildings-city-oslo-noway_181624-34404.jpg?semt=ais_hybrid" // University of Oslo
  },
  {
    id: 21,
    country: "Malaysia",
    description: "A multicultural hub, Malaysia offers affordable education and institutions like the University of Malaya, making it a popular choice for students.",
    imageUrl: "https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?semt=ais_hybrid" // University of Malaya
  }
];

const benefits = [
  {
    title: "Invest in Your Future",
    description: "Expand your understanding of the world and build skills and experiences that employers value. Differentiate your resume from peers, expand your employment options, improve your odds of getting hired faster and your chances of a higher starting salary."
  },
  {
    title: "Learn a Language",
    description: "Learn a new language or improve your language skills by living in and navigating a new country, or through robust dialogue in an integrated classroom with other students. API's resident directors further support you through conversation practice and tutoring. The ability to speak more than one language opens employment doors."
  },
  {
    title: "Build Confidence & Independence",
    description: "Feel empowered to explore your new host country and visit nearby cities and towns, all while receiving the support of API resident directors to assist with any need that arises. Your newfound confidence will be easily recognizable by future employers and will help you have stronger interviews."
  },
  {
    title: "Change the World",
    description: "Engage directly with the global community, shifting your world view and forming new, global connections that break down barriers and foster understanding. What's more, you'll learn skills that have real-world application, such as the value of teamwork and the true impact that goodwill and coordination can have on a local community."
  }
];

const faqs = [
  {
    id: 1,
    question: "How do I decide where to go?",
    answer: "Consider your academic goals, interests, and budget. Research different programs and destinations."
  },
  {
    id: 2,
    question: "What are your policies around diversity, equity and inclusion?",
    answer: "We are committed to providing inclusive opportunities for all students, regardless of background."
  },
  {
    id: 3,
    question: "Will I get course credit?",
    answer: "Most programs offer transferable credits. Check with your home institution for specific policies."
  },
  {
    id: 4,
    question: "Can I afford it?",
    answer: "Various financial aid options and scholarships are available to help make studying abroad affordable."
  },
  {
    id: 5,
    question: "Is studying or interning abroad safe?",
    answer: "We prioritize student safety with comprehensive support and guidance throughout your program."
  },
  {
    id: 6,
    question: "How do I apply?",
    answer: "Start by exploring our programs online, then follow the application process for your chosen destination."
  }
];

const programAssistance = [
  {
    title: "Personalized Application Assistance",
    description: "Our Program Managers will walk you through each step of the process, ensuring the proper forms are completed, providing detailed information and instruction, and helping to make your experience a total success."
  },
  {
    title: "Accredited & Relevant Course Offerings",
    description: "This isn’t just travel for the sake of traveling. This is travel with a purpose. Our team can help you to select courses and programs that enhance your degree and career aspirations so you can stay on track to achieve your goals."
  },
  {
    title: "Resident Directors",
    description: "Our in-country resident directors are with you every step of the way, ensuring your safety, designing culturally-relevant excursions and available to help with any issues that may arise, 24×7."
  },
  {
    title: "Convenient, Safe & Highly-Rated Housing",
    description: "The location and type of housing provided depends on your program and location, but in all cases, we work to ensure you are in safe, desirable areas that are easily accessible from your host university."
  },
  {
    title: "Health & Safety",
    description: "In concert with API’s Student Success team, our international personnel work to ensure that the best practices in risk management are employed around the world. Read more about our health and safety measures, insurance, emergency management and more by clicking here."
  },
  {
    title: "Enriching Cultural Activities & Excursions",
    description: "Immerse yourself in the culture and experiences of your host country through exciting excursions and enriching cultural activities led by API resident directors and local experts, at no additional cost!"
  }
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='home-content'>
        <div className='banner-section'>
          <div className='banner-left'>
            <h1 className='banner-heading'>STUDY ABROAD</h1> 
            <p className='banner-description'>Attend prestigious universities across the globe, complete courses in virtually any area of study, and immerse yourself in another country’s language, lifestyle and culture. </p>
            <Link className="link-button" to='/colleges'>
              <button className='banner-btn'>FIND MY PROGRAM</button>
            </Link>
          </div>
          <div className='banner-right'>
            <img src='https://img.freepik.com/premium-vector/education-travel-concept-man-woman-standing-together_1332476-3262.jpg?w=1380' alt='banner-img' className='banner-img' />
          </div>
        </div>
      </div>
      <div className='benefits-section'>
        <h1 className='benefits-heading'>WHY STUDY ABROAD?</h1>
        <div className='benefits-cards'>
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </div>
      <div className='suggestion'>
        <h1 className='suggestion-heading'>Fare Finder™</h1>
        <p className='suggestion-description'>If you're looking to book travel for an academic experience, you are likely searching for the most affordable deal. In an effort to reduce financial barriers and increase access, we are offering the Fare Finder™ app right inside of APIConnect to provide access to discounted airfare for academic travel. With Fare Finder, we're making educational travel simpler and more accessible than ever before. .</p>
        <p className='suggestion-yellow'>Learn More about Fare Finder</p>
      </div>
      <div className='faq-main'>
        <h1 className='faq-heading'>Answers to Your Most Common Questions</h1>
        <div className='faq-section'>
          {faqs.map((faq) => (
            <QuestionCard key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <button className='faq-btn'>VIEW ALL FAQS</button>
      </div>
      <div className='facilities-section'>
        <h1 className='facilities-heading'>What's Included</h1>
        <div className='facilities-cards'>
          {programAssistance.map((program) => {
            return <FacilitiesCard key={program.id} title={program.title} description={program.description} />
          })}
        </div>
      </div>
      <div className='joinUs'>
        <h1 className='joinUs-heading'>Combine your study abroad with virtual, accredited coursework for an even more robust outcome</h1>
        <p className='joinUs-p'>Experience the world from anywhere in the world with API’s virtual programs. You’ll gain the flexibility to take a class in the morning and go on an excursion in the afternoon. Tackle global challenges, study a new language with native speakers, give your resume a global edge, and more! Explore our virtual programs and customize them to your schedule!</p>
        <button className='joinUs-btn'>LEARN MORE →</button>

      </div>
      <div className='footer'>

      </div>
    </div>
  )
}

export default Home
