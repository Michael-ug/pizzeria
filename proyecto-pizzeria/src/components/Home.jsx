
import './home.css';
function Home({ title, description }) {
  return (
    <>
    <div className="home-container">
        <div className='texto'>
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
    </div>
    </>
  )
}

export default Home