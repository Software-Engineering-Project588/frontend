import { Link } from 'react-router-dom'
import BenefitCard from '../BenefitCard';
import Navbar from '../Navbar'
import './index.css'
import QuestionCard from '../QuestionCard'
import FacilitiesCard from '../FacilitiesCard'
import Footer from '../Footer'



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
        <h1 className='suggestion-heading'>Fare Finder</h1>
        <p className='suggestion-description'>If you're looking to book travel for an academic experience, you are likely searching for the most affordable deal. In an effort to reduce financial barriers and increase access, we are offering the Fare Finder™ app right inside of APIConnect to provide access to discounted airfare for academic travel. With Fare Finder, we're making educational travel simpler and more accessible than ever before. .</p>

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
          <Footer/>
      </div>
    </div>
  )
}

export default Home
