import '../../assets/css/nav.css'
import { Link } from "react-router-dom";
import logoBrown from '../../assets/logo/icon logo/SVG/WM Private_iconlogo_1.svg';
function Navbar() {
  return (
    <div className='fixed-nav'>
    <div className="nav-container">
      <div className='logo-container'>
        <img src={logoBrown} alt="alt logo" />
       <h3><span>WM</span>FINANCIAL GROUP</h3>
       
      </div>
      
      <div className='nav-items'>
        <Link to="/" className='underline-hover'>Home</Link>
        <Link to="/products" className='underline-hover'>About</Link>
        <Link to="/" className='underline-hover'>Services</Link>
        <Link to="/" className='underline-hover'>Testimonials</Link>
        <Link to="/" className='contact-us'>Contact Us</Link>
      </div>
      </div>
      </div>
  )
}

export default Navbar